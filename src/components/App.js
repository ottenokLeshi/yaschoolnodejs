import React, { Component } from "react";
import Form from "../containers/Form";

/** Основной класс приложения */
export default class App extends Component {
  /**
   * @return {JSX} - разметка приложения
   */
  render() {
    return (
      <div className = "App">
        <Form />
      </div>
    );
  }
}
