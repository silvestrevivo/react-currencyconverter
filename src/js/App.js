import React from 'react';
import image from '../images/cash-calculator.svg';
import data from './data/Data';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data.currencies,
      name: 'United States',
      rate: 0.7041,
      code: 'USD',
      sign: '$',
      inputA: 0,
      inputB: 0
    }
  }

  handleChange(event) {
    let target = event.target;
    this.setState({
      name: target.options[target.selectedIndex].value,
      code: target.options[target.selectedIndex].dataset.code,
      rate: target.options[target.selectedIndex].dataset.sell,
      sign: target.options[target.selectedIndex].dataset.sign
    });
  }

  inputA(event) {
    //console.log(event.target.value);
    this.setState({
      inputA: event.target.value,
      inputB: event.target.value * this.state.rate
    });

  }

  inputB(event) {
    //console.log(event.target.value);
    this.setState({
      inputB: event.target.value,
      inputA: event.target.value / this.state.rate
    });
  }

  render() {
    console.log(this.state);
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

    console.log('inputA', inputA);
    console.log('inputB', inputB);

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
                <select onChange={(event) => this.handleChange(event)}>
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
              {
                //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control"
                  aria-describedby="basic-addon2"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputA}
                  onChange={(event) => this.inputA(event)} />
                <span className="input-group-addon" id="basic-addon2">AUD</span>
              </div>

            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className={`currency-flag ${code}`}>{name}</h3>
              {
                //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">{sign}</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control"
                  aria-describedby="basic-addon3"
                  step="1"
                  pattern="\d\.\d{2}"
                  value={this.state.inputB}
                  onChange={(event) => this.inputB(event)} />
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
