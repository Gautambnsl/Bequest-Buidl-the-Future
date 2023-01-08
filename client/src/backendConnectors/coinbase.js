import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

const APP_NAME = 'Bequest Protocol'

const APP_LOGO_URL = 'https://bafybeiacmqecanicz7n4lbw354s3co2rld3xag2jdaspi3xy633kxyrjca.ipfs.gateway.valist.io/static/media/logo.81d82ce4b524c52371b3.png'
 

// Initialize Coinbase Wallet SDK

export const coinbaseWallet = new CoinbaseWalletSDK({

  appName: APP_NAME,

  appLogoUrl: APP_LOGO_URL,

  darkMode: false

})

