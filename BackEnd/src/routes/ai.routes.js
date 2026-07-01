const express = require('express');
const aiController = require("../controllers/ai.controller");
const router = express.Router();

router.get("/get-response" , aiController.getRespond)

module.exports = router;
