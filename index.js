const fetchData = async (searchResult) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '60b4a84b',
      s: searchResult,
    }
  });
  console.log(response.data);
}
let timeoutId;
const input = document.querySelector('input');
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000)

}
input.addEventListener('input', onInput);
