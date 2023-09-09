<div align='center'>
    <img src='https://raw.githubusercontent.com/vinitshahdeo/pan-aadhaar-ocr/main/media/banner.png' height='50%' width='50%'/><br/>
    <img src='https://img.shields.io/npm/v/pan-aadhaar-ocr?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpan-aadhaar-ocr'/>
    <img src='https://img.shields.io/github/license/vinitshahdeo/pan-aadhaar-ocr?logo=github' />
    <a href='https://twitter.com/Vinit_Shahdeo'>
        <img src='https://img.shields.io/badge/Author-@vinit__shahdeo-blue?logo=twitter' />
    </a>
</div>

<h1 align='center'> PAN and Aadhaar OCR Extractor</h1>

A Node.js package for extracting PAN and Aadhaar card numbers from scanned images using Optical Character Recognition (OCR).

- **Validate PAN and Aadhaar cards with ease**.
- **Extract card details quickly from scanned images**.
- **Lightweight & performant package available on NPM**.

## Installation
You can install this package using **npm**:

```bash
npm install pan-aadhaar-ocr
```
Or, if you prefer using **yarn**:

```bash
yarn add pan-aadhaar-ocr
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

PAN ([Permanent Account Number](https://en.wikipedia.org/wiki/Permanent_account_number)) is a unique ten-character alphanumeric identifier issued by the [Income Tax Department](https://incometaxindia.gov.in/) of India. It is widely used for financial and tax-related purposes.

### `AADHAAR`

[Aadhaar](https://en.wikipedia.org/wiki/Permanent_account_number) is a 12-digit unique identity number issued by the Unique Identification Authority of India ([UIDAI](https://uidai.gov.in/)). It is used for various government and private sector services and is a crucial identification document in India.

## PAN & Aadhaar Validation

For KYC processes, use the following API to validate PAN and AADHAAR:

- [PAN Verification](https://developer.sandbox.co.in/reference/pan-verification-basic-api)
- [Aadhaar Verification](https://developer.sandbox.co.in/reference/aadhaar-okyc-generate-otp-api)

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This module is authored by [Vinit Shahdeo](https://peerlist.io/vinitshahdeo) and licensed under the [MIT License](./LICENSE).

<br />
  <table align="center">
      <tr>
          <td>
            <strong>Made with ❤️ by <a href='https://twitter.com/Vinit_Shahdeo'>@vinitshahdeo</a> for India 🇮🇳</strong>
          </td>
      </tr>
  </table>
