

const Verifyemail = async (email,repositories,otpService) => {

    console.log(email);

    return repositories.userexistemail(email).then(async (user) => {
        
        if (user === null) {

            const otpValue = await otpService.createotp();

            console.log(otpValue);

            await repositories.saveOtp(email, otpValue);

            await otpService.sendOtpByEmail(email, otpValue);

            return { message: 'otp send sucessfully', status: true };
           

           


        } else {
          return { message: 'email not found', status: false };

           
            
        }
    });


};

export default Verifyemail;