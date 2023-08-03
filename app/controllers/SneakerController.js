const { Sneaker, validate } = require("../models/Sneaker");
const joi = require("joi");

class SneakerController {
    // @ [GET] api/v1/products
    // Get all products
    async getAll(req, res, next) {
        try {
            const sneakers = await Sneaker.find({}).sort({ id: 1 });
            return res.status(200).json({ success: true, shoes: sneakers });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // @ [GET] api/v1/products/:id
    //  Get a product by id
    async getById(req, res, next) {
        try {
            const sneaker = await Sneaker.findById(req.params.id);
            if (!sneaker) return res.status(404).json({ success: false, message: "Sneaker not found" });
            res.status(200).json({ success: true, shoe: sneaker });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // @ [POST] api/v1/products
    // Create a new product
    async create(req, res, next) {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });
        try {
            let newSneaker = new Sneaker({ ...req.body });
            await newSneaker.save();
            return res.status(201).json({ success: true, message: "Create Sneaker Success", shoe: newSneaker });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [PUT] api/v1/products/:id
    // Update a product by id
    async update(req, res, next) {
        try {
            const sneaker = await Sneaker.findById(req.params.id);
            if (!sneaker) return res.status(404).send({ success: false, message: "Sneaker not found" });
            const newSneaker = { ...sneaker, ...req.body };
            await newSneaker.save();
            res.status(200).send({ success: true, message: "Update Sneaker Success", shoe: newSneaker });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [DELETE] api/v1/products/:id
    // Delete a product by id
    async delete(req, res, next) {
        try {
            const sneaker = await Sneaker.findByIdAndDelete(req.params.id);
            if (!sneaker) return res.status(404).send({ success: false, message: "Sneaker not found" });
            res.status(200).send({ success: true, message: "Deleted Sneaker" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }
}

module.exports = new SneakerController();
