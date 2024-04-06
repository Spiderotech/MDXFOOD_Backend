

const orderRepositoryInf = (repository) => {

    const createorder=(orderDetails)=>repository.createorder(orderDetails);
    const getorderid=()=>repository.getorderid();
    const pendingorder=(Id)=>repository.pendingorder(Id)
    const completeorder=(Id)=>repository.completeorder(Id)
    const neworder=(Id)=>repository.neworder(Id)
    const confirmorder=(Id)=>repository.confirmorder(Id)
    const completeorderstauschange=(Id)=>repository.completeorderstauschange(Id)
    const confirmorderstauschange=(Id)=>repository.confirmorderstauschange(Id)
    const cancelorder=(Id)=>repository.cancelorder(Id)
    const completeorderrestaurant=(Id)=>repository.completeorderrestaurant(Id)
    const completeordercount=(Id)=>repository.completeordercount(Id)
    const pendingordercount=(Id)=>repository.pendingordercount(Id)
    const ongoingordercount=(Id)=>repository.ongoingordercount(Id)
    const cancelordercount=(Id)=>repository.cancelordercount(Id)
    const allcompleteordercount=(Id)=>repository.allcompleteordercount(Id)
    const totalrevenue=(Id)=>repository.totalrevenue(Id)
    const calculateWeeklyRevenue=(Id)=>repository.calculateWeeklyRevenue(Id)
    const calculateMonthlyRevenue=(Id)=>repository.calculateMonthlyRevenue(Id)
    const calculateYearlyRevenue=(Id)=>repository.calculateYearlyRevenue(Id)
    const calculateDailyRevenue=(Id)=>repository.calculateDailyRevenue(Id)
    const uniqueUserCount=(Id)=>repository.uniqueUserCount(Id)



  return {
    createorder,
    getorderid,
    completeorder,
    pendingorder,
    neworder,
    confirmorder,
    cancelorder,
    completeorderstauschange,
    confirmorderstauschange,
    completeorderrestaurant,
    completeordercount,
    pendingordercount,
    ongoingordercount,
    cancelordercount,
    allcompleteordercount,
    totalrevenue,
    calculateWeeklyRevenue,
    calculateMonthlyRevenue,
    calculateYearlyRevenue,
    calculateDailyRevenue,
    uniqueUserCount
    

  }
}

export default orderRepositoryInf
