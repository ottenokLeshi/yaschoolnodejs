export default () => {
  const url = document.getElementById("myForm").action;
  return fetch(url).then(response => response.json());
};


