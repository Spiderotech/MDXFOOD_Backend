

const Searchfood =async (repositories) => {

   
    
    try {

        const fooddata =await repositories.restaurantfoodsearch()
       

        return { status: true, fooddata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
  
}

export default Searchfood
