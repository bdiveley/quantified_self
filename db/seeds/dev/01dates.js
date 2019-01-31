exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE dates RESTART IDENTITY CASCADE')

    .then(() => {
      return Promise.all([
        knex('dates').insert([
          { day: '2019-01-01' },
          { day: '2019-01-02' },
          { day: '2019-01-03' },
          { day: '2019-01-04' }
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
