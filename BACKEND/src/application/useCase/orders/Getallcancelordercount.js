

const Getallcancelordercount =async (Id,repositories) => {
    try {

        const orderdata =await repositories.cancelordercount(Id)

        console.log(orderdata,"data");
       
       

        return { status: true, orderdata }

    } catch {
        return { message: 'Error getting user order', status: false };

    }
}

export default Getallcancelordercount
