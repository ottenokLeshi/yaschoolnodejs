export default filename => {
  const url = `https://raw.githubusercontent.com/ottenokLeshi/yaschoolnodejs/develop/serverResponds/${filename}.json`;
  return fetch(url).then(response => response.json());
};


