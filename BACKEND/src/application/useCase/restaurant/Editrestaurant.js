

const Editrestaurant = async(Id,restaurantName,location,coverPhoto,repositories) => {
    console.log(Id,restaurantName,location,coverPhoto,"ddjdjdj");
    try {
       
        const data = await repositories.editrestaurant(Id,restaurantName,location,coverPhoto)
        console.log(data,"addded");

        return { status: true,data }

    } catch {
        return { message: 'Error adding food data', status: false };

    }
}

export default Editrestaurant
