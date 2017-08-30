/**
 * Action, отвечающий за изменение одного input-a
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
 * Action, отвечающий за установку значений во все input-ы одновременно
 * @param {Object} values - объект со свойствами "fio", "phone", "email" и с соответствующими значениями
 * 
 * @return {Object}
 */
export const inputValuesChanger = values => ({
  type: "INPUT_VALUES_CHANGER",
  value: values
});

/**
 * Action, отвечающий за установку имени класса в input-a
 * @param {*} name - название input-a
 * @param {*} className - название класса, который должен быть у input-a
 * 
 * @return {Object}
 */
export const inputClassNameChanger = (name, className) => ({
  type: "INPUT_CLASSNAME_CHANGER",
  name: name,
  className: className
});

/**
 * Action, устанавливающий контейнеру имя класса и значение поля
 * @param {*} className - название класса, который должен быть у контейнета
 * @param {*} fieldValue - значение поля контейнера
 * 
 * @return {Object}
 */
export const containerValueChanger = (className, fieldValue) => ({
  type: "RESULT_CONTAINER_CHANGER",
  className: className,
  value: fieldValue
});