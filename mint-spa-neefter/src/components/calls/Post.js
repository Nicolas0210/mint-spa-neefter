const fetch = require('node-fetch');

const url = 'https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-client-secret': 'sk_test.hyrN4Mrq.Iw74ALDO1EO9Lr3jpiBYgWDWS5HGiIEB',
    'x-project-id': '5c40b2e5-e70b-492e-be05-fd98846c4f8e'
  },
  body: JSON.stringify({
    recipient: 'email:nico.bringas0210@gmail.com:polygon',
    metadata: {
      name: 'My first Mint API NFT',
      image: 'https://www.crossmint.com/assets/crossmint/logo.png',
      description: 'My NFT created via the mint API!',
      attributes: [{trait_type: 'test', value: 'true'}]
    }
  })
};

export const postNft = () => {
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}
