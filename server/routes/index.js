const express = require('express');
const router = require('express').Router();
const path = require('path');

router.use("/", express.static(path.resolve('.', 'dist')));

//router.use('/api', require('./badges'));

module.exports = router;
