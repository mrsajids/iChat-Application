const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("yes server is ready ;)")
})

module.exports=router;