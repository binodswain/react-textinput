import React, { Component } from 'react';

import TextInput from 'react-textinput-field';

const email = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"

let emailvalidations = [
  {
    rule: "-",
    message: "the field should not be empty"
  },
  {
    rule: "^.{5,}$",
    message: "Length sould be more than 5"
  },
  {
    rule: email,
    message: "invalid email"
  }
]

let namevalidations = [
  {
    rule: "-",
    message: "the field should not be empty"
  },
  {
    rule: "^.{6,}$",
    message: "Length sould be more than 6"
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
    return (
      <div>
        <TextInput
          attr={{
            "name": "email",
            "type": "text",
            "value": this.state["email"] || "",
            "autoComplete": "off",
            "required": true
          }}
          updateInputValue={this.updateInputValue}
          label={"Email"}
          message={emailvalidations}
        />

        <TextInput
          attr={{
            "name": "name",
            "type": "text",
            "value": this.state["name"] || "",
            "autoComplete": "off",
            "required": true
          }}
          updateInputValue={this.updateInputValue}
          label={"Name"}
          message={namevalidations}
        />
      </div>
    )
  }
}
