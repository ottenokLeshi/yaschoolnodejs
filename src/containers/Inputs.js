import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { inputChanger } from "../actions/index";
import classNames from "classnames";

/** */
class Inputs extends Component {
  /**
  * @return {JSX}
  */
  render() {
    return (
      <div>
        <label htmlFor = "fio">{ "ФИО" }</label>
        <input
          onChange = { event => this.props.onChange(event.target.name, event.target.value) }
          className = { classNames({ error: !this.props.inputs.fio.isValid }) }
          value = { this.props.inputs.fio.value }
          type = "text"
          name = "fio"
          id = "fio"
        />
        <label htmlFor = "email">{ "E-mail" }</label>
        <input
          onChange = { event => this.props.onChange(event.target.name, event.target.value) }
          className = { classNames({ error: !this.props.inputs.email.isValid }) }
          value = { this.props.inputs.email.value }
          type = "email"
          name = "email"
          id = "email"
        />
        <label htmlFor = "phone">{ "Телефон"} </label>
        <input
          onChange = { event => this.props.onChange(event.target.name, event.target.value) }
          className = { classNames({ error: !this.props.inputs.phone.isValid }) }
          value = { this.props.inputs.phone.value }
          type = "phone"
          name = "phone"
          id = "phone"
        />
      </div>
    );
  }
}


Inputs.propTypes = {
  inputs: PropTypes.object,
  onChange: PropTypes.func
};

const mapStateToProps = state => ({
  inputs: state.inputs
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(inputChanger(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);