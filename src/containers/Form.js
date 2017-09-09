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
        <form id="myForm" action="https://raw.githubusercontent.com/ottenokLeshi/yaschoolnodejs/develop/serverResponds/error.json">
          <Inputs { ...this.props}/>
          <button id="submitButton" type="button" onClick={ () => MyFrom.submit() }>Click me</button>
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
  containerValue: PropTypes.object
};

const mapStateToProps = state => ({
  containerValue: state.containerValue
});

export default connect(mapStateToProps)(Form);