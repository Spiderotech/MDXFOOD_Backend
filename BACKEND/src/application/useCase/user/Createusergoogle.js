import usergoogledata from "../../../entities/user/usergoogledata.js";

const Createusergoogle= async (fullName,email,phoneNumber,fcmToken,repositories,authService) => {
    try {
      const userDetails = usergoogledata(fullName,email,phoneNumber);
      const newuser = await repositories.creategoogle(userDetails);

      const Id=newuser._id

      await repositories.updateFCMToken(Id,fcmToken);
  
      const isuser = {
        userId:newuser._id,
        userName:newuser.name,
        userEmail:newuser.email,
        userPhone:newuser.phone
      };
      console.log(isuser);
  
      const accessToken = await authService.generateAccessToken(isuser);
  
      return { status: true, isuser, accessToken };
    } catch (error) {
      console.error("Error creating new user:", error.message);
      return { status: false, message: error.message };
    }
  };
  
  export default Createusergoogle;