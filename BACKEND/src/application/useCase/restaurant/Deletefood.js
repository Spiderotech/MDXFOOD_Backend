

const Deletefood = async (Id,repositories) => {
    try {

        const deletefood =await repositories.deletefooditem(Id)

        console.log(deletefood,"data");
       
       

        return { status: true }

    } catch {
        return { message: 'Error deleteting food', status: false };

    }
}

export default Deletefood
