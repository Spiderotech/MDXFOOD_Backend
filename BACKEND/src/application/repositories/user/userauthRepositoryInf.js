

const userauthRepositoryInf=(repository)=>{

    const userexistemail=(email)=>repository.userexistemail(email);
    const userexistphone=(phone)=>repository.userexistphone(phone);
    const create=(userDetails)=>repository.create(userDetails);
    const creategoogle=(userDetails)=>repository.creategoogle(userDetails);
    const userProfile=(Id)=>repository.userProfile(Id)
    const passwordupdation=(email,password)=>repository.passwordupdation(email,password)
    const updateFCMToken=(Id,fcmtoken)=>repository.updateFCMToken(Id,fcmtoken)
    const removeFCMToken=(Id)=>repository.removeFCMToken(Id)
   


    return{
        userexistemail,
        userexistphone,
        create,
        creategoogle,
        userProfile,
        passwordupdation,
        updateFCMToken,
        removeFCMToken
        
    }

}
export default userauthRepositoryInf