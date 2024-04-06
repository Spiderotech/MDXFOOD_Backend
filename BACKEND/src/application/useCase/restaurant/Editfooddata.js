import fooddata from "../../../entities/restaurant/food.js";

const Editfooddata =async (id,Id,foodName,description,coverPhoto,price,preparationTime,extraItems,dbrepository) => {

    try {
        const fooddetails = fooddata(Id,foodName,description,coverPhoto,price,preparationTime,extraItems)


        const food = await dbrepository.editfooditem(id,fooddetails)
        console.log(food,"addded");

        return { status: true,food }

    } catch {
        return { message: 'Error adding food data', status: false };

    }
 
}

export default Editfooddata
