import User from "../../models/user/userModel.js";

const userauthRepositoryImp=()=>{


    const userexistemail = (email) => User.findOne({ email: email });

    const userexistphone = (phone) => User.findOne({ phone: phone });



    const create = (userDetails) => {
       
        const newuser = new User({
          name:userDetails?.getname(),
          email:userDetails?.getemail(),
          phone:userDetails?.getphone(),
          password:userDetails?.getpassword(),
          google:false
        
    
        })
        return newuser.save()
    
      }


      const creategoogle = (userDetails) => {
       
        const newuser = new User({
          name:userDetails?.getname(),
          email:userDetails?.getemail(),
          phone:userDetails?.getphone(),
          google:true
        
    
        })
        return newuser.save()
    
      }


      const passwordupdation = async (email, password) => {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { email: email },
                { $set: { password: password } },
                { new: true }
            );
            if (!updatedUser) {
                return { message: 'User not found with the provided email', status: false };
            }
            return { message: 'Password updated successfully', status: true };
        } catch (error) {
            console.error("Error updating password:", error);
            return { message: 'Error updating password', status: false };
        }
    };
    
    const updateFCMToken = async(Id,fcmtoken) => {

      console.log(fcmtoken);

      try {
        await User.findByIdAndUpdate(Id, { fcmToken: fcmtoken });
        console.log("FCM token updated successfully.");
      } catch (error) {
        console.error("Error updating FCM token:", error);
        throw error; 
      }
       
      
  
    }

    const removeFCMToken = async (Id) => {
      try {
        // Find the user by ID
        const user = await User.findById(Id);
        
        // Check if user exists and has an FCM token
        if (user && user.fcmToken) {
          // Remove the FCM token by setting it to null
          await User.findByIdAndUpdate(Id, { $unset: { fcmToken: "" } });
          console.log("FCM token removed successfully.");
        } else {
          console.log("No FCM token found for the user.");
        }
      } catch (error) {
        console.error("Error removing FCM token:", error);
        throw error;
      }
    };
    
      





    return{
        userexistemail,
        userexistphone,
        create,
        creategoogle,
        passwordupdation,
        updateFCMToken,
        removeFCMToken
        
    }

}
export default userauthRepositoryImp