exports.seed = function(knex, Promise) {
  return knex('foods').del()
    .then(() => {
      return Promise.all([
        knex('foods').insert({
          name: 'Orange', calories: 100
        }, 'id')
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
