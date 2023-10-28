// Note that chainId has to be specified in hex, it's interpreted as hex even if not preceeded by a 0x.

const preloads = {
  optimism: {
    chainId: '0xA',
    chainName: 'Optimism',
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
    chainId: '0x45',   // 69
    chainName: 'Optimism Kovan (testnet)',
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
  'optimism-goerli': {
    chainId: '0x1a4',   // 420
    chainName: 'Optimism Goerli (testnet)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://goerli.optimism.io'
    ],
    blockExplorerUrls: [
      'https://goerli-optimism.etherscan.io/'
    ]
  },  
  'goerli': {
    chainId: '5',
    chainName: 'Goerli (testnet)',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.goerli.mudit.blog/'
    ],
    blockExplorerUrls: [
      'https://goerli.etherscan.io/'
    ]
  },   
  cheapeth: {
    chainId: '0x309',   // 777
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
  polygon: {
    chainId: '0x89',    // 137
    chainName: 'Matic Network',
      nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc-mainnet.matic.network'
    ],
    blockExplorerUrls: [
      'https://polygonscan.com'
    ],
  },
  xdai: {
    chainId: '0x64',    // 100
    chainName: 'xDai',
      nativeCurrency: {
      name: 'xDai Token',
      symbol: 'xDai',
      decimals: 18,
    },
    rpcUrls: [
      'https://rpc.xdaichain.com'
    ],
    blockExplorerUrls: [
      'https://blockscout.com/xdai/mainnet'
    ],
  },
  'opstack-getting-started': {
    chainId: '0xA455', // 42069
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      'http://localhost:8545'
    ],
    blockExplorerUrls: [],
  },
}

export default preloads
