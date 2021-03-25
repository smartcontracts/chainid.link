const preloads = {
  optimism: {
    chainId: '0xA',
    chainName: 'Optimistic Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: '18',
    },
    rpcUrls: [
      'https://mainnet.optimism.io'
    ],
    blockExplorerUrls: [
      'https://mainnet-l2-explorer.surge.sh/'
    ]
  },
}

export default preloads
