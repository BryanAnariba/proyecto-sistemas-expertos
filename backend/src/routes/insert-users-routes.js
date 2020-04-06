const express = require('express');
const router = express();
const controller = require('../controllers/insert-users-controller');

router.post('/invite-user', controller.inviteUser);
router.get('/invite-user' , controller.getUsers);
router.get('/invite-user/:id' , controller.getUser);
router.put('/invite-user/:id' , controller.updateUser);

module.exports = router;