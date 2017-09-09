/**
 * Action, вызывающаяся при изменении одного input-a
 * @param {String} name - название input-a
 * @param {String} value -  новое значение
 * 
 * @return {Object}
 */
export const inputChanger = (name, value) => ({
  type: "INPUT_CHANGED_VALUE",
  name: name,
  value: value
});

/**
 * Action, вызывающаяся при установке значений во все input-ы одновременно
 * @param {Object} values - объект со свойствами "fio", "phone", "email" и с соответствующими значениями
 * 
 * @return {Object}
 */
export const inputValuesChanger = values => ({
  type: "INPUT_VALUES_CHANGER",
  value: values
});

/**
 * Action, вызывающийся при изменении валидности input-a
 * @param {String} name - название input-a
 * @param {Object} validationResult - объект характеризующий валидность поля
 * 
 * @return {Object}
 */
export const inputClassNameChanger = (name, validationResult) => ({
  type: "INPUT_CLASSNAME_CHANGER",
  name: name,
  isValid: validationResult.isValid,
  isInvalid: validationResult.isInvalid
});

/**
 * Action, вызывающийся при изменении имени и значения поля контейнера
 * @param {Object} className - название класса, который должен быть у контейнета
 * @param {String} fieldValue - значение поля контейнера
 * 
 * @return {Object}
 */
export const containerValueChanger = (className, fieldValue) => ({
  type: "RESULT_CONTAINER_CHANGER",
  value: fieldValue,
  progress: className.progress || false,
  error: className.error || false,
  success: className.success || false
});

/**
 * Action, вызывающийся при изменении доступности кнопки
 * @param {Boolean} flag - флаг
 * 
 * @return {Object}
 */
export const buttonAccessChanger = flag => ({
  type: "BUTTON_ACCESS_CHANGER",
  disable: flag
});