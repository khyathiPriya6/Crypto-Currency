import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  return (
    <li className="list-container">
      <div className="currency-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-type">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
