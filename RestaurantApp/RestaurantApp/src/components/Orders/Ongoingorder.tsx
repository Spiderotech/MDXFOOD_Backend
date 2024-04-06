import { Key, useEffect, useState } from "react";
import Layout from './Layout'   
import Ongoingordercard from './Ongoingordercard'
import { useSelector } from 'react-redux';
import axios from "../../utils/orders/axios"

type RootState = {
  admin: {
      value: {
          id: string | null;
          email: string | null;
        
      };
  };
};

const Ongoingorder = () => {

  const admindata = useSelector((state: RootState) => state.admin.value);
  const [order, setorder] = useState<any[]>([]); 
  const id = admindata.id;

  useEffect(() => {
    axios
      .get("/getconfirmorder?id=" + id)
      .then((response) => {
        console.log(response.data.orderdata);
        setorder(response.data.orderdata);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [id]);
  return (
    <Layout>
      <div className='p-5'>
      {order.length === 0 ? (
          <p className="mt-20 flex justify-center items-center">No orders found</p>
        ) : (
          order.map((orders: { id: Key | null | undefined; }) => (
            <Ongoingordercard key={order.id} order={orders} />
          ))
         
        )}
      
       
      </div>
        
    </Layout>
  )
}

export default Ongoingorder