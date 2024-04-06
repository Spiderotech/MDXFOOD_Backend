const Verifyphone = async (phone, repositories) => {
    console.log(phone);
    try {
        const user = await repositories.userexistphone(phone);
        if (user==null) {
            return { message: 'User phone not found', status: true };
        } else {
           
        
        return { message: 'phone number found at a user', status:false };
           
        }
    } catch (error) {
        console.error("Error verifying phone:", error);
        return { message: 'Error verifying phone', status: false };
    }
};

export default Verifyphone;
