

const restaurantRrpositoryInf = (repository) => {
    const userexistemail=(email)=>repository.userexistemail(email);
    const saveOtp=(email, otpValue)=>repository.saveOtp(email, otpValue)
    const otpVerification=(email, otpValue)=>repository.otpVerification(email, otpValue)
    const create=(restaurantDetails)=>repository.create(restaurantDetails);
    const userProfile=(Id)=>repository.userProfile(Id)
    const createfooditem=(food)=>repository.createfooditem(food);
    const restaurantfoods=(Id)=>repository.restaurantfoods(Id)
    const restaurants=()=>repository.restaurants()
    const restaurantfoodsearch=()=>repository.restaurantfoodsearch()
    const deletefooditem=(Id)=>repository.deletefooditem(Id)
    const singlefooddata=(Id)=>repository.singlefooddata(Id)
    const editfooditem=(id,fooddetails)=>repository.editfooditem(id,fooddetails)
    const editrestaurant=(Id,restaurantName,location,coverPhoto)=>repository.editrestaurant(Id,restaurantName,location,coverPhoto)

    return{
        userexistemail,
        saveOtp,
        otpVerification,
        create,
        userProfile,
        createfooditem,
        restaurantfoods,
        restaurants,
        restaurantfoodsearch,
        deletefooditem,
        singlefooddata,
        editfooditem,
        editrestaurant
        
    }
}

export default restaurantRrpositoryInf