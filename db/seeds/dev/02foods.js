exports.seed = function(knex, Promise) {
  return knex('foods').del()
    .then(() => {
      return Promise.all([
        knex('foods').insert([
          { id: 1, name: 'Orange', calories: 100 },
          { id: 2, name: 'Banana', calories: 150 },
          { id: 3, name: 'Apple', calories: 90 },
          { id: 4, name: 'Coffee', calories: 1 },
          { id: 5, name: 'Egg', calories: 80 },
          { id: 6, name: 'Cereal', calories: 200 },
          { id: 7, name: 'Flax', calories: 50 },
          { id: 8, name: 'MacNChz', calories: 300 },
          { id: 9, name: 'Edamame', calories: 25 },
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
