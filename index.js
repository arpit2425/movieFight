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
const root = document.querySelector('.autocomplete');
root.innerHTML = `
<label><b>Search for mMvie</b></label>
<input type="text" />
  <div class="dropdown ">
        <div class="dropdown-menu">
        <div class="dropdown-content results">         
        </div>
      </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');
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
