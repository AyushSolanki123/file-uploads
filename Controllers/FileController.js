const FileService = require("../Services/FileService");
const ErrorBody = require("../Utils/ErrorBody");

function uploadFile(req, res, next) {
    FileService.uploadFile(req.file)
        .then((response) => {
            res.status(200);
            res.json({
                data: response,
                message: "SIngle File Upload",
            });
        })
        .catch((error) => {
            next(
                new ErrorBody(
                    error.statusCode || 500,
                    error.errorMessage || "Server error occurred"
                )
            );
        });
}

module.exports = {
    uploadFile: uploadFile,
};
