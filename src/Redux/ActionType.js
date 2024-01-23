import moment from 'moment'; 
export const FETCH_BEERS_START = 'FETCH_BEERS_START';
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE';

export const fetchBeers = (per) => dispatch => {
    dispatch({ type: FETCH_BEERS_START });
    fetch(`https://api.punkapi.com/v2/beers?${per.brewed_before &&`brewed_before=${ moment(per.brewed_before).format('MM/YYYY')}&`}${per.brewed_after &&`brewed_after=${ moment(per.brewed_after  ).format('MM/YYYYY')}&`}page=${per.pageNumber}&per_page=10`)
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_BEERS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: FETCH_BEERS_FAILURE, payload: error }));
}
  