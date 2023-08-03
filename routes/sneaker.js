const express = require("express");
const router = express.Router();
const SneakerController = require("../app/controllers/SneakerController.js");

// @ [GET] api/v1/products
// Get all products
router.get("/", SneakerController.getAll);

// @ [GET] api/v1/products/:id
// Get a product by id
router.get("/:id", SneakerController.getById);

// @ [POST] api/v1/products
// Create a new product
router.post("/", SneakerController.create);

// @ [PUT] api/v1/products/:id
// Update a product by id
router.put("/:id", SneakerController.update);

// @ [DELETE] api/v1/products/:id
// Get a product by id
router.delete("/:id", SneakerController.delete);

module.exports = router;
