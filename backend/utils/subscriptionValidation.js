const zod = require('zod');
const subscriptionValidation = zod.object({
    body: zod.object({
        subName: zod
        .string()
        .max(10,"The maximum character of User name should be 10")
        .min(3,"The minimum character of User name should be 3"),
        type: zod.string()
        .max(100,"The maximum character of User address should be 100")
        .min(5,"The minimum character of User address should be 5"),
        price: zod.number(),
    }),
});

module.exports = subscriptionValidation;