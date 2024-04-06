

const Getallcompleteorder = async(Id,repositories) => {

    try {

        const orderdata =await repositories.completeorder(Id)

        console.log(orderdata,"data");
       
       

        return { status: true, orderdata }

    } catch {
        return { message: 'Error getting user order', status: false };

    }
  
}

export default Getallcompleteorder
