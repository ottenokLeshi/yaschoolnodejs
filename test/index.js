
import React from "react";
import _ from "lodash";
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";

import { Provider } from "react-redux";
import Form from "../src/containers/Form";
import store from "../src/store/configureStore";
import MyForm from "../src/helpers/MyForm";
import { containerValueChanger } from "../src/actions/index";


describe("Тестирование компонента <Form />", () => {
  describe("Установка значений и проверка валидации", () => {
    describe("Проверка корректных значений ФИО", () => {
      const fioAcceptedArray = ["Иванов Иван Иванович", " Иванов     Иван     Иванович ", "George Iscander Zulcarnain"];
      const makeTest = fio => {
        it(`The"${ fio }" is valid`, () => {
          MyForm.setData({
            fio: `${ fio }`,
            email: "kuligon@ya.ru",
            phone: "+7(111)222-33-11"
          });
          expect(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] })).to.be.true;
        });
      };
      fioAcceptedArray.forEach(fioItem => makeTest(fioItem));
    });

    describe("Проверка некорректных значений ФИО", () => {
      const fioNotAcceptedArray = ["Иван Иванов", "Ivan Ivanov 215", "Иван Иванов Иванович Ивановский", "123 123 123"];
      const makeTest = fio => {
        it(`The"${ fio }" is not valid`, () => {
          MyForm.setData({
            fio: `${ fio }`,
            email: "kuligon@ya.ru",
            phone: "+7(111)222-33-11"
          });
          expect(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["fio"] })).to.be.true;
        });
      };
      fioNotAcceptedArray.forEach(fioItem => makeTest(fioItem));
    });

    describe("Проверка корректных значений почты", () => {
      const emailAcceptedArray = ["ya.ru", "yandex.ru", "yandex.ua", "yandex.by", "yandex.kz", "yandex.com"];
      const makeTest = email => {
        it(`The"${ email }" is valid`, () => {
          MyForm.setData({
            fio: "Иванов Иван Иванович",
            email: `kuligon@${ email }`,
            phone: "+7(111)222-33-11"
          });
          expect(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] })).to.be.true;
        });
      };
      emailAcceptedArray.forEach(emailItem => makeTest(emailItem));
    });

    describe("Проверка некорректных значений почты", () => {
      const emailNotAcceptedArray = ["ya.kz", "ya.ua", "mail.ru", "yandex.com.ru", "ya.ru.com", ""];
      const makeTest = email => {
        const errorFieldsArray = [];
        it(`The "${ email }" is not valid`, () => {
          MyForm.setData({
            fio: "Иванов Иван Иванович",
            email: `kuligon@${ email }`,
            phone: "+7(111)222-33-11"
          });
          expect(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["email"] })).to.be.true;
        });
      };
      emailNotAcceptedArray.forEach(emailItem => makeTest(emailItem));
    });

    describe("Проверка корректных значений телефона", () => {
      const phoneAcceptedArray = ["+7(111)222-33-11", "+7(111)555-50-00", "+7(111)000-00-00"];
      const makeTest = phone => {
        it(`The"${ phone }" is valid`, () => {
          MyForm.setData({
            fio: "Иванов Иван Иванович",
            email: "kuligon@ya.ru",
            phone: `${phone}`
          });
          expect(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] })).to.be.true;
        });
      };
      phoneAcceptedArray.forEach(phoneItem => makeTest(phoneItem));
    });

    describe("Проверка некорректных значений телефона", () => {
      const phoneNotAcceptedArray = ["+7 (111) 000-00-00", "+7(111)555-50-01", "8(111)000-00-00",
        "+72224445566", "+7(999)999-99-99"];
      const makeTest = phone => {
        it(`The"${ phone }" is not valid`, () => {
          MyForm.setData({
            fio: "Иванов Иван Иванович",
            email: "kuligon@ya.ru",
            phone: `${phone}`
          });
          expect(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["phone"] })).to.be.true;
        });
      };
      phoneNotAcceptedArray.forEach(phoneItem => makeTest(phoneItem));
    });
  });

  describe("Тестирование <From />", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    window.MyForm = MyForm;

    describe("Тестирование input-ов", () => {
      const inputs = wrapper.find("input");
      it("На странице задана форма с тремя инпутами c соответствующими props", () => {
        expect(inputs).to.have.length(3);

        const firstInput = inputs.at(0);
        expect(firstInput.props().name).to.equal("fio");

        const secondInput = inputs.at(1);
        expect(secondInput.props().name).to.equal("email");

        const thirdInput = inputs.at(2);
        expect(thirdInput.props().name).to.equal("phone");
      });

      describe("Проверка методов MyForm", () => {
        it("Значения инпутов изменены с соответствующими значениями", () => {
          MyForm.setData({email: "tut@ya.ru", fio: "Иванов Иван Иванович", phone: "+7(111)111-11-11"});
          expect(inputs.at(0).props().value).to.equal("Иванов Иван Иванович");
          expect(inputs.at(1).props().value).to.equal("tut@ya.ru");
          expect(inputs.at(2).props().value).to.equal("+7(111)111-11-11");
        });
      });
    });

    describe("Тестирование кнопки отправки формы", () => {
      const button = wrapper.find("#submitButton");

      it("На странице задана форма с кнопкой отправки формы", () => {
        expect(button.exists()).to.equal(true);
      });

      it("При нажатии на кнопку происходит вызов MyForm.submit и MyForm.submit", () => {
        sinon.spy(MyForm, "validate");
        sinon.spy(MyForm, "submit");
        button.simulate("click");

        expect(MyForm.validate.calledOnce).to.equal(true);
        expect(MyForm.submit.calledOnce).to.equal(true);
        MyForm.validate.restore();
        MyForm.submit.restore();
      });
    });

    describe("Тестирование div-контейнера", () => {
      const container = wrapper.find("#resultContainer");
      
      it("На странице задан div-контейнер", () => {
        expect(wrapper.find("#resultContainer").exists()).to.equal(true);
      });
      
      it("Верная реакция на успешный статус ответа", () => {
        store.dispatch(containerValueChanger({ success: true }, "Success"));
        expect(container.text()).to.equal("Success");
        expect(container.hasClass("success")).to.equal(true);
      });

      it("Верная реакция на ошибочный статус ответа", () => {
        store.dispatch(containerValueChanger({ error: true }, "myError"));
        expect(container.text()).to.equal("myError");
        expect(container.hasClass("error")).to.equal(true);
      });
    });
  });
});