import Card from '../components/Card';
import AppContext from  '../context';
import { useContext } from 'react';


function Orders() {   
  const { orderItems, isLoading } = useContext(AppContext);
  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>My Orders</h1>
        </div>  
          
        <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orderItems).map((item, i) => (
              <Card
                key={i}
                loading={isLoading}    
                                 
                {...item}        
              />
            ))}
        </div>
      </div>
  );
}

export default Orders;