import _ from 'lodash';

export default () => {
  /* global document:true */
  let url = document.querySelector('#myForm');
  /* Заглушка для тестов */
  if (_.isNull(url)) {
    url = { action: '' };
  }

  /* global fetch:true */
  return fetch(url.action).then(response => response.json());
};
