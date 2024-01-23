import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers } from '../Redux/ActionType';
const BeersTable = () => {
  const dispatch = useDispatch();
  const beers = useSelector(state => state.beers);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
const [filter,setFilter]=useState({
  brewed_before:"",
  brewed_after:"",
  pageNumber:1
})
  useEffect(() => {
    dispatch(fetchBeers(filter));
  }, [filter, dispatch]);

  useEffect(()=>{
console.log('beers------------>',beers)
  },[beers])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  const handleFilterChange=(name,value)=>{
    setFilter({
      ...filter,
      [name]:value
    })
  }
  return (
    <div>
     <input
        type={'month'}
        value={filter.brewed_before}

        onChange={e => handleFilterChange('brewed_before',e.target.value)}
      />
      <input
        type="month"
        value={filter.brewed_after}
        onChange={e => handleFilterChange('brewed_after',e.target.value)}
      />
<table class="table table-striped table-hover">
  <thead class="table-dark">
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Tagline</th>
      <th scope="col">First Brewed</th>
    </tr>
  </thead>
  <tbody>
  { Array.isArray(beers) && beers?.map(beer => (
            <tr key={beer.id}>
                   <td>{beer.id}</td>
              <td>{beer.name}</td>
              <td>{beer.tagline}</td>
              <td>{beer.first_brewed}</td>
            </tr>
          ))}
  </tbody>
</table> 
      <button className='btn btn-primary' onClick={() => handleFilterChange('pageNumber',filter.pageNumber - 1)} disabled={filter.pageNumber === 1}>
        Previous
      </button>
      <span style={{marginLeft:'10px'}}>
        Page {filter.pageNumber}
      </span>
      <button style={{marginLeft:'10px'}} className='btn btn-primary' onClick={() => handleFilterChange('pageNumber',filter.pageNumber + 1)}>
        Next
      </button>
    </div>
  );
}

export default BeersTable;