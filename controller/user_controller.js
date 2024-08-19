const UserService = require('../services/user_services');
const UserModel = require('../model/user_model');
exports.register = async(req,res,next)=>{
    try{
        const{email,password} = req.body;
        const successRes = await UserService.registerUser(email,password);
    res.json({status:true,success:"User registered successfully"});
    }
    catch(error)
    {
        throw error;
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {email, password} = req.body;
        const user = await UserService.checkUser(email);
        if(!user) {
            // Respond with a 400 status code for client-side errors
            return res.status(400).json({status: false, message: 'User does not exist.'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            // Respond with a specific message for invalid passwords
            return res.status(400).json({status: false, message: 'Invalid password. Please try again.'});
        }
    
        let tokenData = {_id: user._id, email: user.email}; 
        const token = await UserService.generateToken(tokenData, "secretKey", '1h');
        res.status(200).json({status: true, token: token});
    } catch(error) {
        // Consider using a more informative response for the client
        res.status(500).json({status: false, message: 'An error occurred on the server.'});
    }
}
