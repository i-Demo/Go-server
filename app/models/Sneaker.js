const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");

const SneakerSchema = new Schema(
    {
        id: { type: Number, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        color: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const validate = (sneaker) => {
    const schema = joi.object({
        id: joi.number().required(),
        image: joi.string().required(),
        name: joi.string().required(),
        description: joi.string().required(),
        price: joi.number().required(),
        color: joi.string().required(),
    });
    return schema.validate(sneaker);
};

const Sneaker = mongoose.model("sneakers", SneakerSchema);

module.exports = { Sneaker, validate };
