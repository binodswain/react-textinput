import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default class ExampleComponent extends Component {
    static propTypes = {
        name: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            hold: false,
            _valid: true,
            _focused: false,
            message: ""
        }
    }

    disableField = (e) => {
        const { value } = this.props.attr;

        if (value) {
            this.setState({
                hold: true,
                _valid: true,
                message: ""
            })
        } else {
            this.setState({
                hold: false,
                _valid: true,
                message: ""
            })
        }

        this.validateField(value);
    }

  /**
   * function to validate the input value based on Regex and
   * set the message and valid property accordingly
   * @param {String} value
   */
    validateField = (value) => {
        const { message = [] } = this.props;
        let re;
        for (let index = 0; index < message.length; index++) {
            const rule = message[index];

            if (rule.rule === "-" || rule.rule === "EMPTY") {
                if (value==="") {
                this.setState({
                    message: rule.message,
                    _valid: false
                });
                break;
                }
                continue;
            }

            re = new RegExp(rule.rule);
            if (!re.test(value)) {
                this.setState({
                message: rule.message,
                _valid: false
                })
                break;
            }
        }
    }

    activateField = () => {
        this.setState({
            hold: false
        })
    }

    updateInputValue = (e) => {
        const { name } = this.props.attr;
        this.props.updateInputValue ?
            this.props.updateInputValue(name, e.target.value)
            : ''
    }

    render() {
        const {
            name,
            type,
            classes,
            formName = "formfield",
            required
        } = this.props.attr;

        const { hold, message, _valid } = this.state;
        const { ishold } = this.props;

        let className = [
            "inputbox",
            classes ? classes : undefined
        ].join(' ');

        let fieldId = [formName, name].join('.');

        let attributes = {
            id: fieldId,
            "aria-labelledby": fieldId + "-label",
            "aria-describedby": !_valid ? fieldId + "-errormessage" : undefined,
            "aria-invalid": !_valid,
            "aria-required": required,
            ...this.props.attr
        }

        delete attributes.label;

        const labelClassName = [
            "field-label",
            (hold || ishold) ? "placeholder hold" : "placeholder",
            _valid ? "" : "error"
        ].join(' ');

        return (
            <div className="form-element">
                <input
                    { ...attributes }
                    className={className}
                    onBlur={this.disableField}
                    onChange={this.updateInputValue}
                />

                <span id={fieldId+ "-label"}
                    className={labelClassName}
                    aria-hidden={true}>
                    {this.props.label}
                </span>

                {message ?
                    <div
                        className="error-message"
                        id={fieldId + "-errormessage"}
                    >
                        <span>{message}</span>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
