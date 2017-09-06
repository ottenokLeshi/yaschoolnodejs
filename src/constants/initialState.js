/**
 * Начальное состояние для всех input-ов
 */
export const INITIAL_INPUT_STATE = {
  fio: { value:"", isValid: true },
  email: { value:"", isValid: true },
  phone: { value:"", isValid: true }
};

/**
 * Начальное состояние для контейнера
 */
export const INITIAL_CONTAINER_STATE = {
  value: "",
  progress: false,
  error: false,
  success: false
};