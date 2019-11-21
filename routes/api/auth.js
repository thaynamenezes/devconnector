const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route           GET api/auth
// @description     Test route
// @access          Public

// To protect route just add middleware as a param
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(error.message);
    res.statu(500).send('Server Error');
  }
});

module.exports = router;
