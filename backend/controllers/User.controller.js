import { generateToken } from "../config/utils.js";
import User from "../models/User.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { name, password, email, bio } = req.body;

  try {
    if (!name || !password || !email || !bio) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({ success: false, message: "Account already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      bio,
    });

    const token = generateToken(user._id);

    res.json({
      success: true,
      userData: user,
      token,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = generateToken(user._id);

    res.json({
      success: true,
      token,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


export const checkAuth = (req , res)=>{
    res.json({success : true , user : req.user });
}


