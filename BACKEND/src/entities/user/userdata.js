const userdata= (fullName,email,phoneNumber,hashPassword) => {



    return{
        getemail:()=>email,
        getname:()=>fullName,
        getphone:()=>phoneNumber,
        getpassword:()=>hashPassword,

    }
 


}

export default userdata