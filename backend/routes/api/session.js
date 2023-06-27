const router = require('express').Router()

const {setTokenCookie, restoreUser} = require('../../utils/auth')
const {User} = require('../../db/models')


// Log In
router.post('/', async(req, res, next) => {
    const {credential, password} = req.body

    const user = await User.login({credential, password})

    if(!user){
        const err = new Error('Login failed')
        err.status = 404
        err.errors = ['The provided credentials were invalid']
        return next(err)
    }

    await setTokenCookie(res, user)

    return res.json({
        user
    })
})


// Log Out
router.delete('/', (_req, res) => {
    res.clearCookie('token')
    return res.json({message: 'success'})
})

// Restore Session User
router.get('/', restoreUser, (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

module.exports = router