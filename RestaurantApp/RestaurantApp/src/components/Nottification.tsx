import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { requestForToken, onMessageListener } from '../utils/notiffication/notificationService';
import notificationSound from '../assets/cute-level-up-3-189853.mp3';


const Notification = () => {
    const [notification, setNotification] = useState({ title: "", body: "" });
   

    const notify = () => {
        const audio = new Audio(notificationSound);
        audio.play();
        toast(<ToastDisplay />, { duration: 10000, });
    };

    

  

    const ToastDisplay = () => { 
        return (
            <a href='/orders'>
            <div className=' w-80 flex flex-col items-center justify-center mb-10' >
               
                <p className='mt-10'>{notification.title} </p> 
                <p className='mt-10'>{notification.body}</p>   
            </div>
            </a>
        );
    }; 
                                   
    useEffect(() => {
        requestForToken()
            .then(() => {
                console.log('Token requested successfully');
            })
            .catch((err) => {
                console.log('An error occurred while requesting token. ', err);
            });

        onMessageListener()
            .then((payload) => {
                console.log('Message received:', payload);
                setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
            })
            .catch((err) => {
                console.log('An error occurred while message listener. ', err);
            });
    }, [notification]);

    useEffect(() => {
        console.log("working");
        
        if (notification.title) {
            notify();
        }
    }, [notification]);

    return (
        <>
            <Toaster />
        </>
    );
}

export default Notification;
