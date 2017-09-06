import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MyFrom  from "../helpers/MyForm";
import Inputs from "./Inputs";

/** Класс - контейнера формы */
class Form extends Component {

  /**
   * @return {JSX}
   */
  render() {
    return (
      <div className="myFormWrapper">
        <form id="myForm">
          <Inputs { ...this.props}/>
          <button id="submitButton" type="button" onClick={ () => MyFrom.submit() }>Click me</button>
        </form>
        <div id="resultContainer" className={ this.props.containerValue.className }>
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