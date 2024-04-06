import Order from "../../models/orders/orderModel.js"
import mongoose from "mongoose";

const orderRepositoryImp = () => {


    const createorder = (orderDetails) => {
       
        const neworder = new Order({
            orderId:orderDetails?.getorderid(),
            restaurantId:orderDetails?.getrestaurantid(),
            userId:orderDetails?.getuserid(),
            items:orderDetails?.getitems(),
            totalPrice:orderDetails?.gettotalprice()
         
    
        })
        return neworder.save()
    
      }

      const getorderid =()=> Order.findOne({}, {}, { sort: { 'createdAt': -1 } });



      const pendingorder = async (userId) => {
        try {
            const orders = await Order.find({ userId: userId, status: { $in: ['pending', 'confirmed'] } }).populate('restaurantId').sort({ createdAt: -1 }).exec();
            return orders;
        } catch (error) {
            console.error('Error fetching pending orders:', error);
            throw error; 
        }
    };
    
    const completeorder = async (userId) => {
        try {
            const orders = await Order.find({ userId: userId, status: { $in: ['complete', 'cancelled'] } }).populate('restaurantId').sort({ createdAt: -1 }).exec();
            return orders;
        } catch (error) {
            console.error('Error fetching complete orders:', error);
            throw error; 
        }
    }


    const neworder = async (Id) => {
        try {
            const orders = await Order.find({ restaurantId:Id, status:'pending' }).populate('userId').sort({ createdAt: -1 }).exec();
            return orders;
        } catch (error) {
            console.error('Error fetching complete orders:', error);
            throw error; 
        }
    }



    const confirmorder = async (Id) => {
        try {
            const orders = await Order.find({ restaurantId:Id, status:'confirmed' }).populate('userId').sort({ createdAt: -1 }).exec();
            return orders;
        } catch (error) {
            console.error('Error fetching complete orders:', error);
            throw error; 
        }
    }


    const completeorderstauschange = async (Id) => {
        try {
            
            const orders =  await Order.findByIdAndUpdate(Id, { status: 'complete' }).populate('userId').sort({ createdAt: -1 }).exec();
            console.log('Order status updated to complete successfully');
            return orders;
            
        } catch (error) {
            console.error('Error updating order status to complete:', error);
            throw error;
        }
    };





    
    const confirmorderstauschange = async (Id) => {
        try {
            
            const orders =  await Order.findByIdAndUpdate(Id, { status: 'confirmed' }).populate('userId').exec();
            console.log('Order status updated to confirmed successfully');
            return orders;
            
        } catch (error) {
            console.error('Error updating order status to confirmed:', error);
            throw error;
        }
    };
    



    const cancelorder = async (Id) => {
        try {
           
            const orders =  await Order.findByIdAndUpdate(Id, { status: 'cancelled' }).populate('userId').exec();
            console.log('Order status updated to cancelled successfully');
            return orders;
           
        } catch (error) {
            console.error('Error updating order status to cancelled:', error);
            throw error;
        }
    };


    const completeorderrestaurant = async (userId) => {
        try {
            const orders = await Order.find({ restaurantId: userId, status: { $in: ['complete', 'cancelled'] } }).populate('userId').sort({ createdAt: -1 }).exec();
            return orders;
        } catch (error) {
            console.error('Error fetching complete orders:', error);
            throw error; 
        }
    }


    const completeordercount = async (Id) => {
        try {
            const orderCount = await Order.countDocuments({ restaurantId: Id });
            return orderCount;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }


    const pendingordercount = async (Id) => {
        try {
            const orderCount = await Order.countDocuments({ restaurantId:Id, status:'pending' })
            return orderCount;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }


    const ongoingordercount = async (Id) => {
        try {
            const orderCount = await Order.countDocuments({ restaurantId:Id, status:'confirmed' })
            return orderCount;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }


    const cancelordercount = async (Id) => {
        try {
            const orderCount = await Order.countDocuments({ restaurantId:Id, status:'cancelled' })
            return orderCount;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }
    const allcompleteordercount = async (Id) => {
        try {
            const orderCount = await Order.countDocuments({ restaurantId:Id, status:'complete' })
            return orderCount;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }


    const totalrevenue = async (Id) => {
        try {
            
            const completedOrders = await Order.find({ restaurantId: Id, status: 'complete' });
    
            
            let total = 0;
            completedOrders.forEach((order) => {
                total += order.totalPrice;
            });
            console.log(total,"hhhhhh");
    
            return total;
        } catch (error) {
            console.error('Error fetching complete order count:', error);
            throw error; 
        }
    }


    const calculateWeeklyRevenue = async (Id) => {
        try {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - 7); // 7 days ago
            const endDate = new Date(); // Current date
            
            const completedOrders = await Order.find({ 
                restaurantId: Id, 
                status: 'complete',
                createdAt: { $gte: startDate, $lte: endDate }
            });
    
            let total = 0;
            completedOrders.forEach((order) => {
                total += order.totalPrice;
            });
    
            console.log('Weekly Revenue:', total);
            return total;
        } catch (error) {
            console.error('Error calculating weekly revenue:', error);
            throw error;
        }
    }
    
    const calculateMonthlyRevenue = async (Id) => {
        try {
            const startDate = new Date();
            startDate.setMonth(startDate.getMonth() - 1); // 1 month ago
            const endDate = new Date(); // Current date
            
            const completedOrders = await Order.find({ 
                restaurantId: Id, 
                status: 'complete',
                createdAt: { $gte: startDate, $lte: endDate }
            });
    
            let total = 0;
            completedOrders.forEach((order) => {
                total += order.totalPrice;
            });
    
            console.log('Monthly Revenue:', total);
            return total;
        } catch (error) {
            console.error('Error calculating monthly revenue:', error);
            throw error;
        }
    }
    
    const calculateYearlyRevenue = async (Id) => {
        try {
            const startDate = new Date();
            startDate.setFullYear(startDate.getFullYear() - 1); // 1 year ago
            const endDate = new Date(); // Current date
            
            const completedOrders = await Order.find({ 
                restaurantId: Id, 
                status: 'complete',
                createdAt: { $gte: startDate, $lte: endDate }
            });
    
            let total = 0;
            completedOrders.forEach((order) => {
                total += order.totalPrice;
            });
    
            console.log('Yearly Revenue:', total);
            return total;
        } catch (error) {
            console.error('Error calculating yearly revenue:', error);
            throw error;
        }
    }


    const calculateDailyRevenue = async (Id) => {
        try {
            const startDate = new Date();
            startDate.setHours(0, 0, 0, 0); 
            const endDate = new Date();
            endDate.setHours(23, 59, 59, 999); 
    
            const completedOrders = await Order.find({ 
                restaurantId: Id, 
                status: 'complete',
                createdAt: { $gte: startDate, $lte: endDate }
            });
    
            let total = 0;
            completedOrders.forEach((order) => {
                total += order.totalPrice;
            });
    
            console.log('Daily Revenue:', total);
            return total;
        } catch (error) {
            console.error('Error calculating daily revenue:', error);
            throw error;
        }
    }
    

    const uniqueUserCount = async (Id) => {
        try {
            // Find the restaurant
            const restaurant = await Order.find({restaurantId:Id});
            if (!restaurant) {
                console.log('Restaurant not found');
                return 0;
            }

            console.log(restaurant,"plplplll;");
    
            // Perform aggregation on orders for the restaurant
            const uniqueUsers = await Order.aggregate([
                { $match: { restaurantId: restaurant._id } }, // Match orders for the specific restaurant
                { $group: { _id: "$userId" } }, // Group orders by userId
                { $group: { _id: null, count: { $sum: 1 } } } // Count the distinct users
            ]);
    
            console.log('Aggregation result:', uniqueUsers);
    
            if (uniqueUsers.length > 0) {
                const count = uniqueUsers[0].count;
                console.log('Unique User Count:', count);
                return count;
            } else {
                console.log('No unique users found for the restaurant.');
                return 0;
            }
        } catch (error) {
            console.error('Error fetching unique user count:', error);
            throw error; 
        }
    }
    
    
    
    
    
    
    



    
    
  

    return{
        createorder,
        getorderid,
        pendingorder,
        completeorder,
        confirmorder,
        neworder,
        completeorderstauschange,
        confirmorderstauschange,
        cancelorder,
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

export default orderRepositoryImp
