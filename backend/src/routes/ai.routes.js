const express = require('express')
const router = express.Router()

const aiController = require('../controllers/ai.controller') 

// router.get('/get-response', aiController.getResponse)
// router.post('/get-response', aiController.getResponse)
router.post('/get-review', aiController.getReview)

module.exports = router;