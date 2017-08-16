export const inputChanger = (name, value) => ({
  type: "INPUT_CHANGED_VALUE",
  name: name,
  value: value
});

export const inputValuesChanger = values => ({
  type: "INPUT_VALUES_CHANGER",
  value: values
});

export const inputClassNameChanger = (name, className) => ({
  type: "INPUT_CLASSNAME_CHANGER",
  name: name,
  className: className
});

export const containerValueChanger = (className, fieldValue) => ({
  type: "RESULT_CONTAINER_CHANGER",
  className: className,
  value: fieldValue
});