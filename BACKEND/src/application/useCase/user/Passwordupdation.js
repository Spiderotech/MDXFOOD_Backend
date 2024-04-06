const Passwordupdation = async (email, password, repositories, authService) => {
    try {
        
        const hashPassword = await authService.bcryptpassword(password);
        const updation = await repositories.passwordupdation(email, hashPassword);
        if (updation.status) {
            return { message: updation.message, status: true };
        } else {
            return { message: updation.message, status: false };
        }
    } catch (error) {
        console.error("Error updating password:", error);
        return { message: 'Error updating password', status: false };
    }
};

export default Passwordupdation;
