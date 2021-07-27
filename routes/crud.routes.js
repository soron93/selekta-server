const express = require('express')
const router = express.Router()

let CrudModel = require('../models/Crud.model')

// NOTE: All your API routes will start from /api 

// will handle all GET requests to http:localhost:5005/api/crud
router.get('/crud', (req, res) => {
     CrudModel.find()
          .then((todos) => {
               res.status(200).json(todos)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

// will handle all POST requests to http:localhost:5005/api/create

router.post('/create', (req, res) => {  
    const {name, description, completed, image} = req.body;
    console.log(req.body)
    CrudModel.create({image:image, name: name, description: description, completed: completed})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/crud/:crudId

router.get('/crud/:crudId', (req, res) => {
    CrudModel.findById(req.params.crudId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

// will handle all DELETE requests to http:localhost:5005/api/crud/:id
router.delete('/crud/:id', (req, res) => {
    CrudModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all PATCH requests to http:localhost:5005/api/crud/:id
router.patch('/crud/:id', (req, res) => {
    let id = req.params.id
    const {name, description, completed} = req.body;
    CrudModel.findByIdAndUpdate(id, {$set: {name: name, description: description, completed: completed}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;