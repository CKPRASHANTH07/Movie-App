import mongoose from "mongoose";

const users=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,

    },
    password:{
        type:String,
        required:true,
    },
    create_date: {
        type: Date,
        default: Date.now,
      }
})

const playlists=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,

    },
    name_of_the_playlist:{
        type:String,
        required:true,
    },
    movies: {
        required:true,
        type:Object
      },
    create_date: {
        type: Date,
        default: Date.now,
      }
})

const Users=mongoose.model('Users',users);
const Playlists=mongoose.model('Playlists',playlists);


export  {Users,Playlists};