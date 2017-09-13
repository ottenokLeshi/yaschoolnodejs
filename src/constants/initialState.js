/**
 * Начальное состояние для всех input-ов
 */
export const INITIAL_INPUT_STATE = {
  fio: { value: '', isValid: false, isInvalid: false },
  email: { value: '', isValid: false, isInvalid: false },
  phone: { value: '', isValid: false, isInvalid: false }
};

/**
 * Начальное состояние для контейнера
 */
export const INITIAL_CONTAINER_STATE = {
  value: '',
  progress: false,
  error: false,
  success: false
};
