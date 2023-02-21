// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem/index'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props

    return (
      <div className="app-container">
        <h1 className="app-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="currency-tracker-img"
        />
        <div className="currency-list-container">
          <div className="header-container">
            <div className="coin-type-heading">
              <h1 className="coin-type-text">Coin Type</h1>
            </div>
            <div className="currency-type-heading">
              <h1 className="usd-text">USD</h1>
              <h1 className="euro-text">EURO</h1>
            </div>
          </div>
          {currencyList.map(eachItem => (
            <CryptocurrencyItem details={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
