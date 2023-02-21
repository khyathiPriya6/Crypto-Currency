import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyList from '../CryptocurrenciesList/index'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    // eslint-disable-next-line prettier/prettier
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(formattedData)
    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="cryptocurrency-tracker-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrencyList currencyList={currencyList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
