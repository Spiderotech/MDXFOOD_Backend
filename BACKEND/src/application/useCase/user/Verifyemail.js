const Verifyemail = async (email, repositories, otpService) => {
    console.log(email);
    try {
        const user = await repositories.userexistemail(email);
        if (!user) {
            return { message: 'User email not found', status: false };
        } else {
            if (user.google) {
                return { message: 'Email found and user logged in with Google', status: true,user };
            } else {
                return { message: 'Email found', status: true,user };
            }
        }
    } catch (error) {
        console.error("Error verifying email:", error);
        return { message: 'Error verifying email', status: false };
    }
};

export default Verifyemail;
