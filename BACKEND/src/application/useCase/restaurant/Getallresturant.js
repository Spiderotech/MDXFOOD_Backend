

const Getallresturant = async (repositories) => {


    
    
    try {

        const allresturant =await repositories.restaurants()
       

        return { status: true, allresturant }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default Getallresturant
