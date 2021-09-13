require("dotenv").config();
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;
const axios = require("axios");

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️

  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key, //'your pinata api key'
        pinata_secret_api_key: secret, //'your pinata secret api key'
      },
    })
    .then(function (response) {
      //handle your response here
      return {
        success: true,
        pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      //handle error here
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
