# react-textinput

> React package to render input field with floating label.

[![NPM](https://img.shields.io/npm/v/react-textinput.svg)](https://www.npmjs.com/package/react-textinput) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-textinput
```

## Usage

```jsx
import React, { Component } from 'react'

import TextInput from 'react-textinput'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  updateInputValue = (id, e) => {
    var state = { ...this.state };
    state[id] = e;
    this.setState({
      ...state
    })
  }

  render() {
    const label = 'brand',
      message = "";
    
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
          message={message}
        />
      </div>
    )
  }
}

```

### TODO
- [x] Add accesibility tags
- [x] Support regex in validation message
- [x] Display error message on Blur
- [ ] Update example with grid and mow view
- [ ] Update documenation of the component
- [ ] Add textarea element
- [ ] Add Rule utils with predefined Regex and min/max length function
  - [ ] Email
  - [ ] IsAlphaNumeric
  - [ ] minLength()
  - [ ] maxLength()
  - [ ] Number
  - [ ] Url

## License

MIT © [binodswain](https://github.com/binodswain)
