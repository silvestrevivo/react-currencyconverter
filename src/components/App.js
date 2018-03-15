import React, { Component } from 'react'
import image from '../../assets/img/cash-calculator.svg'
import data from './data/Data'
import SelectCurrency from './select'
import Input from './input'

class App extends Component {
  state = {
    data: data,
    name: data[1]['name'],
    rate: data[1].sellRate,
    code: data[1].code,
    sign: data[1].sign,
    inputA: 0,
    inputB: 0
  }

  handleChange = (target) => {
    const { value, dataset: { code, sell, sign } } = target.options[target.selectedIndex]
    this.setState({
      name: value,
      code: code,
      rate: sell,
      sign: sign
    })
  }

  inputHandler = (target) => {
    const { value } = target
    if (target.className.includes('inputA')) {
      this.setState({
        inputA: value,
        inputB: value * this.state.rate
      })
    } else {
      this.setState({
        inputB: value,
        inputA: value / this.state.rate
      })
    }
  }

  render () {
    const { data, name, rate, code, sign } = this.state
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Currency Converter</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <p>
                <SelectCurrency dataselect={data} change={(event) => this.handleChange(event.target)} />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className="currency-flag AUD">Australian Dollars</h3>

              <div className="input-group">
                <span className="input-group-addon">$</span>
                <Input
                  type="number"
                  classname="form-control inputA"
                  aria-describedby="basic-addon2"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputA}
                  onChange={event => this.inputHandler(event.target)} />
                <span className="input-group-addon" id="basic-addon2">AUD</span>
              </div>
            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${code}`}>{name}</h3>
              <div className="input-group">
                <span className="input-group-addon">{sign}</span>
                <Input
                  type="number"
                  classname="form-control"
                  describe="basic-addon3"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputB}
                  onChange={event => this.inputHandler(event.target)} />
                <span className="input-group-addon" id="basic-addon3">{code}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                Exchange Rate $ 1 AUD = {sign} {rate} {code}
              </p>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default App
