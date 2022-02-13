const express = require ("express");
const authController = require('../controllers/auth');
const router = express.Router();
router.post( '/register', authController.register )


router.post( '/register',( req, res) => {
    res.render ('register');
});

router.get( '/auth/register',( req, res) => {
    res.render ('register');
});
module.exports = router;