const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// GET all activities
router.get('/all', function(req, res, next) {
   db.getAll()
   .then((activities) => {
        res.status(200).json(activities);
   }).catch((error) => {
       next(error);
   })
})

// GET a single activity by id
router.get('/:id', (req, res, next) => {
    db.getSingle(req.params.id)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// GET a the first X activities
router.get('/select/:X', (req, res, next) => {
  db.get(req.params.X)
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// add activity 
router.post('/activity', (req, res, next) => {
    db.add(req.body)
    .then(function(activityID) {
      console.log('POSTED')
      const data = db.getSingle(activityID);
      return data;
    })
    .then((show) => {
      res.json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
//   update activity 
  router.put('/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
      return res.status(422).json({
        error: 'You cannot update the id field'
      });
    }
    db.update(req.params.id, req.body)
    .then(function() {
      return db.getSingle(req.params.id);
    })
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
// delete activity 
  router.delete('/:id', function(req, res, next) {
    db.getSingle(req.params.id)
    .then(function(show) {
      db.deleteItem(req.params.id)
      .then(function() {
        res.status(200).json(show);
      })
      .catch(function(error) {
        next(error);
      });
    }).catch(function(error) {
      next(error);
    });
  });

module.exports = router;