import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { PhotoIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "../../utils/restaurant/axios"
import Axios from "../../utils/service/axios"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type RootState = {
    admin: {
        value: {
            id: string | null;
            email: string | null;

        };
    };
};

const Edititempage = () => {
    const { Id } = useParams();
    console.log(Id);

    const [extraItems, setExtraItems] = useState([{ name: '', price: '' }]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [food, setFood] = useState<any[]>([]);
    const admindata = useSelector((state: RootState) => state.admin.value);
    const id = admindata.id;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/getsinglefood?id=" + Id)
            .then((response) => {
                console.log(response.data.fooddata);
                setFood(response.data.fooddata);
                setSelectedImage(food?.image || null)
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [id]);
    console.log(food.name);


    const addExtraItem = () => {
        if (extraItems.length < 2) {
            setExtraItems([...extraItems, { name: '', price: '' }]);
        }
    };

    const handleExtraItemChange = (index: number, field: keyof typeof extraItems[0], value: string) => {
        const updatedItems = [...extraItems];
        updatedItems[index][field] = value;
        setExtraItems(updatedItems);
    };


    const handleRemoveExtraItem = (index: number) => {
        const updatedItems = [...extraItems];
        updatedItems.splice(index, 1);
        setExtraItems(updatedItems);
    };


    const validationSchema = Yup.object().shape({
        foodName: Yup.string().required('Food name is required'),
        description: Yup.string().required('Description is required'),
        coverPhoto: Yup.string().required('Cover photo is required'),
        price: Yup.string().required('Price is required'),
        preparationTime: Yup.string().required('Preparation time is required'),
        extraItems: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Extra item name is required'),
                price: Yup.string().required('Extra item price is required'),
            })
        ),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            foodName: food.name || '',
            description: food.description || '',
            coverPhoto: food.image || null,
            price: food.price || '',
            preparationTime: food.preparationTime || '',
            extraItems: food.extraItems || Array.from({ length: 2 }, () => ({ name: '', price: '' })),
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            let imageUrlToUse;

            const fileimg = values.coverPhoto;
            if (!fileimg) {
                formik.setFieldError('coverPhoto', 'Image is required');
            }

    
            try {

                if (values.coverPhoto && typeof values.coverPhoto === 'object') {
                    const imageResponse = await Axios.get('/s3service');
                const imageUrl = imageResponse.data.response;



                const imageUploadResponse = await fetch(imageUrl, {
                    method: 'PUT',
                    body: fileimg,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });


                imageUrlToUse = imageUrl.split('?')[0];
                console.log(imageUrlToUse);
                formik.setFieldValue('userimage', imageUrlToUse);

                }else{
                    imageUrlToUse = food.image || ''; 

                }
                

                const body = {
                    Id: Id,
                    resturantId:id,
                    foodName: values.foodName,
                    description: values.description,
                    coverPhoto: imageUrlToUse,
                    price: values.price,
                    preparationTime: values.preparationTime,
                    extraItems: values.extraItems,

                };

                console.log(body);

                axios.post('/editfood-item', body)
                    .then((response) => {
                        console.log(response.data);

                        if (response.data.status === true) {

                            navigate('/accounts/foods')



                        } else {

                            // toast.error("user already exists")

                        }
                    })
                    .catch((response) => {
                        console.error(response.message);
                    });




            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

    });
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files && event.currentTarget.files[0];
        formik.setFieldValue('coverPhoto', file || null);
        setSelectedImage(file);
    };

    return (
        <Layout>
            <div className='p-10'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Upadte Your food items</h2>


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name of the food
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                            <input
                                                type="text"
                                                name='foodName'
                                                id='foodName'
                                                value={formik.values.foodName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"

                                            />

                                        </div>
                                        {formik.touched.foodName && formik.errors.foodName && (
                                            <div className='text-red-500 text-[12px] absolute mt-2'>{formik.errors.foodName}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name='description'
                                            id='description'
                                            value={formik.values.description}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                        />

                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the food</p>
                                    {formik.touched.description && formik.errors.description && (
                                        <div className='text-red-500 text-[12px] absolute mt-2'>{formik.errors.description}</div>
                                    )}
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cover photo of the food
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >

                                                    <input

                                                        id="coverPhoto"
                                                        name="coverPhoto"
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        onBlur={formik.handleBlur}
                                                        className="" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>

                                    </div>
                                    {formik.touched.coverPhoto && formik.errors.coverPhoto && (
                                        <div className='text-red-500 text-[12px] absolute mt-2'>{formik.errors.coverPhoto}</div>
                                    )}
                                </div>
                                <div className="ml-6 mt-10">
                                    {typeof selectedImage === "string" ? (
                                        <img src={selectedImage} alt="Selected Cover" className="max-w-xs max-h-40" />
                                    ) : selectedImage instanceof Blob || selectedImage instanceof File ? (
                                        <img src={URL.createObjectURL(selectedImage)} alt="Selected Cover" className="max-w-xs max-h-40" />
                                    ) : null}
                                </div>

                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12 ">


                            <div className="mt-10   ">


                                <div className="sm:col-span-3 ">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type='number'
                                            name='price'
                                            id='price'
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="block w-[30%]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.price && formik.errors.price && (
                                        <div className='text-red-500 text-[12px] absolute mt-2'>{formik.errors.price}</div>
                                    )}
                                </div>


                                <div className="sm:col-span-3 mt-10">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Preparation Time
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name='preparationTime'
                                            id='preparationTime'
                                            value={formik.values.preparationTime}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="10-20">10-20 minute</option>
                                            <option value="20-30">20-30 minute</option>
                                            <option value="30-40">30-40 minute</option>
                                        </select>
                                    </div>
                                    {formik.touched.preparationTime && formik.errors.preparationTime && (
                                        <div className='text-red-500 text-[12px] absolute mt-2'>{formik.errors.preparationTime}</div>
                                    )}
                                </div>


                            </div>


                        </div>
                        <div>
                            <div className=' flex flex-row'>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Add Extra items</h2>
                                <div className=" mt-1 ml-2">
                                    <button
                                        type="button"
                                        className="rounded-full bg-indigo-600 p-1 text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
                                        onClick={addExtraItem}
                                    >
                                        <PlusIcon className="h-3 w-3" />
                                    </button>
                                </div>

                            </div>


                            <div className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-6 gap-10">
                                {extraItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className="sm:col-span-2 sm:col-start-1 ">
                                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type='text'
                                                    name={`extraItems[${index}].name`}
                                                    id={`extraItemName-${index}`}
                                                    value={formik.values.extraItems[index].name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    autoComplete="off"
                                                    className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {formik.touched.extraItems && formik.touched.extraItems[index] && formik.errors.extraItems && formik.errors.extraItems[index] && (
                                                <div className='text-red-500 text-[12px] mt-1'>{formik.errors.extraItems[index].name}</div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor={`item-price-${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                                                Price
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type='number'
                                                    name={`extraItems[${index}].price`}
                                                    id={`extraItemPrice-${index}`}
                                                    value={formik.values.extraItems[index].price}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    autoComplete="off"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {formik.touched.extraItems && formik.touched.extraItems[index] && formik.errors.extraItems && formik.errors.extraItems[index] && (
                                                <div className='text-red-500 text-[12px] mt-1'>{formik.errors.extraItems[index].price}</div>
                                            )}
                                        </div>
                                        <button

                                            onClick={() => handleRemoveExtraItem(index)}
                                            className=" flex justify-center items-center mt-5 "
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                            </svg>

                                        </button>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">

                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>


            </div>






        </Layout >
    )
}

export default Edititempage