
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('activities').del()
      .then(function () {
        // Inserts seed entries
        return knex('activities').insert([
          {
            id: 1,
            activity: 'London Eye',
            location:'SE12'
          },
          {
            id: 2, 
            activity: 'Tower of London',
            location: 'GU27'
          },
          {
            id: 3, 
            activity: 'Hyde Park',
            location: 'ST13'
          }
        ]);
      });
  };
  