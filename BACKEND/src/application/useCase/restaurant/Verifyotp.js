
const verifyotp = async (otp, email, repositories) => {
    console.log(otp, email);
  
    try {
      const otpstatus= await repositories.otpVerification(otp, email);

      console.log(otpstatus);

      if (otpstatus) {
        console.log('OTP verification successful');
       
      } else {
        console.log('OTP verification failed');
       
      }
  
      return otpstatus;

      
  
     
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  };
  
  export default verifyotp;