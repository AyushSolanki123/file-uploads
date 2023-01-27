const multer = require("multer");
const fs = require("fs");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "Assests");
    },
    filename: (req, file, callback) => {
        const files = fs.readdirSync("Assests");
        callback(null, `${file.originalname}`);
    },
});

const upload = multer({ storage: fileStorageEngine });
module.exports = upload;
