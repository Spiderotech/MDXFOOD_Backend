

const Getcompleteorder = async(Id,repositories) => {

    try {

        const orderdata =await repositories.completeorderrestaurant(Id)

        console.log(orderdata,"data");
       
       

        return { status: true, orderdata }

    } catch {
        return { message: 'Error getting user order', status: false };

    }
  
}

export default Getcompleteorder
