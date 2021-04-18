import React from 'react';

import { useState }  from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import fetch from 'isomorphic-fetch';

import 'react-bootstrap-typeahead/css/Typeahead.css';


const PER_PAGE = 50;
const SEARCH_URI = 'https://api.github.com/search/users';


function makeAndHandleRequest(query, page = 1) {
  console.log("query");
  return fetch(`${SEARCH_URI}?q=${query}+in:login&page=${page}&per_page=50`)
    .then(resp => resp.json())
    .then(({ items, total_count }) => {
      console.log(items);
      const options = items.map(i => ({
        avatar_url: i.avatar_url,
        id: i.id,
        login: i.login,
      }));
      return { options, total_count };
    });
}

function Search () {

    
    const [isLoading, setIsLoading] = useState(false)
    const [options, setOptions] = useState([])
    const [query, setQuery] = useState('')
    let _cache = {};


    const _handleInputChange = (query) => {
    console.log(query);
    setQuery(query)
    };

    

    const _handlePagination = (e, shownResults) => {
        const cachedQuery = _cache[query];
        console.log("ckjdshbcyu");


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
        console.log("oiugb");
        console.log(query);
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
    
    return(
        <div className="search-content">
    
            <label>Recherche par ville</label>
            <AsyncTypeahead
                isLoading={isLoading}
                options={options}
                query={query}
                id="async-pagination-example"
                labelKey="login"
                maxResults={PER_PAGE - 1}
                minLength={2}
                onInputChange={_handleInputChange}
                onPaginate={_handlePagination}
                onSearch={_handleSearch}
                paginate
                placeholder="Search for a Github user..."
                renderMenuItemChildren={option => (
                    <div key={option.id}>
                    <img
                        alt={option.login}
                        src={option.avatar_url}
                        style={{
                        height: '24px',
                        marginRight: '10px',
                        width: '24px',
                        }}
                    />
                    <span>{option.login}</span>
                    </div>
                )}
                useCache={false}
            />
    </div>

    )
}

export default Search;
