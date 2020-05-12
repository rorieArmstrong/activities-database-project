let knex=require('./knex.js');


function Activities() {
    return knex('activities');
};
function getAll() {
    return Activities().select();
  }
  
  function getSingle(activityId) {
    return Activities().where('id', parseInt(activityId)).first();
  }
  
  function add(activity) {
    return Activities().insert(activity, 'id');
  }
  
  function update(activityID, updates) {
    return Activities().where('id', parseInt(activityID)).update(updates);
  }
  
  function deleteItem(activityID) {
    return Activities().where('id', parseInt(activityID)).del();
  }
  
  module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add,
    update: update,
    deleteItem: deleteItem
  };

