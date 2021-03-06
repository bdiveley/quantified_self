exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_foods RESTART IDENTITY CASCADE')
    .then(() => {
      return Promise.all([
        knex('meal_foods').insert([
          { date_id: 1, meal_id: 1, food_id: 1 },
          { date_id: 1, meal_id: 2, food_id: 2 },
          { date_id: 1, meal_id: 3, food_id: 3 },
          { date_id: 1, meal_id: 4, food_id: 4 },
          { date_id: 2, meal_id: 1, food_id: 5 },
          { date_id: 2, meal_id: 2, food_id: 6 },
          { date_id: 2, meal_id: 3, food_id: 7 },
          { date_id: 2, meal_id: 4, food_id: 8 },
          { date_id: 1, meal_id: 3, food_id: 9 }
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
