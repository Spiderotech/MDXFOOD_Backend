

const Googlelogin = async (email,fcmtoken, repositories,authService) => {

    console.log(email,fcmtoken);
    try {
        const user = await repositories.userexistemail(email);
        if (!user) {
            return { message: 'User email not found', status: false };
        } else {

            await repositories.updateFCMToken(user._id, fcmtoken);

            


            const isuser = { 
                userId:user._id,
                userName:user.name,
                userEmail:user.email,
                userPhone:user.phone
              };
        
              const accessToken = await authService.generateAccessToken(isuser);

            return { message: 'Email found', status: true, isuser, accessToken };
        }
    } catch (error) {
        console.error("Error verifying email:", error);
        return { message: 'Error verifying email', status: false };
    }


}

export default Googlelogin
