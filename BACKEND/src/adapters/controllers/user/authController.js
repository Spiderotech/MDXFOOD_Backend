import Verifyemail from "../../../application/useCase/user/Verifyemail.js"
import Login from "../../../application/useCase/user/Login.js"
import Verifyphone from "../../../application/useCase/user/Verifyphone.js"
import Createuser from "../../../application/useCase/user/Createuser.js"
import Googlelogin from "../../../application/useCase/user/Googlelogin.js"
import Createusergoogle from "../../../application/useCase/user/Createusergoogle.js"
import Forgotteuserverification from "../../../application/useCase/user/Forgotteuserverification.js"
import Passwordupdation from "../../../application/useCase/user/Passwordupdation.js"
import Removetoken from "../../../application/useCase/user/Removetoken.js"


const authController = (userauthRepositoryInf, userauthRepositoryImp, userauthServiceInt, userauthServiceImp) => {

    const dbrepository = userauthRepositoryInf(userauthRepositoryImp())
    const authService = userauthServiceInt(userauthServiceImp())


    const verifyemail = (req, res) => {

        const { email } = req.body
        console.log(email);

        Verifyemail(email, dbrepository, authService).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))



    }


    const verifyphone = (req, res) => {
        const { phone } = req.body
        console.log(phone);

        Verifyphone(phone, dbrepository).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))




    }

    const login = (req, res) => {
        const { email, password,fcmtoken } = req.body
        Login(email, password,fcmtoken, dbrepository, authService).then((response) => {
            console.log(response, "login");
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const googlelogin = (req, res) => {
        const { email,fcmtoken } = req.body
        Googlelogin(email,fcmtoken, dbrepository, authService).then((response) => {
            res.json(response)

        }).catch((err) => console.log(err))

    }

    const usercreation = (req, res) => {

        const { fullName, email, phoneNumber, password,fcmtoken } = req.body


        Createuser(fullName, email, phoneNumber, password,fcmtoken, dbrepository, authService).then((response) => {
            console.log(response);
            res.json(response)

        }).catch((err) => console.log(err))




    }

    const usergoogle = (req, res) => {

        const { fullName, email, phoneNumber,fcmToken } = req.body


        Createusergoogle(fullName, email, phoneNumber,fcmToken, dbrepository, authService).then((response) => {
            console.log(response);
            res.json(response)

        }).catch((err) => console.log(err))




    }

    const forgotteverification = (req, res) => {

        const { email, phone } = req.body

        Forgotteuserverification(email,phone, dbrepository).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))
    }


    const changepassword = (req, res) => {
        const { email,password} = req.body

        Passwordupdation(email,password, dbrepository,authService).then((response) => {

            res.json(response)


        }).catch((err) => console.log(err))




    }


    const removetoken=(req,res)=>{
        const Id = req.query.id;
        console.log(Id,"auth");
       
        Removetoken(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }


    return {
        verifyemail,
        verifyphone,
        usercreation,
        login,
        googlelogin,
        usergoogle,
        changepassword,
        forgotteverification,
        removetoken

    }

}
export default authController