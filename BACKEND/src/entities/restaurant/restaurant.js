

const restaurantdata= (email,restaurantName,location,hashPassword,coverPhoto) => {



    return{
        getemail:()=>email,
        getname:()=>restaurantName,
        getlocation:()=>location,
        getpassword:()=>hashPassword,
        getimage:()=>coverPhoto,

    }
 


}

export default restaurantdata