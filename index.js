const fetchData = async (searchResult) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '60b4a84b',
      s: searchResult,
    }
  });
  if (response.data.Error)
    return [];
  return response.data.Search;
}


const input = document.querySelector('input');
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  movies.map(movie => {
    const div = document.createElement('div');
    div.innerHTML = `
<img src="${movie.Poster}"/>
<h1>${movie.Title}</h1>
`;
    document.querySelector('#target').appendChild(div);
  });
}
input.addEventListener('input', debounce(onInput));
