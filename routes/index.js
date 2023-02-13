const express = require('express');
const router = express.Router();

const MoviesModel= require ("../models/Movie.model.js");
const { route } = require ('../app.js');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get("/movies", (req,res,next)=>{
    MoviesModel.find()
    .then((response)=>{
        console.log(response)
        res.render("movies.hbs" , {
            allMovies: response
        })
    })
    .catch((error)=>{
        next (error)
    })


    router.get("/movies/:moviesById",(req,res,next)=>{
        const{ moviesById } = req.params
        
        MoviesModel.findById( moviesById )
        .then((response)=>{
            // console.log(response)
            res.render("moviesById.hbs",{
                moviesID : response
            })
        })
        .catch((err)=>{
            next (err)
        })
    })
    
    
    
})
module.exports = router;
