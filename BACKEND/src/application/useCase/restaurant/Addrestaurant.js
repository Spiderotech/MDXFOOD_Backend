import restaurantdata from "../../../entities/restaurant/restaurant.js";


const Addrestaurant = async (email,password,restaurantName,location,coverPhoto,fcmtoken,repositories,authService) => {
    try {
      const hashPassword = await authService.bcryptpassword(password);
      const restaurantDetails = restaurantdata(email,restaurantName,location,hashPassword,coverPhoto);
      const newrestaurant = await repositories.create(restaurantDetails);

      await repositories.updateFCMToken(newrestaurant._id,fcmtoken);
  
      const isRestaurant = {
        userId:newrestaurant._id,
        userName:newrestaurant.name,
        userLocation:newrestaurant.location,
        userEmail:newrestaurant.email,
        userImg: newrestaurant.restaurantImage,
      };
      console.log(isRestaurant);
  
      const accessToken = await authService.generateAccessToken(isRestaurant);
  
      return { status: true, isRestaurant, accessToken };

    } catch (error) {
      console.error("Error creating new restaurant:", error.message);
      return { status: false, message: error.message };
    }
  };
  
  export default Addrestaurant;
