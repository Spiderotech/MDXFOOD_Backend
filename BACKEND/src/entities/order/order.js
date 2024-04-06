

const orderdata= (restaurantId,userId,items,totalPrice,neworderId) => {



    return{
        getrestaurantid:()=>restaurantId,
        getuserid:()=>userId,
        getitems:()=>items,
        gettotalprice:()=>totalPrice,
        getorderid:()=>neworderId
      

    }
 


}

export default orderdata