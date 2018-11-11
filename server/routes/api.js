const express = require("express");
const router = express.Router();
const mongoose= require('mongoose');
const Video = require('../video');

const db="write your datbase url";
mongoose.Promise = global.Promise;
mongoose.connect(db,{ useNewUrlParser: true }, function(err){
    if(err){
        console.log('Error'+ err);
    }
});

mongoose.set('debug', true);

router.get('/videos',function(req,res){
    console.log('Get request for all videos');
    //mongoose gave find method
    Video.find({})
    .exec(function(err,videos){
        if(err){
        console.log('Error retrieving videos');
        }
        else{
            res.json(videos);
        }
    });
});

router.get('/videos/:id',function(req,res){
    console.log('Get request for single videos');

    //mongoose gave find method
    Video.findById({_id: req.params.id})
    .exec(function(err,video){
        if(err){
        console.log('Error retrieving videos');
        }
        else{
            res.json(video);
        }
    });
});

router.post('/videos', function(req,res){
    console.log('Post a video');
    console.log("bodyof post request"+req.body.title);    
    //creating newVideo of model Video
    var newVideo= new Video();
   // newVideo._id= new mongoose.Types.ObjectId();
    newVideo.title=req.body.title;
    newVideo.url= req.body.url;
    newVideo.description= req.body.description;
    newVideo.save(function(err){
              if(err){
            console.log('Error saving video');
        } 
    });
   
        res.json("video posted"); 
   
});

router.put('/videos/:id',function(req,res){
  console.log('update avideo from api');
  console.log("title"+req.body.url);
  Video.findByIdAndUpdate({_id:req.params.id},req.body, { new : true},
    function(err,insertedVideo){
    if(err){
  console.log('Error saving video');
} else{
 res.json(insertedVideo); 
}
});
});

router.delete('/videos/:id', function(req,res){
    console.log("deleting in api"+ req.params.id);
     Video.findByIdAndRemove( {_id:req.params.id}).then((data)=>
     { res.send(data);
     }); 
   });
   
 module.exports = router;
