exports.seed = function(knex, Promise) {
  return knex('dates').del()
    .then(() => {
      return Promise.all([
        knex('dates').insert([
          { id: 1, day: '2019-01-01' },
          { id: 2, day: '2019-01-02' },
          { id: 3, day: '2019-01-03' },
          { id: 4, day: '2019-01-04' }
        ])
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
