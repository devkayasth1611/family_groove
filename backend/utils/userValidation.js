const zod = require('zod');
const userValidation = zod.object({
    body: zod.object({
        name: zod
        .string()
        .max(10,"The maximum character of User name should be 10")
        .min(3,"The minimum character of User name should be 3"),
        email: zod.string().email(),
        address: zod.string()
        .max(100,"The maximum character of User address should be 100")
        .min(5,"The minimum character of User address should be 5"),
        password: zod.number(),
    }),
});

module.exports = userValidation;