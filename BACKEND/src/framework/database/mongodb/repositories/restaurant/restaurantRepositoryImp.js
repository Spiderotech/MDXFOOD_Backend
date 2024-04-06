import Restaurant from "../../models/restaurant/restaurantModel.js";
import OTP from "../../models/restaurant/otpModal.js"
import Food from "../../models/restaurant/foodModel.js";

const restaurantRepositoryImp = () => {

    const userexistemail = (email) => Restaurant.findOne({ email: email });

    const saveOtp = async (email, otpValue) => {
        try {
            const otp = new OTP({
                email: email,
                otp: otpValue,
            });
            await otp.save();
            console.log("OTP saved successfully for user:", email);
            return otp;
        } catch (error) {
            console.error("Error saving OTP:", error);
            throw error;
        }
    };


    const otpVerification = async (email, otpValue) => {
        try {
            console.log("Searching for email:", email);
            const otpData = await OTP.findOne({ email: email });
    
            if (otpData && otpData.otp === otpValue) {
                console.log("OTP verified successfully for user:", email);
                
               
                await OTP.deleteOne({ email: email });
    
                console.log("OTP data deleted successfully for user:", email);
                
                return true;
            } else {
                console.log("OTP verification failed for user:", email);
                return false;
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            throw error;
        }
    };


    const create = (restaurantDetails) => {
       
        const newrestaurant = new Restaurant({
          name:restaurantDetails?.getname(),
          location:restaurantDetails?.getlocation(),
          email:restaurantDetails?.getemail(),
          password:restaurantDetails?.getpassword(),
          restaurantImage:restaurantDetails?.getimage(),
        
    
        })
        return newrestaurant.save()
    
      }

      const userProfile = async (userId) => {
       
        return await Restaurant.findById(userId)
      }


      const createfooditem =async (food) => {
       



        const newfooditem = new Food({
            restaurantId:food?.getrestaurantid(),
            name: food?.getfoodname(),
            price: food?.getprice(),
            image: food?.getimage(),
            description: food?.getdescription(),
            preparationTime: food?.getpreparationtime(),
            extraItems: food?.getextraitems(),
        });
    
       
        return await newfooditem.save();
    }
    

    const restaurantfoods = async (Id) => {
       
        return await Food.find({restaurantId:Id})
      }
    
      const restaurants = async () => {
       
        return await Restaurant.find().select('-password');
      }


      const restaurantfoodsearch = async () => {
        try {
           
            const foods = await Food.find({}).populate('restaurantId').exec();
            return foods;
        } catch (error) {
            console.error('Error fetching food data:', error);
            return [];
        }
    };


    const deletefooditem = async (foodItemId) => {
        try {
            // Find the food item by its ID
            const foodItem = await Food.findById(foodItemId);
    
            // Check if the food item exists
            if (!foodItem) {
                throw new Error('Food item not found');
            }
    
            // Delete the food item
            await Food.deleteOne({ _id: foodItemId });
    
            return { success: true, message: 'Food item deleted successfully' };
        } catch (error) {
            console.error('Error deleting food item:', error);
            throw error;
        }
    };


    const singlefooddata = async (userId) => {
       
        return await Food.findById(userId)
      }
    

      const editfooditem =async (id,food) => {

        const foods=await Food.findByIdAndUpdate(
            {_id:id},
            {
                restaurantId:food?.getrestaurantid(),
                name: food?.getfoodname(),
                price: food?.getprice(),
                image: food?.getimage(),
                description: food?.getdescription(),
                preparationTime: food?.getpreparationtime(),
                extraItems: food?.getextraitems(),


            },
            {
                new:true
            }
        );
        return foods
       

    }

    const editrestaurant =async (Id,restaurantName,location,coverPhoto) => {

        console.log(Id,restaurantName,location,coverPhoto,"data");

        const foods=await Restaurant.findByIdAndUpdate(
            {_id:Id},
            {
                name:restaurantName,
                location:location,
                restaurantImage:coverPhoto


            },
            {
                new:true
            }
        );
        return foods
       

    }
    
    
    
    



    return{
        userexistemail,
        saveOtp,
        otpVerification,
        create,
        userProfile,
        createfooditem,
        restaurantfoods,
        restaurants,
        restaurantfoodsearch,
        deletefooditem,
        singlefooddata,
        editfooditem,
        editrestaurant
        
        
    }
}

export default restaurantRepositoryImp