require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind around hockey arctic blue sniff'; 
let testAccounts = [
"0xc738d66e591fc71caa0159ca073405e43ed38f83f9b352b8071f8792ee2935de",
"0xde70aac8b09eb45c30024b115b4c91edbcf48bd0457a36f8b904d2507bb13d43",
"0x1a72381722966fa3390e55efe2c2da5b896205918c9c8c1e6d80bcb988ef777a",
"0xce076ed609cda8f42d027f4dd588a8622df4837dee41b387d4e7b9627060fda3",
"0x3b491dda6f5b78067fbea86fc91f3259e78468acad6a4d2d6f05b84badcb8b91",
"0x85ee0c9975dacaf94c4d101d6b8d73d293df6132171946f80488cda2dcc3bb2e",
"0xf478252b38995edc4613724d0b5dad57ad1f164c677b5c2800991803542b664d",
"0x226bd96be7cbe7347c1f5852b9dedd1b5d744967ddccfcaad27576ac9d8c0f1c",
"0x2e02b3494b576654e799fb02851f52da37a2625de3b6ce68c7820634d2df9e86",
"0x4af9c9dd71a2b3e0ecf4cf3b4f959a9d241920edc2cb0d2ba11d0dc59ec0d352"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

