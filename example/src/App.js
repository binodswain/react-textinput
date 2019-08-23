import React, { Component } from 'react';

import TextInput from 'react-textinput';

const email = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"

let validations = [
  {
    rule: "-",
    message: "the field should not be empty"
  },
  {
    rule: "^.{6,}$",
    message: "Length sould be more than 6"
  },
  {
    rule: email,
    message: "invalid email"
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  updateInputValue = (id, value) => {
    this.setState({
      [id]: value
    })
  }

  render() {
    const label = 'brand';
    
    return (
      <div>
        <TextInput
          attr={{
            "name": "brand",
            "type": "text",
            "value": this.state[label] || "",
            "autoComplete": "off",
            "required": true
          }}
          updateInputValue={this.updateInputValue}
          label={label}
          message={validations}
        />
      </div>
    )
  }
}
