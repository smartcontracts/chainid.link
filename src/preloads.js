const preloads = {
  optimism: {
    chainId: '0xA',
    chainName: 'Optimistic Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://mainnet.optimism.io'
    ],
    blockExplorerUrls: [
      'https://optimistic.etherscan.io'
    ]
  },
  'optimism-kovan': {
    chainId: '0x45',
    chainName: 'Optimistic Ethereum (Kovan)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://kovan.optimism.io'
    ],
    blockExplorerUrls: [
      'https://kovan-optimistic.etherscan.io'
    ]
  },
  cheapeth: {
    chainId: '0x309',
    chainName: 'cheapETH',
    nativeCurrency: {
      name: 'cheapETH',
      symbol: 'cTH',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.cheapeth.org/rpc'
    ],
    blockExplorerUrls: [
      'https://explore.cheapswap.io/'
    ]
  },
}

export default preloads
