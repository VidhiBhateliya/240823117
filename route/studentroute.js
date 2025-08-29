// Simple Route :


// const express=require("express")

// const router=express.Router()

// const {
//          index,
//          show,
//          store,
//          update,
//          destroy,
//      }=require("../controller/studentcontroller.js")

//      router.get("/",index) // To Run this in postman url will be like this "http://localhost:80/student"

//      router.get("/show/:id",show) // To Run this in postman url will be like this "http://localhost:80/student/show/1"

//      router.post("/store",store) 
//     //   To Run this in postman url will be like this "http://localhost:80/student/store"
//     //   in postman -> body 
//     //   {
//     //     "name":"vidhu",
//     //     "city":"mithapur"
//     //   }

//     router.put("/update/:id",update) 
//     //   To Run this in postman url will be like this "http://localhost:80/student/update/1"
//     //   in postman -> body 
//     //   {
//     //     "name":"vidhu",
//     //     "city":"mithapur"
//     //   }


//     router.delete("/delete/:id",destroy)
//     //   To Run this in postman url will be like this "http://localhost:80/student/delete/1"


//     module.exports=router



// Validation Route

const express=require("express")
const res = require("express/lib/response")

const router=express.Router()

const studentcontroller=require("../controller/studentcontroller")

const{
    createValidator,
    updateValidator,
    validate

}=require("../validators/studentvalidator")


router.get("/index",studentcontroller.index)
router.get("/show/:id",studentcontroller.show)
router.post("/store",(req,res,next)=>{

    const result=validate(createValidator,req.body)

    if(!result.success)
    {
        return res.status(400).json({status:"error",errors:result.errors})
    }

    studentcontroller.store(req,res,next)
})

router.delete("/delete/:id",studentcontroller.destroy)
module.exports=router

//"in terminal first install joi command will be->npm install joi"
// "to tun this in postman"
// url:"http://localhost:80/student/store"

// {
//     "name":"sanju",
//     "city":"mithapur"
// }

// {
//     "name":"sanju",
//     "city":"mithapur"
// }


// error: "{
//     "status": "error",
//     "errors": [
//         {
//             "field": "name",
//             "message": "\"name\" length must be at least 3 characters long"
//         },
//         {
//             "field": "city",
//             "message": "\"city\" length must be at least 3 characters long"
//         }
//     ]
// }"


