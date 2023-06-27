const router = require('express').Router()
const { restoreUser } = require('../../utils/auth.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');


// FOR TESTING THE MIDDLEWARES
// // GET /api/set-token-cookie
// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// });

// // GET /api/restore-user
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// router.get('/require-auth', requireAuth, (req, res) => {
//       return res.json(req.user);
//     }
// );

module.exports = router