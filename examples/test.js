const {extractCardDetails} = require('../src');

const imagePath = '../media/pancard.jpg'; // Pass path to your PAN/Aadhaar image
const cardType = 'PAN'; // Card type can either be `PAN`` or `AADHAAR`

extractCardDetails(imagePath, cardType)
    .then((extractedDetails) => {
        console.log(`PAN Number: ${extractedDetails.Number}`);
    })
    .catch((err) => {
        console.error(err);
    });