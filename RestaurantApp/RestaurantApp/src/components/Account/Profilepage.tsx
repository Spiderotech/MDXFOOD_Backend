import { useEffect, useState } from "react";
import Layout from './Layout'
import Editprofilemodal from './Editprofilemodal'
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

const Profilepage = ({orderCount,total}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const admindata = useSelector((state: RootState) => state.admin.value);
    const [profile, setprofile] = useState<any>(null);
    const [food, setFood] = useState<any[]>([]);
    const id = admindata.id;

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

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

    useEffect(() => {
        axios
          .get("/getprofile?id=" + id)
          .then((response) => {
            setprofile(response.data.profiledata);
            
            
          })
          .catch((response) => {
            console.error(response.message);
          });
      }, [id]);
    
      if (profile === null) {
        return <p>Loading...</p>;
      }


    return (
      <Layout>
        <div className="flex items-center justify-center w-full p-10 ">
                <div className="bg-white dark:bg-gray-800 shadow rounded">
                    <div className="relative">
                        <img className="h-56 shadow rounded-t w-full object-cover object-center" src={profile.restaurantImage} alt="" />
                        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src={profile.restaurantImage} alt="" />
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10">
                        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                            
                        </div>
                        <div className="pt-6 xl:pt-8 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                            <div className="xl:pr-16 w-full xl:w-2/3">
                                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">{profile.name}</h2>
                                </div>
                                <p className="text-center xl:text-left mt-2 tracking-normal text-gray-600 dark:text-gray-400 leading-5 text-xl">{profile.email}</p>
                                <p className="text-center xl:text-left mt-2 text-xl tracking-normal text-gray-600 dark:text-gray-400 leading-5">{profile.location}</p>
                            </div>
                            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">{orderCount}</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Orders</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">{total}</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Revenue</p>
                                </div>
                                <div className="mr-6 xl:mr-10 cursor-pointer">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">{food.length}</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Food </p>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                                    <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">Available</div>
                                </div>
                                <button onClick={openModal} className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-3 md:px-6 py-2 text-sm">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Editprofilemodal isOpen={isModalOpen} onClose={closeModal}/>

            </div>

      </Layout>
            
      
    )
}

export default Profilepage