import store from "../store/configureStore";
import { inputValuesChanger, containerValueChanger, inputClassNameChanger } from "../actions/index";
import fetchRespond from "./fetchRespond";
import _ from "lodash";

/** Класс MyForm с методами для работы с формой */
class MyForm {

  /**
   * Метод, определяющий валидность значений в форме
   * 
   * @return {object} - методы объекта:
   * isValid {boolean} - результат валидации 
   * errorFields {array} - названия полей, не прошедших валидацию
   */
  validate() {
    const errorFields = [];
    const data = this.getData();
    const regFio = /\s+/g;
    const fio = data.fio.replace(regFio, " ");
    const regPhone = /^(\+7)[\(](\d{3})[\)](\d{3})-(\d{2})-(\d{2})/;
    const phoneSum = data.phone
      .replace(/[-()+]/g, "")
      .split("")
      .map(num => parseInt(num)).reduce((sum, current) => sum + current);
    const regEmail = /^[A-Za-z0-9]+[-_\w.]+((@yandex.(ru|kz|ua|by))|(@ya.ru))/;
    if (fio.split(" ").length !== 3){
      errorFields.push("fio");
    }
    if (!regPhone.test(data.phone) || phoneSum > 30) {
      errorFields.push("phone");
    }
    if (!regEmail.test(data.email)) {
      errorFields.push("email");
    }
    return { isValid: errorFields.length === 0, errorFields: errorFields } ;
  }

  /**
   * Метод, возвращающий текущие значения формы
   * 
   * @return {object} - методы объекта:
   * email {string} - значение в поле 
   * fio {string} - значение в поле 
   * phone {string} - значение в поле 
   */
  getData() {
    const state = store.getState().inputs;
    return Object.assign({}, {
      "email": state.email.value || "",
      "fio": state.fio.value || "",
      "phone": state.phone.value || ""
    });
  }

  /**
   * Метод, устанавливающий новые значения в форму
   * 
   * @param {object} inputsData - объект с данными формы
   */
  setData(inputsData) {
    store.dispatch(inputValuesChanger(inputsData));
  }

  /**
   * Метод, выполняющий валидацию и отправку запроса
   */
  submit() {
    const validation = this.validate();
    const data = this.getData();
    const wrappedFetch = () => {
      fetchRespond("error")
        .then(data => {
          switch(data.status) {
          case "success":
            store.dispatch(containerValueChanger("success", "Success"));
            break;
          case "error":
            store.dispatch(containerValueChanger("error", data.reason));
            break;
          case "progress":
            store.dispatch(containerValueChanger("progress", ""));
            setTimeout(() => wrappedFetch(), data.timeout * 100);
            break;
          }
        });
    };
    const xorArray = _.xor(validation.errorFields, ["fio", "phone", "email"]);
    xorArray.map(inputName => store.dispatch(inputClassNameChanger(inputName, "")));
    store.dispatch(containerValueChanger("progress", ""));
    if (validation.isValid) {
      wrappedFetch();
    } else {
      validation.errorFields.map(inputName => store.dispatch(inputClassNameChanger(inputName, "error")));
    }
  }
}

export default new MyForm();