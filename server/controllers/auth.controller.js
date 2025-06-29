import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
  try {

    const {
      name,
      email,
      password,
      photoUrl,
    } = req.body;


    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res.status(400).json({ error: "Username or email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      photoUrl
    });

    // Save user to database
    await newUser.save();

    // Generate JWT token and set cookie
    generateTokenAndSetCookie(newUser._id, res);

    // Respond with success message
    res.status(201).json(newUser._id);
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); 
    
    // Check if user exists
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Generate JWT token and set cookie
    generateTokenAndSetCookie(user._id, res);
    // Respond with user data
    res.status(200).json({
      _id: user._id,
      email: user.email,
      photoUrl:user.photoUrl
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


