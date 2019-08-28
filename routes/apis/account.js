const express = require('express');
const dotenv = require("dotenv");
const router = express.Router();
const mongoose = require('mongoose');

const Account = require('../../models/account');

dotenv.config();

router.get('/:number', (req, res) => {
    Account.retreiveAccountInfo(req, res);
});

router.post('/deposit', (req, res) => {
    Accounts.deposit(req, res);
});

router.post('/transfer', (req, res) => {
    Accounts.transfer(req, res);
})


module.exports = router;