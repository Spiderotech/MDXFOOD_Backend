

const fooddata= (Id,foodName,description,coverPhoto,price,preparationTime,extraItems) => {



    return{
        getrestaurantid:()=>Id,
        getfoodname:()=>foodName,
        getdescription:()=>description,
        getimage:()=>coverPhoto,
        getprice:()=>price,
        getpreparationtime:()=>preparationTime,
        getextraitems:()=>extraItems
      

    }
 


}

export default fooddata