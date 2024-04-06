import Verifyemail from "../../../application/useCase/restaurant/Verifyemail.js"
import verifyotp from "../../../application/useCase/restaurant/Verifyotp.js"
import Addrestaurant from "../../../application/useCase/restaurant/Addrestaurant.js"
import Login from "../../../application/useCase/restaurant/login.js"
import Getprofile from "../../../application/useCase/restaurant/getprofile.js"
import addfooddata from "../../../application/useCase/restaurant/Addfooddatas.js"
import Getallfood from "../../../application/useCase/restaurant/Getallfood.js"
import Getallresturant from "../../../application/useCase/restaurant/Getallresturant.js"
import Searchfood from "../../../application/useCase/restaurant/Searchfood.js"
import Deletefood from "../../../application/useCase/restaurant/Deletefood.js"
import Getsinglefood from "../../../application/useCase/restaurant/Getsinglefood.js"
import Editfooddata from "../../../application/useCase/restaurant/Editfooddata.js"
import Editrestaurant from "../../../application/useCase/restaurant/Editrestaurant.js"

const restaurantController = (restaurantRrpositoryInf,restaurantRepositoryImp,restaurantServiceInt,restaurantServiceImp,otpServiceInt,otpServiceImp) => {

    const dbrepository = restaurantRrpositoryInf(restaurantRepositoryImp())
    const authService = restaurantServiceInt(restaurantServiceImp())
    const otpService=otpServiceInt(otpServiceImp())

    const verifyemail= (req, res) => {
        const{email}=req.body
    
        Verifyemail(email,dbrepository,otpService).then((response)=>{
           
            res.json(response)

          
        }).catch((err)=>console.log(err))


    }

    const otpverification = (req, res) =>{
        const {otp,email}=req.body

        verifyotp(email,otp,dbrepository).then((response)=>{
            res.json(response)
          
        }).catch((err)=>console.log(err))
    }




    const createrestaurant = (req, res) => {
        const{email,password,restaurantName,location,coverPhoto}=req.body


        Addrestaurant(email,password,restaurantName,location,coverPhoto,dbrepository,authService).then((response)=>{
            console.log(response);
            res.json(response)
          
        }).catch((err)=>console.log(err))



    }

    const login = (req, res) => {
        const{email,password}=req.body
        Login(email,password,dbrepository,authService).then((response)=>{
            console.log(response,"login");
            res.json(response)

        }).catch((err)=>console.log(err))

    }


    const selectprofiledata=(req,res)=>{
        const Id = req.query.id;
        console.log(Id,"auth");
       
        Getprofile(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }


     const addfooditems = (req, res) => {
        

        const{Id,foodName,description,coverPhoto,price,preparationTime,extraItems}=req.body

            addfooddata(Id,foodName,description,coverPhoto,price,preparationTime,extraItems,dbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }


    const selectallfooddata=(req,res)=>{
        const Id = req.query.id;
        console.log(Id,"auth");
       
        Getallfood(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const getallresturant=(req,res)=>{
       
       
        Getallresturant(dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const searchfooditems=(req,res)=>{
        Searchfood(dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }


     const deletefooditem=(req,res)=>{
        const Id = req.query.id;

        console.log(Id,"delete");
       
       
        Deletefood(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const selectfooddata=(req,res)=>{
        const Id = req.query.id;
        console.log(Id,"auth");
       
        Getsinglefood(Id,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }

     const updatefooditems = (req, res) => {
        

        const{Id,resturantId,foodName,description,coverPhoto,price,preparationTime,extraItems}=req.body

            Editfooddata(Id,resturantId,foodName,description,coverPhoto,price,preparationTime,extraItems,dbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }


    const updaterestaurant = (req, res) => {
        const{Id,restaurantName,location,coverPhoto}=req.body

        console.log(Id,restaurantName,location,coverPhoto);


        Editrestaurant(Id,restaurantName,location,coverPhoto,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
          
        }).catch((err)=>console.log(err))



    }


 

    return{
        verifyemail,
        otpverification,
        createrestaurant,
        login,
        selectprofiledata,
        addfooditems,
        selectallfooddata,
        getallresturant,
        searchfooditems,
        deletefooditem,
        selectfooddata,
        updatefooditems,
        updaterestaurant
        
    }
}

export default restaurantController