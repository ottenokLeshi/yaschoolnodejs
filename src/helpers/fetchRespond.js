export default filename => {
  var url = document.getElementById("myForm").action;
  return fetch(url).then(response => response.json());
};


