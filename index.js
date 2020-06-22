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
<label><b>Search for Movie</b></label>
<input type="text" class='input' />
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
  resultsWrapper.innerHTML = '';
  dropdown.classList.add('is-active');
  movies.map(movie => {
    const option = document.createElement('a');
    option.classList.add('dropdown-item');
    option.innerHTML = `
<img src="${movie.Poster}"/>
${movie.Title}
`;
    resultsWrapper.appendChild(option);
  });
}
input.addEventListener('input', debounce(onInput));
