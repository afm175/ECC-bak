import React from 'react';
import InputBox from '../component/InputBase';
import "./BaseConverter.css"

const validators = [
  /^[0-1\b]*$/,
  /^[0-7\b]*$/,
  /^[0-9\b]*$/,
  /^[0-9a-fA-F\b]*$/,
];

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decimalEquivalent: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(decimalEquivalent) {
    this.setState({ decimalEquivalent });
  }

  render() {
    const inputBoxes = [];
    let base = [2, 8, 10, 16];
    let name = ["BIN", "OCT", "DEC", "HEX"]
    for (let i = 0; i < 4; i++) {
      const { decimalEquivalent } = this.state;
      const value = decimalEquivalent ? decimalEquivalent.toString(base[i]) : '';
      inputBoxes.push(
        <InputBox
          name={name[i]}
          base={base[i]}
          onChange={this.handleChange}
          key={base[i]}
          value={value}
          validator={validators[i]}
        />
      );
    }
    return (
      <div className="box">
        <h2>Base Number Converter</h2>
        <div>
          {inputBoxes}
        </div>
      </div>
    )
  }
}

export default BaseConvertor;
