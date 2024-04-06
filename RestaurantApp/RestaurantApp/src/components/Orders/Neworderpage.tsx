import { Key, useEffect, useState } from "react";
import Layout from './Layout'
import Newordercard from './Newordercard'
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


const Neworderpage = () => {
  const admindata = useSelector((state: RootState) => state.admin.value);
  const [order, setorder] = useState<any[]>([]);
  const id = admindata.id;

  useEffect(() => {
    axios
      .get("/getneworder?id=" + id)
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
       <div className='p-10'>
        {order.length === 0 ? (
          <p className="mt-20 flex justify-center items-center">No new orders found</p>
        ) : (
          order.map((order: any) => (
            <Newordercard key={order._id} order={order} />
          ))
        )}
      </div>

     
    </Layout>

  )
}

export default Neworderpage