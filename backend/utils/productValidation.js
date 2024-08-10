const zod = require('zod');
const userValidation = zod.object({
    body: zod.object({
        name: zod
        .string()
        .max(30,"The maximum character of Product name should be 30")
        .min(2,"The minimum character of Product name should be 2"),
        price: zod.number(),
        category: zod.string()
        .max(20,"The maximum character of Product Category should be 20")
        .min(3,"The minimum character of Product Category should be 3"),
        userId: zod.number(),
        company: zod.string()
        .max(20,"The maximum character of Company should be 20")
        .min(2,"The minimum character of Company should be 2"),
    }),
});

module.exports = userValidation;