const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); 


//Register
router.post('/register', async (req, res)=> {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async ( req, res) => {
    try {
        const user  = await User.findOne({usernaem : req.body.username})
        !user && res.status(400).json("Wrong credentials!");
        
        const validated = await bcrypt.compare(req.body.password, user.password);
        //bcrypt.compare(data, encrpted data in DB)
        //automatically encrypted data and compare with the encrypted data in DB. 
        !validated && res.status(400).json("Wrong credentials!");

        const {password, ...others } = user._doc; //bring data except password for security reasons
        res.status(200).json(others);
        //res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;