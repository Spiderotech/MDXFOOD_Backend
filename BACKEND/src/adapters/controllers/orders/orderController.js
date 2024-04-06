import Createorder from "../../../application/useCase/orders/Createorder.js"
import Getallcompleteorder from "../../../application/useCase/orders/Getallcompleteorder.js"
import Getallpendingorder from "../../../application/useCase/orders/Getallpendingorder.js"
import Getneworder from "../../../application/useCase/orders/Getneworder.js"
import Getconfirmorder from "../../../application/useCase/orders/Getconfirmorder.js"
import Confirmorder from "../../../application/useCase/orders/Confirmorder.js"
import Getcompleteorder from "../../../application/useCase/orders/Getcompleteorder.js"
import Completeorder from "../../../application/useCase/orders/Completeorder.js"
import Getallorderscount from "../../../application/useCase/orders/Getallorderscount.js"
import Getallpendingordercount from "../../../application/useCase/orders/Getallpendingordercount.js"
import Getallongoingordercount from "../../../application/useCase/orders/Getallongoingordercount.js"
import Cancelorder from "../../../application/useCase/orders/Cancelorder.js"
import Getallcancelordercount from "../../../application/useCase/orders/Getallcancelordercount.js"
import Getallcompleteordercount from "../../../application/useCase/orders/Getallcompleteordercount.js"
import Getotalrevenue from "../../../application/useCase/orders/Getotalrevenue.js"
import Getweeklyrevenue from "../../../application/useCase/orders/Getweeklyrevenue.js"
import Getmonthlyrevenue from "../../../application/useCase/orders/Getmonthlyrevenue.js"
import Getyearlyrevenue from "../../../application/useCase/orders/Getyearlyrevenue.js"
import Getdayrevenue from "../../../application/useCase/orders/Getdayrevenue.js"
import Gettotalusers from "../../../application/useCase/orders/Gettotalusers.js"



const orderController = (orderRepositoryInf, orderRepositoryImp, orderServiceInf, orderServiceImp) => {

  const dbrepository = orderRepositoryInf(orderRepositoryImp())
  const orderService = orderServiceInf(orderServiceImp())
  
  


  const createorder = (req, res) => {


    const { restaurantId, userId, items, totalPrice } = req.body

    Createorder(restaurantId, userId, items, totalPrice, dbrepository, orderService).then((response) => {

      res.json(response)
      


    }).catch((err) => console.log(err))


  }


  const getpendingorder = (req, res) => {

    const Id = req.query.id;



    Getallpendingorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))

  }



  const getcompleteorder = (req, res) => {

    const Id = req.query.id;



    Getallcompleteorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))

  }


  const getneworder = (req, res) => {

    const Id = req.query.id;



    Getneworder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



  }

  const getconfirmorder = (req, res) => {

    const Id = req.query.id;


    Getconfirmorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))





  }

  const confirmorder = (req, res) => {

    const Id = req.query.id;


    Confirmorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))





  }

  const cancelorder = (req, res) => {

    const Id = req.query.id;

    Cancelorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))





  }


  const completeorder = (req, res) => {

    const Id = req.query.id;

    Completeorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))





  }
  const getallcompleteorder = (req, res) => {

    const Id = req.query.id;



    Getcompleteorder(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))

  }

  const getallorderscount = (req, res) => {

    const Id = req.query.id;

    Getallorderscount(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getallpendingordercount = (req, res) => {

    const Id = req.query.id;

    Getallpendingordercount(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getallongoingordercount = (req, res) => {

    const Id = req.query.id;

    Getallongoingordercount(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getallcancelordercount = (req, res) => {

    const Id = req.query.id;

    Getallcancelordercount(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getallcompleteordercount = (req, res) => {

    const Id = req.query.id;

    Getallcompleteordercount(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const gettotalrevenue = (req, res) => {

    const Id = req.query.id;

    Getotalrevenue(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getweeklyrevenue = (req, res) => {

    const Id = req.query.id;

    Getweeklyrevenue(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getmonthlyrevenue = (req, res) => {

    const Id = req.query.id;

    Getmonthlyrevenue(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const getyearlyrevenue = (req, res) => {

    const Id = req.query.id;

    Getyearlyrevenue(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }
  const gettotalusers = (req, res) => {

    const Id = req.query.id;


    Gettotalusers(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



    

  }


  const getdayrevenue = (req, res) => {

    const Id = req.query.id;


    Getdayrevenue(Id, dbrepository).then((response) => {
      console.log(response);
      res.json(response)

    }).catch((err) => console.log(err))



  }


 
  





  return {
    createorder,
    getpendingorder,
    getcompleteorder,
    getneworder,
    getconfirmorder,
    confirmorder,
    cancelorder,
    completeorder,
    getallcompleteorder,
    getallorderscount,
    getallpendingordercount,
    getallongoingordercount,
    getallcancelordercount,
    getallcompleteordercount,
    gettotalrevenue,
    getweeklyrevenue,
    getmonthlyrevenue,
    getyearlyrevenue,
    gettotalusers,
    getdayrevenue

  }
}

export default orderController
