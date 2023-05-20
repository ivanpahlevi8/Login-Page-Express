// user routr

const express = require('express');

const router = express.Router();

const userController = require('../controller/user_controller');

// make route
router.post('/post-data', userController.addData);

router.get('/get-all', userController.getAllData);

router.get('/get-id/:id', userController.getDataById);

router.get('/get-first-name/:firstname', userController.getDataByFirstName);

router.get('/get-middle-name/:middlename', userController.getDataByMiddleName);

router.get('/get-last-name/:lastname', userController.getDataByLastName);

router.get('/get-age/:age', userController.getDataByAge);

router.get('/get-address/:address', userController.getDataByAddress);

router.get('/get-username/:username', userController.getDataByUsername);

router.patch('/patch-id/:id', userController.updateDataById);

router.patch('/patch-first-name/:firstname', userController.updateDataByFirstName);

router.patch('/patch-middle-name/:middlename', userController.updateDataByMiddleName);

router.patch('/patch-last-name/:lastname', userController.updateDataByLastName);

router.patch('/patch-age/:age', userController.updateDataByAge);

router.patch('/patch-address/:address', userController.updateDataByAddress);

router.patch('/patch-username/:username', userController.updateDataByUsername);

router.delete('/delete-id/:id', userController.deleteDataById);

router.delete('/delete-first-name/:firstname', userController.deleteDataByFirstName);

router.delete('/delete-middle-name/:middlename', userController.deleteDataByMiddleName);

router.delete('/delete-last-name/:lastname', userController.deleteDataByLastName);

router.delete('/delete-age/:age', userController.deleteDataByAge);

router.delete('/delete-address/:address', userController.deleteDataByAddress);

router.delete('/delete-username/:username', userController.deleteDataByUsername);

module.exports = router;