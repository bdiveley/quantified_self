exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE')

    .then(() => {
      return Promise.all([
        knex('foods').insert([
          { name: 'Orange', calories: 100 },
          { name: 'Banana', calories: 150 },
          { name: 'Apple', calories: 90 },
          { name: 'Coffee', calories: 1 },
          { name: 'Egg', calories: 80 },
          { name: 'Cereal', calories: 200 },
          { name: 'Flax', calories: 50 },
          { name: 'MacNChz', calories: 300 },
          { name: 'Edamame', calories: 25 },
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
