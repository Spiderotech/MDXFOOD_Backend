import userdata from "../../../entities/user/userdata.js";

const Createuser = async (fullName,email,phoneNumber,password,fcmtoken,repositories,authService) => {
    try {
      const hashPassword = await authService.bcryptpassword(password);
      const userDetails = userdata(fullName,email,phoneNumber,hashPassword);
      const newuser = await repositories.create(userDetails);

      await repositories.updateFCMToken(newuser._id, fcmtoken);
  
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
  
  export default Createuser;