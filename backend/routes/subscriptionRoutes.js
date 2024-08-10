const express = require('express');
const router = express.Router();
const subScriptionController = require('../controller/subscriptionController'); 
const validate = require('../middleware/zodMiddleware');
const subscriptionValidation = require('../utils/subscriptionValidation'); 

router.post('/subscription',validate(subscriptionValidation),subScriptionController.addSubscription);
router.get('/subscription',subScriptionController.getAllSubscription);
router.get('/subscription/:id',subScriptionController.getSubscriptionById);
router.post('/subscription/:id',subScriptionController.updateSubscriptionById);
router.delete('/subscription/:id',subScriptionController.deleteSubscriptionById);

module.exports = router;