

const Getconfirmorder =async (Id,repositories) => {


    try {

        const orderdata =await repositories.confirmorder(Id)

        console.log(orderdata,"data");
       
       

        return { status: true, orderdata }

    } catch {
        return { message: 'Error getting user order', status: false };

    }
 



}

export default Getconfirmorder
