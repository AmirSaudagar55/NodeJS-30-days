const URL = require('../Model/Schema.js')
const shortid  = require('shortid')

async function handleCreateShortURL(req, res){

    if(!req.body.url){
        res.status(400).json({message : "Provide Proper URL"});
    }

    if(!req.cookies.uid){
        res.status(200).render("login")
    }

    const urls = await URL.find({})
    const givenURL = req.body.url
    const id = shortid.generate()

    const shortURL = await URL.create({
        shortID : id,
        originalURL : givenURL,
        createdBy : req.user._id
    })

    res.status(201).render("home",{id : shortURL.shortID, doc : shortURL, urls : urls})

}

async function handleGetURLs (req, res){
    const id = req.params.shortID
    const redirectURL= await URL.findOneAndUpdate({shortID : id}, 
        {
            $push : {visitHistory : {timestamps : Date.now()} }
        }
    );
    if(!redirectURL)   {
        res.status(500).json({message : "No URL exists."})
    } 
    else
    {
        res.status(200).redirect(redirectURL.originalURL);
    }
}

async function handleShowAnalytics(req, res){
    const id = req.params.shortID
    const foundDoc = await URL.findOne({shortID : id});
    if(!foundDoc){
        res.status(500).json({message : "URL not found in database. Try Entering correct URL."})
    }
    const length = foundDoc.visitHistory.length;
    res.status(200).json({totalClicks : length, analytics : foundDoc});
}

module.exports = {
    handleCreateShortURL,
    handleGetURLs,
    handleShowAnalytics
}