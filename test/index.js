import MyForm from "../src/helpers/MyForm";
import _ from "lodash";
import assert from "assert";

describe("Установка значений и проверка валидации", () => {
  describe("#validate()", () => {
    describe("Проверка корректных значений ФИО", () => {
      const fioAcceptedArray = ["Иванов Иван Иванович", " Иванов     Иван     Иванович "];
      const makeTest = fio => {
        it(`The"${ fio }" is valid`, () => {
          MyForm.setData({
            fio: `${ fio }`,
            email: "kuligon@ya.ru",
            phone: "+7(111)222-33-11"
          });
          assert(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] }));
        });
      };
      fioAcceptedArray.forEach(fioItem => makeTest(fioItem));
    });
    describe("Проверка некорректных значений ФИО", () => {
      const fioNotAcceptedArray = ["Иван Иванов", "Ivan Ivanov 215", "Иван Иванов Иванович Ивановский"];
      const makeTest = fio => {
        it(`The"${ fio }" is not valid`, () => {
          MyForm.setData({
            fio: `${ fio }`,
            email: "kuligon@ya.ru",
            phone: "+7(111)222-33-11"
          });
          assert(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["fio"] }));
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
          assert(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] }));
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
          assert(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["email"] }));
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
          assert(_.isEqual(MyForm.validate(), { isValid: true, errorFields: [] }));
        });
      };
      phoneAcceptedArray.forEach(phoneItem => makeTest(phoneItem));
    });
    describe("Проверка некорректных значений телефона", () => {
      const phoneNotAcceptedArray = ["+7(111)555-50-01", "8(111)000-00-00", "+7(222)444-55-66", "+7(999)999-99-99"];
      const makeTest = phone => {
        it(`The"${ phone }" is not valid`, () => {
          MyForm.setData({
            fio: "Иванов Иван Иванович",
            email: "kuligon@ya.ru",
            phone: `${phone}`
          });
          assert(_.isEqual(MyForm.validate(), { isValid: false, errorFields: ["phone"] }));
        });
      };
      phoneNotAcceptedArray.forEach(phoneItem => makeTest(phoneItem));
    });
  });
});
