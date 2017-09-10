import _ from "lodash";

export default () => {
  let url = document.querySelector("#submitButton");
  /* Заглушка для тестов */
  if (_.isNull(url)){
    url = { action: "" };
  }

  return fetch(url.action).then(response => response.json());
};
