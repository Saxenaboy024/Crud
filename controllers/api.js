const express = require('express')
const router = express.Router()
const db = require('../model/connection')


router.post("/",(req,res) =>{
    const {name,email,phone,city} = req.body
    const user = {name,email,phone,city} 
    let sql = "INSERT INTO users SET ?"
    db.query(sql,user,(err,result) =>{
        if(err) console.log(err)
        res.json(result)
    })
 })
 router.get("/",(req,res) =>{
    let sql = "SELECT * FROM users";
    db.query(sql,(err,result) =>{
        if(err) console.log(err)
        res.json(result)
    })
 })

 router.get("/",(req,res) =>{
    let sql = "SELECT * FROM users WHERE id = "+parseInt(req.params.id);
    db.query(sql,(err,result) =>{
        if(err) console.log(err)
        else
        res.json(result)
 })
})

router.delete("/:id",(req,res) =>{
    let sql = "DELETE FROM users WHERE id ="+parseInt(req.params.id)
    db.query(sql,(err,result) =>{
        if(err) console.log(err)
        res.json(result)
    })
})
 
module.exports = router
