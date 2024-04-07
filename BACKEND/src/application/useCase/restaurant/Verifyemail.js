

const Verifyemail = async (email, repositories, otpService) => {

    console.log(email);

    return repositories.userexistemail(email).then(async (user) => {

        if (user === null) {

            const otpValue = await otpService.createotp();

            console.log(otpValue);

            await repositories.saveOtp(email, otpValue);

            const otp = await otpService.sendOtpByEmail(email, otpValue);

            if (otp) {
                return { message: 'OTP sent successfully', status: true };

            } else {

                return { message: 'Failed to send OTP email not found', status: false };
            }



        } else {
            return { message: 'email not found', status: false };



        }
    });


};

export default Verifyemail;