const fs = require('fs').promises;
const Tesseract = require('tesseract.js');
const sharp = require('sharp');
const { config } = require('./config');

async function extractCardDetails(imagePath, cardType) {
  // Validate the cardType parameter
  if (!(cardType in config)) {
    throw new Error('Invalid card type');
  }

  try {
    // Preprocess the image to improve OCR accuracy (e.g., resizing and thresholding)
    await sharp(imagePath)
      .resize(1000) // Adjust the size as needed
      .threshold(150) // Adjust the threshold as needed
      .toFile('processed-image.jpg');

    // Perform OCR on the preprocessed image
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');

    // Delete the processed image
    await fs.unlink('processed-image.jpg');

    // Extract details based on the card type and provided regexes
    return extractDetails(text, cardType);
  } catch (error) {
    throw error;
  }
}

// Function to extract card details using the provided regex
function extractDetails(ocrText, cardType) {
  const regex = new RegExp(config[cardType]);
  const matches = ocrText.match(regex);
  return {
    Number: matches ? matches[0] : `${cardType} Number not found`,
  };
}

module.exports = {
  extractCardDetails
};
