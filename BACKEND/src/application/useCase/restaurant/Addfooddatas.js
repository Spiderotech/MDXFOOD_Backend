
import fooddata from "../../../entities/restaurant/food.js";

const addfooddata = async (Id,foodName,description,coverPhoto,price,preparationTime,extraItems,repositories) => {
   

    try {
        const fooddetails = fooddata(Id,foodName,description,coverPhoto,price,preparationTime,extraItems)


    


        const food = await repositories.createfooditem(fooddetails)
        console.log(food,"addded");

        return { status: true,food }

    } catch {
        return { message: 'Error adding food data', status: false };

    }






}
export default addfooddata