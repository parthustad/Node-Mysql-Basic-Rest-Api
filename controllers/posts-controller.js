const postsModel = require('../models/posts-models')

const postsController = {}

postsController.getAll = async () => {

    var data = {}
    var status = 200
    
    try {
       data = await postsModel.getAll()
    } catch (error) {
        data = error.sqlMessage 
        status = 500
    }

   return  {   
    'status' : status,
    'data' : data
   }

}


postsController.getByID = async (req) => {

    var data = {}
    var status = 200
    
    try {
       data = await postsModel.getByID(req.params.id)
    } catch (error) {
        data = error.sqlMessage 
        status = 500
    }

   return  {
    'status' : status,
    'data' : data
   
   }

}



postsController.deleteByID = async (req) => {

    var data = {}
    var status = 200
    
    try {
       data = await postsModel.deleteByID(req.params.id)
    } catch (error) {
        data = error.sqlMessage 
        status = 500
    }

   return  {
    'status' : status,
    'data' : data
   
   }

}


postsController.add = async (req) => {

    var data = {}
    var status = 200
    
  
    try {
       var res = await postsModel.add(req.body)
       data = await postsModel.getByID(res.insertId)
       

    } catch (error) {
        data = error.sqlMessage 
        status = 500
    }

   return  {
    'status' : status,
    'data' : data
   
   }

}





postsController.edit = async (req) => {

    var data = {}
    var status = 200
    
  
    try {
       var res = await postsModel.edit(req.params.id,req.body)

       if(res.affectedRows == 1){
        data = await postsModel.getByID(req.params.id)
       }
         
       

    } catch (error) {
        data = error.sqlMessage 
        status = 500
    }

   return  {
    'status' : status,
    'data' : data
   
   }

}


module.exports = postsController