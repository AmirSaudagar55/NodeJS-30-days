const express = require('express')
const router = express.Router()
const URL = require('../Model/Schema.js')
const mongoose = require('mongoose')
const {handleCreateShortURL, handleGetURLs,handleShowAnalytics} = require('../Controllers/url.js')

router.get("/", async (req, res)=>{
    const urls = await URL.find({})
    res.status(200).render("home", {urls : urls});   //{urls : urls} ====== {urls}
})

router.post("/", (handleCreateShortURL));

router.get("/:shortID", (handleGetURLs));

router.get("/analytics/:shortID", (handleShowAnalytics));


module.exports = router;