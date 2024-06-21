const fs = require('fs');
const path = require('path');

function logRequest() {
    return (req, res, next) => {
        const log = `${Date.now()}\t${req.path}\t${req.method}\t${req.headers.host}\n`;

        fs.appendFile("log.txt", log, (err,data) => {
            if (err) {
                console.log("Error while logging: ", err);
            } else {
                console.log("Logging successful");
            }
        });

        next();
    };
}

module.exports = {
    logRequest
}
