

const Getallfood = async (Id,repositories) => {


    console.log(Id,"usecasse");
    
    try {

        const fooddata =await repositories.restaurantfoods(Id)
       

        return { status: true, fooddata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}
export default Getallfood
