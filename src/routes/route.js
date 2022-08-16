const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")


router.post("/createBook", bookController.createBook)

router.get("/getBookList", bookController.getBookList)

router.post("/getBooksInYear", bookController.getBooksInYear)

router.post("/getParticularBook", bookController.getParticularBooks)

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;