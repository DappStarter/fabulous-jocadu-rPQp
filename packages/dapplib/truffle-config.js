require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember evil gloom arctic bubble gather'; 
let testAccounts = [
"0xe39c0e0da4aaa9f4ed8be81c369f73fc8fe177b2aec263af7318784eece66d73",
"0x60001392a51db6b7ee6a3f19f79c9a87797bd9093cf9e8e794ef64249679402c",
"0xe32adec12b3138e73395f8730cd2d2510f45bcd113d3fce4e5f525cf21c977a8",
"0x1020057a5e1cf529a51c5b16a03101e852a5c068561ea8ee5545574e5a04540c",
"0x22a7340a38bfbd715e360af0e8ff72103e9ebe8b3c2b826c5bf44432c32f16c5",
"0xe3ad23f294c090b6c330c6d31be211976e6e2476da7c392d85e0cc0ad328a267",
"0x71a44017c5cf4a4f7df8c4711a7dd04cf1715add3af675936acabf6096fd6286",
"0x97362099b30e14557d765682c63b7543f1852e6e4899a08164398c4989cfadaf",
"0x0f7c939257e600435bd47a53dbc9c12cf0724c8dae8243e3b95576ff5bc76302",
"0xca341f9c2d9b5dd1b0c505a5e59328a32b2d73f35718694ab04939994b878adb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


