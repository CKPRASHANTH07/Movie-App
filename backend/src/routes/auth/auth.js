import express from 'express'
import jwt from 'jsonwebtoken'
import { Users } from '../../models/users.js'
import { signup_user } from '../../controllers/auth.js'
import { generateAccessToken } from '../../utils/create_token.js'

const auth = express.Router()



auth.post('/sign-up', async (req,res)=>{
    try {
        signup_user(req.body.username,req.body.password).then((msg)=>{
            msg.accesstoken=generateAccessToken(req.body.username)
            res.json(msg)
        }).catch((err)=>{
            res.status(404).json({"status":err.message})
        })
    }catch{
        res.status(404).json("error")
    }
})

export {auth}