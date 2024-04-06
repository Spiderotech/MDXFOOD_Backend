

const orderServiceInf = (repository) => {

  const generateorderId=(orderid)=>repository.generateorderId(orderid)

    
  return {
    generateorderId

  }
}

export default orderServiceInf
