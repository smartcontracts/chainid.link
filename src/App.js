import React from 'react'
import './App.css';
import preloads from './preloads'

const getQueryParam = (name) => {
  const url = new URL(window.location.href)
  const param = url.searchParams.get(name)
  if (param === null) {
    throw new Error(`Query parameter not found: ${name}`)
  }
  return param
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      networkConfig: null,
      connected: false
    }

    this.connect = this.connect.bind(this)
  }

  async connect() {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          this.state.networkConfig
        ]
      })
    } catch (error) {
      this.setState({
        error: error
      })
    }

    if (window.ethereum.chainId === this.state.networkConfig.chainId) {
      this.setState({
        connected: true
      })
    }
  }

  componentDidMount() {
    if (!window.ethereum) {
      this.setState({
        error: new Error('No Ethereum provider found.')
      })
      return
    }

    try {
      const network = getQueryParam('network')
      const networkConfig = preloads[network]

      if (!networkConfig) {
        this.setState({
          error: new Error(`Network does not exist: ${network}`)
        })
        return
      }

      this.setState({
        networkConfig: preloads[network]
      })
      return
    } catch {}

    try {

      const networkConfig = {
        chainId: '0x' + parseInt(getQueryParam('chainId'), 10).toString(16),
        chainName: getQueryParam('chainName'),
        nativeCurrency: {
          name: getQueryParam('currencyName'),
          symbol: getQueryParam('currencySymbol'),
          decimals: parseInt(getQueryParam('currencyDecimals'), 10)
        },
        rpcUrls: [
          getQueryParam('rpcUrl')
        ],
        blockExplorerUrls: [
          getQueryParam('blockExplorerUrl')
        ]
      }

      this.setState({
        networkConfig: networkConfig
      })
    } catch (error) {
      this.setState({
        error: error
      })
    }
  }

  render() {
    return (
      <div id="content" className="centered">
        <div className="pretty blue">
            <div className="pretty white shadow">chainid.link</div>
            {this.state.networkConfig && !this.state.error &&
              <div>
                <div>
                    <div className="pretty grey inline-block margin-right">Network:</div>
                    <div className="pretty white inline-block margin-right shadow">{this.state.networkConfig.chainName}</div>
                </div>
                <div>
                    <div className="pretty grey inline-block margin-right">Chain ID:</div>
                    <div className="pretty white inline-block margin-right shadow">{parseInt(this.state.networkConfig.chainId, 16)}</div>
                </div>
                <div>
                    <div className="pretty grey inline-block margin-right">Currency:</div>
                    <div className="pretty white inline-block margin-right shadow">{this.state.networkConfig.nativeCurrency.name} ({this.state.networkConfig.nativeCurrency.symbol})</div>
                </div>
                <div>
                    <div className="pretty grey inline-block margin-right">Node:</div>
                    <div className="pretty white inline-block margin-right shadow">{this.state.networkConfig.rpcUrls[0]}</div>
                </div>
                <div>
                    <div className="pretty grey inline-block margin-right">Explorer:</div>
                    <div className="pretty white inline-block margin-right shadow">{this.state.networkConfig.blockExplorerUrls[0]}</div>
                </div>
              </div>
            }
            {this.state.error &&
              <div className="pretty pink">
                <div className="pretty white shadow inline-block">ERROR.</div>
                <div className="pretty white shadow">{this.state.error.message}</div>
              </div>
            }
            {!this.state.error &&
              <div className="pretty green shadow pointer" onClick={this.connect}>
                {this.state.connected
                  ? 'connected!'
                  : 'connect'
                }
              </div>
            }
        </div>
      </div>
    )
  }
}

export default App;
