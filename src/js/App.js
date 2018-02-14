import React from 'react';
import image from '../images/cash-calculator.svg';
import data from './data/Data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.currencies,
      name: data.currencies[1]['name'],
      rate: data.currencies[1].sellRate,
      code: data.currencies[1].code,
      sign: data.currencies[1].sign,
      inputA: 0,
      inputB: 0
    }
  }

  handleChange(target) {
    this.setState({
      name: target.options[target.selectedIndex].value,
      code: target.options[target.selectedIndex].dataset.code,
      rate: target.options[target.selectedIndex].dataset.sell,
      sign: target.options[target.selectedIndex].dataset.sign
    });
  }

  inputHandler(target) {
    if (target.className.includes('inputA')) {
      this.setState({
        inputA: target.value,
        inputB: target.value * this.state.rate
      });
    } else {
      this.setState({
        inputB: target.value,
        inputA: target.value / this.state.rate
      });
    }
  }

  render() {
    const select = this.state.data.map(item => {
      return (
        <option
          key={item.name}
          data-code={item.code}
          data-sign={item.sign}
          data-sell={item.sellRate}
          value={item.name}>{item.name}</option>
      );
    }).slice(1);

    const { data, name, rate, code, sign, inputA, inputB } = this.state;

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
                <select onChange={(event) => this.handleChange(event.target)}>
                  {
                    select
                  }
                </select>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className="currency-flag AUD">Australian Dollars</h3>

              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input
                  type="number"
                  className="form-control inputA"
                  aria-describedby="basic-addon2"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputA}
                  onChange={(event) => this.inputHandler(event.target)} />
                <span className="input-group-addon" id="basic-addon2">AUD</span>
              </div>

            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${code}`}>{name}</h3>

              <div className="input-group">
                <span className="input-group-addon">{sign}</span>
                <input
                  type="number"
                  className="form-control"
                  aria-describedby="basic-addon3"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputB}
                  onChange={(event) => this.inputHandler(event.target)} />
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

export default App;
