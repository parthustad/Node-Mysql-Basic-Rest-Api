const connection = require("../connection")
const moment = require("moment")

const postsModel = {}

postsModel.getAll = () => {
    return new Promise( (resolve,reject) => {

        connection.query("select * from posts", (err,rows) => {

            if(err){
                reject(err)
            }else{
                resolve(rows)
            } 
            //Query ends
        })
        //Promise ends
    })    
    // Get all method ends
}


postsModel.getByID = (id) => {
    return new Promise( (resolve,reject) => {

        let bindParams = [id]
        connection.query("select * from posts where id=?", bindParams, (err,rows) => {

            if(err){
                reject(err)
            }else{
                resolve(rows)
            } 
            //Query ends
        })
        //Promise ends
    })    
    // Get By ID method ends
}
  



postsModel.deleteByID = (id) => {
    return new Promise( (resolve,reject) => {

        let bindParams = [id]
        connection.query("delete from posts where id=?", bindParams, (err,rows) => {

            if(err){
                reject(err)
            }else{
                resolve(rows)
            } 
            //Query ends
        })
        //Promise ends
    })    
    // Get By ID method ends
}
  

postsModel.add = (body) => {
    return new Promise( (resolve,reject) => {
        let datetime = moment().format( 'YYYY-MM-DD  HH:mm:ss.000' );
  
        let bindParams = [body.title, body.content, datetime, datetime ]
        connection.query("insert into  posts (title,content,created_at,updated_at) values (?,?,?,?)", bindParams, (err,rows) => {

            if(err){
                reject(err)
            }else{
                resolve(rows)
            } 
      
            //Query ends
        })
        //Promise ends
    })    
    // Get By ID method ends
}


postsModel.edit = (id,body) => {
    return new Promise( (resolve,reject) => {
        let datetime = moment().format( 'YYYY-MM-DD  HH:mm:ss.000' );
   
        let bindParams = [body.title, body.content, datetime,id ]
        connection.query("update posts set title=?, content=?, updated_at=? where id = ? ",
         bindParams, (err,rows) => {

            if(err){
                reject(err)
            }else{
                resolve(rows)
            } 
         
            //Query ends
        })
        //Promise ends
    })    
    // Get By ID method ends
}


module.exports = postsModel