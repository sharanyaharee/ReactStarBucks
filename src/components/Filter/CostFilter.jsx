import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

const CostFilter = ({ catId, setData }) => {
  const [data, loading, error] = useFetch(`/sortItems/${catId}?sort=price`);

  const handleCostFilter = () => {
    setData(data);
  };

  return (
    <div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader />}
      <div className="filterButtons">
        <button className="btn btn-success m-5 rounded-pill" onClick={handleCostFilter}>
          Cost
        </button>
       
      </div>
    </div>
  );
};

export default CostFilter;
