const express = require("express");

const testControllers = require("../controllers/testControllers");

const router = express.Router();

router.get("/", testControllers.helloWorld);

module.exports = router;
