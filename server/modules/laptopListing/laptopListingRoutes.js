const express = require("express");
const router = new express.Router();
const api = require("./laptopListingController");

router.get("/laptop-management/laptops", api.listCars);
router.post("/car-management/contact", api.createContact);


module.exports = router