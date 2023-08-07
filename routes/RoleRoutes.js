const express = require('express');
const router = express.Router();
const roleController = require('../controller/RoleController');

router.post('/role',roleController.createrole);
router.get('/role',roleController.getRole);

module.exports = router;