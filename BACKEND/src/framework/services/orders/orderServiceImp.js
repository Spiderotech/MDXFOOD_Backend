

const orderServiceImp = () => {


  const generateorderId=(orderid)=>{

    console.log(orderid);


    const numericPart = parseInt(orderid.substr(3)); 
    
    const newNumericPart = numericPart + 1;

   
    const newOrderId = "MDX" + ("00000" + newNumericPart).slice(-6);

    console.log(newOrderId, "service");
    return newOrderId;
    

}



  return {
    generateorderId
    
  }
}

export default orderServiceImp
