exports.seed = function(knex, Promise) {
  return knex('meals').del()
    .then(() => {
      return Promise.all([
        knex('meals').insert([
          { id: 1, name: 'Breakfast' },
          { id: 2, name: 'Lunch' },
          { id: 3, name: 'Dinner' },
          { id: 4, name: 'Snack' }
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
