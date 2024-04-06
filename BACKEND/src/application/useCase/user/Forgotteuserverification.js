const Forgotteuserverification = async (email, phone, repositories) => {
    try {
        
        const user = await repositories.userexistemail(email);
        if (user == null) {
            
            return { message: 'User not found with the provided email', status:false };
        } else {
            
            if (user.phone === phone) {
               
                return { message: 'Phone number matches the user\'s phone number', status:true,user };
            } else {
               
                return { message: 'Phone number does not match the user\'s phone number', status:false };
            }
        }
    } catch (error) {
        console.error("Error verifying user:", error);
        return { message: 'Error verifying user', status: false };
    }
}

export default Forgotteuserverification;
