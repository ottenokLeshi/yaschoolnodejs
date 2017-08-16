import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { inputChanger } from "../actions/index";
import MyFrom  from "../helpers/MyForm";

/** Класс - контейнера формы */
class Form extends Component {
  /**
   * @return {JSX}
   */
  renderForm(){
    return Object.values(this.props.inputs).map(input => (
      <div key={ input.name }>
        <label htmlFor = { input.name }>
          { input.label }
        </label>
        <input
          onChange = { event => this.props.onChange(event.target.name, event.target.value) }
          className = { this.props.inputs[input.name].className }
          value = { this.props.inputs[input.name].value }
          type = { input.type }
          name = { input.name }
          id = { input.name }
        />
      </div>
    ));
  }

  /**
   * @return {JSX}
   */
  render() {
    return (
      <form id="myForm">
        { this.renderForm() }
        <button id="submitButton" type="button" onClick={ () => MyFrom.submit() }>Click me</button>
			  <div id="resultContainer" className={ this.props.containerValue.className }>
          { this.props.containerValue.value }
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  inputs: PropTypes.object,
  onChange: PropTypes.func,
  containerValue: PropTypes.object
};

const mapStateToProps = state => ({
  inputs: state.inputs,
  containerValue: state.containerValue
});

const mapDispatchToProps = dispatch => ({
  onChange: (name, value) => dispatch(inputChanger(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);