import userModel from "../models/userModel.js"


//add items to user cart
const addToCart = async (req,res) =>{

     try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added To Cart"});
     } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
     }


}

//remove items from user cart
const removeFromCart = async (req,res) =>{


    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -=1;

        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data
const getCart = async (req, res) => {
    try {
        // Retrieve the user's data from the database
        const userData = await userModel.findById(req.body.userId);

        // Check if the user data is null
        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Retrieve the user's cart data from the user's data
        const cartData = userData.cartData;

        // Check if the cartData is null or undefined
        if (!cartData) {
            return res.status(404).json({ success: false, message: 'Cart data not found for the user' });
        }

        // Return the user's cart data
        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export {addToCart,removeFromCart,getCart}