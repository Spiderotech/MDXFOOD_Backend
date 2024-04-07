

const Removetoken = async(Id,repositories) => {

    try {

        const deletetoken =await repositories.removeFCMToken(Id)

        console.log(deletetoken,"data");
       
       

        return { status: true }

    } catch {
        return { message: 'Error deleteting token', status: false };

    }
  
}

export default Removetoken
