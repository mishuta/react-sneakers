import Card from '../components/Card';

function Orders({items, onAddToOrders}) { 
  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>My Orders</h1>
        </div>  
          
        <div className="d-flex flex-wrap">
        {items.map((item, i) => (
              <Card
                key={i}                
                {...item}        
              />
            ))}
        </div>
      </div>
  );
}

export default Orders;