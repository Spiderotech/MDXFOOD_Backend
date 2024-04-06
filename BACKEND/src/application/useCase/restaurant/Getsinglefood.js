

const Getsinglefood = async(Id,repositories) => {
    try {

        const fooddata =await repositories.singlefooddata(Id)
       

        return { status: true, fooddata }

    } catch {
        return { message: 'Error getting user profile', status: false };

    }
}

export default Getsinglefood
