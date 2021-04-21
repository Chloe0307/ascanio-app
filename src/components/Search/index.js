// NPM imports
import React from 'react';
import { useState }  from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import fetch from 'isomorphic-fetch';

// styles imports
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './search.css';


const PER_PAGE = 50;
// const SEARCH_URI = 'https://geo.api.gouv.fr/communes?nom=Nantes&fields=departement&boost=population&limit=5';



function Search () {

  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState([])
  const [query, setQuery] = useState('')

  let _cache = {};
    
  const  makeAndHandleRequest = (query, page = 1) =>{
    console.log(query);
    return fetch(`https://geo.api.gouv.fr/communes?nom=${query}&fields=communes`)
      .then(async (items) => {
        let list = await items.json()
        /* eslint-disable */ 
        let options =  list.map(i =>
        ({ nom: i.nom}),
        );
        return {options: options, total_count: options.length}
      });
  }

  // const _handleInputChange = (query) => {
  // setQuery(query)
  // };

    

  const _handlePagination = (e, shownResults) => {
      const cachedQuery = _cache[query];

      if (
      cachedQuery.options.length > shownResults ||
      cachedQuery.options.length === cachedQuery.total_count
      ) {
      return;
      }

      setIsLoading( true);

      const page = cachedQuery.page + 1;

      makeAndHandleRequest(query, page).then(resp => {
      const options = cachedQuery.options.concat(resp.options);
      _cache[query] = { ...cachedQuery, options, page };
      setIsLoading(false)
      setOptions(options)
      });
  };

  const _handleSearch = query => {
      if (_cache[query]) {
        setOptions( _cache[query].options );
        return;
      }
  
      setIsLoading(true)
      makeAndHandleRequest(query).then(resp => {
        _cache[query] = { ...resp, page: 1 };
        setIsLoading(false)
        setOptions(resp.options)
      });
  };


  const handleGetValue = (query) => {
    console.log(query[0].nom, "ola");
    const queryValue = query[0].nom;
    setQuery(queryValue);
    const towns = []
    towns.push(queryValue)
    console.log(queryValue, "yes");
  };

  return(
      <div className="search-content">
          <label className="search-label">Ville</label>
          <AsyncTypeahead
              className="search-input"
              isLoading={isLoading}
              options={options}
              query={query}
              onChange={(e) => handleGetValue(e, setQuery, "queryValue")}
              id="async-pagination-example"
              labelKey="nom"
              maxResults={PER_PAGE - 1}
              minLength={2}
              // onInputChange={_handleInputChange}
              onPaginate={_handlePagination}
              onSearch={_handleSearch}
              paginate
              placeholder="Recherchez une ville ..."
              renderMenuItemChildren={(option, i) => (
                  <div key={i}>
                    <span>{option.nom}</span>
                  </div>
              )}
              useCache={false}
              highlightOnlyResult="true"
          />
    </div>
  )
}

export default Search;
