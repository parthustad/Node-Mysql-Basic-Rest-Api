const express = require("express")
const routes = express.Router()
const postsController = require('../controllers/posts-controller')
// Get all posts
routes.get('/',(req,res) => {

    postsController.getAll().then( (response) => {
        res.status(response.status).json(response)
    } ).catch((err) => {
        res.status(err.status).json(err)
    })

  
})

// Get post by ID
routes.get('/:id',(req,res) => {

    postsController.getByID(req).then( (response) => {
        res.status(response.status).json(response)
    } ).catch((err) => {
        res.status(err.status).json(err)
    })
})

// Update post by ID
routes.put('/:id',(req,res) => {

    
    postsController.edit(req).then( (response) => {
        res.status(response.status).json(response)
    } ).catch((err) => {
        res.status(err.status).json(err)
    })


})


//Delete post by ID
routes.delete('/:id',(req,res) => {

    postsController.deleteByID(req).then( (response) => {
        res.status(response.status).json(response)
    } ).catch((err) => {
        res.status(err.status).json(err)
    })
})

//Create post
routes.post('/',(req,res) => {
    
    
    postsController.add(req).then( (response) => {
        res.status(response.status).json(response)
    } ).catch((err) => {
        res.status(err.status).json(err)
    })
})

module.exports = routes