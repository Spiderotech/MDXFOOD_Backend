import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "../../utils/restaurant/axios";
import Axios from "../../utils/service/axios"
import { useNavigate } from 'react-router';

type RootState = {
    admin: {
        value: {
            id: string | null;
            email: string | null;
        };
    };
};

const EditProfileModal = ({ isOpen, onClose }) => {
    const admindata = useSelector((state: RootState) => state.admin.value);
    const [profile, setProfile] = useState<any>(null);
    const id = admindata.id;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/getprofile?id=" + id)
            .then((response) => {
                setProfile(response.data.profiledata);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [id]);

    const validationSchema = Yup.object().shape({
      restaurantName: Yup.string().required('Restaurant Name is required'),
      location: Yup.string().required('Location is required'),
      coverPhoto: Yup.string().required('Cover photo is required'),
  });

    const formik = useFormik({
          enableReinitialize:true,
        initialValues: {
            restaurantName: profile?.name || '',
            location: profile?.location || '',
            coverPhoto:profile?.restaurantImage|| null,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let imageUrl = profile?.restaurantImage; 

            if (values.coverPhoto) {
                
                const formData = new FormData();
                formData.append('coverPhoto', values.coverPhoto);

                try {
                    const imageResponse = await Axios.get('/s3service');
                    const uploadUrl = imageResponse.data.response;

                    await fetch(uploadUrl, {
                        method: 'PUT',
                        body: values.coverPhoto,
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    imageUrl = uploadUrl.split('?')[0];
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }

            const body = {
                Id:id,
                restaurantName: values.restaurantName,
                location: values.location,
                coverPhoto: imageUrl || profile?.restaurantImage,
            };
            console.log(body);
            

            try {
                const response = await axios.post('/update', body);
                if (response.data.status === true) {
                    console.log('Profile updated successfully:', response.data);
                    navigate('/accounts')
                    onClose();
                    window.location.reload();
                } else {
                    console.error('Failed to update profile:', response.data);
                }
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        },
    });

    

    return (
      <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" id="modal-title">
                              Edit Profile
                          </h3>
                          <div className="mt-2">
                              {/* Form Fields */}
                              <form onSubmit={formik.handleSubmit}>
                                  <div>
                                      <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                          Restaurant Name
                                      </label>
                                      <input
                                          type="text"
                                          name="restaurantName"
                                          id="restaurantName"
                                          value={formik.values.restaurantName}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      {formik.touched.restaurantName && formik.errors.restaurantName ? (
                                          <div className="text-red-500">{formik.errors.restaurantName}</div>
                                      ) : null}
                                  </div>
                                  <div className="mt-4">
                                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                          Location
                                      </label>
                                      <input
                                          type="text"
                                          name="location"
                                          id="location"
                                          value={formik.values.location}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      {formik.touched.location && formik.errors.location ? (
                                          <div className="text-red-500">{formik.errors.location}</div>
                                      ) : null}
                                  </div>
                                  <div className="mt-4">
                                      <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                          Cover Photo
                                      </label>
                                      <input
                                          type="file"
                                          accept="image/*"
                                          name="coverPhoto"
                                          id="coverPhoto"
                                          onChange={(event) => formik.setFieldValue('coverPhoto', event.currentTarget.files[0])}
                                          onBlur={formik.handleBlur}
                                          className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      {formik.touched.coverPhoto && formik.errors.coverPhoto ? (
                                          <div className="text-red-500">{formik.errors.coverPhoto}</div>
                                      ) : null}
                                  </div>
                                  <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4 sm:text-sm">
                                      Save
                                  </button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      Cancel
                  </button>
              </div>
          </div>
      </div>
  </div>
    );
}

export default EditProfileModal;
