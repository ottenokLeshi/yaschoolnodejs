export default () => {
  let url = document.getElementById("myForm");
  /* Заглушка для тестов */
  if (url == undefined){
    url = { action: "" };
  }
  return fetch(url.action).then(response => response.json());
};