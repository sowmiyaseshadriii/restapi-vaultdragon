const User=require('../models/user');



module.exports={
         
    index: async(req,res,next)=>{
            const users=await User.find({});  
            res.status(200).json(users);        
    },    
    newUser: async(req,res,next)=>{
            //console.log(req.value);
            const newUser=new User(req.value.body);
            const user=await newUser.save();
            res.status(201).json(user);     
    },
    getUser: async(req,res,next)=>{
        const  { key }=req.value.params;
        console.log(key);
        const user=await User.findOne({
            key: req.params.key},function(err,obj){
             console.log(obj);                           
            });          
        res.status(200).json(user); 
        },
    replaceUser: async(req,res,next)=>{
        const {key}=req.value.params;
        const newUser=req.value.body;       
        const result=await User.findOneAndUpdate({key: req.params.key
        }, newUser,( error, obj )=>{
           if(error){
               console.error('Errorrr');
           }
           console.log(obj);  
        });
        res.status(200).json(result); 
    },
    updateUser: async(req,res,next)=>{
        const key=req.value.params;
        const newUser=req.value.body;       
        const result=await User.findOneAndUpdate({key: req.params.key
        }, newUser,( error, obj )=>{
           if(error){
               console.error('Errorrr');
           }
           console.log(obj);  
        });
        res.status(200).json(result); 
    },
    getTimeStampUser: async(req,res,next)=>{
        const query = req.query.timeStamp;
        console.log(query);
    }
};