# PAN and Aadhaar OCR Extractor

A Node.js package for extracting PAN and Aadhaar card numbers from scanned images using Optical Character Recognition (OCR).

- Validate PAN and Aadhaar cards with ease.
- Extract card details quickly from scanned images.
- Works with Node.js projects.

## Installation

You can install this package using npm:

```bash
npm install pan-aadhaar-ocr
```

## Usage

```javascript
const {extractCardDetails} = require('pan-aadhaar-ocr');

const imagePath = 'path/to/your/image.jpg'; // Pass path to your PAN/Aadhaar image
const cardType = 'PAN'; // Card type can either be `PAN`` or `AADHAAR`

extractCardDetails(imagePath, cardType)
    .then((extractedDetails) => {
        console.log(`PAN Number: ${extractedDetails.Number}`);
    })
    .catch((err) => {
        console.error(err);
    });
```

You can also use async-await:

```javascript
try {
    const extractedDetails = await extractCardDetails(imagePath, cardType);
    console.log(extractedDetails);
} catch (err) {
    console.error('Something went wrong while extracting card details');
}

```

## Supported Card Types

### `PAN`

PAN (Permanent Account Number) is a unique ten-character alphanumeric identifier issued by the Income Tax Department of India. It is widely used for financial and tax-related purposes.

### `AADHAAR`

Aadhaar is a 12-digit unique identity number issued by the Unique Identification Authority of India (UIDAI). It is used for various government and private sector services and is a crucial identification document in India.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This module is licensed under the MIT License.