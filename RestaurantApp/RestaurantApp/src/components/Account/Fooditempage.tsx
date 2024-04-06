import { Key, useEffect, useState } from "react";
import Layout from './Layout'
import Fooditemcard from './Fooditemcard'
import { useSelector } from 'react-redux';
import axios from "../../utils/restaurant/axios"

type RootState = {
  admin: {
      value: {
          id: string | null;
          email: string | null;
        
      };
  };
};

const Fooditempage = () => {
  const admindata = useSelector((state: RootState) => state.admin.value);
  const [food, setFood] = useState<any[]>([]); 
  const id = admindata.id;

  useEffect(() => {
    axios
      .get("/getallfood?id=" + id)
      .then((response) => {
        console.log(response.data.fooddata);
        setFood(response.data.fooddata);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [id]);

  return (
    <Layout>
       <div className='mt-10 '>
       {food.map((foods: { id: Key | null | undefined; }) => (
            <Fooditemcard key={foods.id} company={foods} />
          ))}
       </div>
    </Layout>
  );
}

export default Fooditempage;
