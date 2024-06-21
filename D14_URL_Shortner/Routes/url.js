const express = require('express')
const router = express.Router()
const {handleCreateShortURL, handleGetURLs,handleShowAnalytics} = require('../Controllers/url.js')

router.post("/", (handleCreateShortURL));

router.get("/:shortID", (handleGetURLs));

router.get("/analytics/:shortID", (handleShowAnalytics));


module.exports = router;