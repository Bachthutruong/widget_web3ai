import { useCallback, useRef, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget,darkTheme, lightTheme, Theme } from '@uniswap/widgets'

import '@uniswap/widgets/fonts.css'

import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import DocumentationCards from './DocumentationCards'
import Web3Connectors from './Web3Connectors'
import styles from '../styles/Home.module.css'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const WEB3 = '0x973d1e72f2bd7fbbf139155c69752b32dd333333'
const MY_TOKEN_LIST = [
  {
  "name": "Dai Stablecoin",
  "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "symbol": "DAI",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
},
  {
  "name": "Tether USD",
  "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "symbol": "USDT",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
},
{
  "name": "USD Coin",
  "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "symbol": "USDC",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
},
{
  "name": "Godzilla Coin",
  "address": "0x1068a889fd7151fb2ca9d98d268b0d0cd623fc2f",
  "symbol": "GODZ",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://kenhcine.cgv.vn/media/catalog/product/c/g/cgv_godzilla.jpg"
},
{
  "name": "Web3 AI Coin",
  "address": "0x973d1e72f2bd7fbbf139155c69752b32dd333333",
  "symbol": "WEB3",
  "decimals": 6,
  "chainId": 1,
  "logoURI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_LAiyp-URv7d8XIhuauuQWMk1IN20IyWLg&usqp=CAU"
},
]


export default function App() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])
  const myLightTheme: Theme = {
    ...lightTheme, // Extend the lightTheme
    accent: '#FF007A',
    primary: '#000000',
    secondary: '#565A69',
  }
  
  const myDarkTheme: Theme = {
    ...darkTheme, // Extend the darkTheme
    accent: '#FD5B00',
    primary: '#FFFFFF',
    secondary: '#888D9B',
  }
  let darkMode = true
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.demo}>
          <div className={styles.widget}>
            <SwapWidget
              jsonRpcEndpoint={JSON_RPC_URL}
              width="100%"
              tokenList={MY_TOKEN_LIST}
              locale={locale}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount="0"
              theme={darkMode ? myDarkTheme : myLightTheme} 
              defaultOutputTokenAddress={WEB3}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
