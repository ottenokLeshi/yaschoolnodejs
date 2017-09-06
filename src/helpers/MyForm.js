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
    let errorFields = [];
    const data = this.getData();
    const regFio = /^[a-zA-ZА-Яа-яЁё ]+$/ig;
    const regPhone = /^(\+7)[\(](\d{3})[\)](\d{3})-(\d{2})-(\d{2})/;
    const regEmail = /^[A-Za-z0-9]+[-_\w.]+((@yandex.(ru|kz|ua|by|com)$)|(@ya.ru$))/;
    const fio = data.fio.replace(/\s+/g , " ").replace(/^\s*/,"").replace(/\s*$/,"");
    const phoneSum = _.isEmpty(data.phone) ? "" : data.phone
      .replace(/[-()+ ]/g, "")
      .replace(/\s+/g , " ")
      .split("")
      .map(num => parseInt(num)).reduce((sum, current) => sum + current);
    if (fio.split(" ").length !== 3 || !regFio.test(fio)){
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
    return {
      "email": state.email.value || "",
      "fio": state.fio.value || "",
      "phone": state.phone.value || ""
    };
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
    const wrappedFetch = ()=> {
      fetchRespond("progress")
        .then(data => {
          switch(data.status) {
            case "success":
              store.dispatch(containerValueChanger({ success: true }, "Success"));
              break;
            case "error":
              store.dispatch(containerValueChanger({ error: true }, data.reason));
              break;
            case "progress":
              store.dispatch(containerValueChanger({ progress: true }, ""));
              setTimeout(() => wrappedFetch(), data.timeout);
              break;
          }
        });
    };
    const xorArray = _.xor(validation.errorFields, ["fio", "phone", "email"]);
    xorArray.forEach(inputName => store.dispatch(inputClassNameChanger(inputName, true)));
    store.dispatch(containerValueChanger({ progress: true }, ""));
    if (validation.isValid) {
      wrappedFetch();
    } else {
      validation.errorFields.forEach(inputName => store.dispatch(inputClassNameChanger(inputName, false)));
    }
  }
}

export default new MyForm();