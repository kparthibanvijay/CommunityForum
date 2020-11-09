const { Expression } = require('@angular/compiler');
const express = require('express');
const app = new express();
const topicRoute = express.Router();

let Topic = require('../models/topic');

topicRoute.route('/create').post((req, res, next)=>{
  Topic.create(req.body, (error, data)=>{
    if(error){
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = topicRoute;

