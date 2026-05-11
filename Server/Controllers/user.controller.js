import userModel from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register user

export const registerUser = async (req, res) => {
    const {name,email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }   
        const hashedPassword = await bcrypt.hash(password, 10);

        const role;

        if(email === process.env.ADMIN_EMAIL){
            role = "admin";
        }

        const newUser = new userModel({name,email,password:hashedPassword, role});
        await newUser.save();
        res.status(201).json({message:"User registered successfully"}); 
    } catch (error) {
        res.status(500).json({message:error.message});
        console.log(error);
    }
}


//login user

export const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"invalid credentials"});
        }
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"invalid credentials"});
        }
        //generate token
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"1d"});
        res.cookie("token", token, {httpOnly:true});
        res.status(200).json({message:"User logged in successfully", token});
    } catch (error) {
        res.status(500).json({message:error.message});
        console.log(error);
    }   
}

//get user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User profile retrieved successfully", userData:user});
    } catch (error) {
        res.status(500).json({message:error.message});
        console.log(error);
    }
}