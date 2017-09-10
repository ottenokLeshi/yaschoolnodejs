import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MyFrom  from "../helpers/MyForm";
import Inputs from "./Inputs";
import classNames from "classnames";

/** Класс - контейнера формы */
class Form extends Component {

  /**
   * @return {JSX}
   */
  render() {
    return (
      <div className="myFormWrapper">
        <form id="myForm" action="https://raw.githubusercontent.com/ottenokLeshi/yaschoolnodejs/develop/serverResponds/success.json">
          <Inputs { ...this.props }/>
          <button
            id="submitButton"
            type="button"
            onClick={ () => MyFrom.submit() }
            disabled={ this.props.buttonStatus.disabled }
          >
            Click me
          </button>
        </form>
        <div
          id="resultContainer"
          className={ classNames({
            success: this.props.containerValue.success,
            error: this.props.containerValue.error,
            progress: this.props.containerValue.progress })
          }
        >
          { this.props.containerValue.value }
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  containerValue: PropTypes.object,
  buttonStatus: PropTypes.object
};

const mapStateToProps = state => ({
  containerValue: state.containerValue,
  buttonStatus: state.buttonStatus
});

export default connect(mapStateToProps)(Form);