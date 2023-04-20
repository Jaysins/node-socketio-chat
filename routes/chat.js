const express = require("express")

const router = express.Router()

const {createUser} = require("../controllers/chat")

router.route("/createUser").post(createUser)

module.exports = router
