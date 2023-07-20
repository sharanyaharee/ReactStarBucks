import React from 'react';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';
import { useFetch } from '../../Hooks/useFetch';
import { useLocation,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './viewOrder.css';
import Header from '../Header/Header';

const ViewOrder = () => {
 let email;
  const location = useLocation()
  // const email = location.state?.email;
 
const params = useParams()
 params.email? email =params.email: email = location.state?.email;
 sessionStorage.setItem("email",email)

  const [data, error, loading] = useFetch(`/orders?email=${email}`);
  return (
    <>
    <Header/>
    <div className="container mt-5">
     <h2>All Your Orders </h2> 
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Loader />}
      {!error && !loading && (
        <table className="table">
          <thead className="table-success">
            <tr className="color">
              <th scope="col">#</th>
              <th scope="col">Order ID</th>
              <th scope="col">Order Date</th>
              <th scope="col">Customer</th>
              <th scope="col">Order item</th>
              <th scope="col">Cost</th>
              <th scope="col">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ _id, id, name, item, date, cost, phone }, index) => {
              const formattedDate = date ? new Date(date).toLocaleString() : '';

              return (
                <tr key={_id}>
                  <th scope="row">{index + 1}</th>
                  <td>{id}</td>
                  <td>{formattedDate}</td>
                  <td>{name}</td>
                  <td>{item}</td>
                  <td>{cost}</td>
                  <td>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Link to='/menu'>
      <button className="btn btn-success m-5 rounded-pill" >View More Menus  </button>
      </Link>
    </div>
    </>
  );
};

export default ViewOrder;
