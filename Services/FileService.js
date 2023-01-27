const fs = require("fs");
const aws = require("aws-sdk");

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        const files = fs.readdirSync("Assests");
        const fileName = `${file.originalname}`;
        const filePath = `Assests\\${fileName}`;

        aws.config.update({ region: "ap-south-1" });
        const client = new aws.Rekognition();
        const params = {
            Image: {
                S3Object: {
                    Bucket: bucket,
                    Name: photo,
                },
            },
            MaxLabels: 10,
        };
        client.detectLabels(params, function (err, response) {
            if (err) {
                console.log(err, err.stack); // an error occurred
            } else {
                console.log(`Detected labels for: ${photo}`);

                response.Labels.forEach((label) => {
                    console.log(`Label:      ${label.Name}`);
                    console.log(`Confidence: ${label.Confidence}`);
                    console.log("Instances:");
                    label.Instances.forEach((instance) => {
                        let box = instance.BoundingBox;
                        console.log("  Bounding box:");
                        console.log(`    Top:        ${box.Top}`);
                        console.log(`    Left:       ${box.Left}`);
                        console.log(`    Width:      ${box.Width}`);
                        console.log(`    Height:     ${box.Height}`);
                        console.log(`  Confidence: ${instance.Confidence}`);
                    });
                    console.log("Parents:");
                    label.Parents.forEach((parent) => {
                        console.log(`  ${parent.Name}`);
                    });
                    console.log("------------");
                    console.log("");
                }); // for response.labels
            } // if
        });
    });
}

module.exports = {
    uploadFile: uploadFile,
};
