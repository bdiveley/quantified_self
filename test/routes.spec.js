const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');
const pry = require('pryjs')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('API Routes', () => {
  before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch(error => {
        throw error;
      });
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch(error => {
        throw error;
      });
  });

  describe('GET /api/v1/foods', () => {
   it('should return all of the foods', done => {
      chai.request(server)
        .get('/api/v1/foods')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(1);
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('Orange');
          response.body[0].should.have.property('calories');
          response.body[0].calories.should.equal(100);
          done();
        });
      });
    })

  describe('GET api/v1/foods/1', () => {
   it('should return one specific food', done => {
      chai.request(server)
        .get('/api/v1/foods/1')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(1);
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('Orange');
          response.body[0].should.have.property('calories');
          response.body[0].calories.should.equal(100);
          done();
        });
      });
    it('should return 404 if id does not exist', done => {
       chai.request(server)
         .get('/api/v1/foods/10')
         .end((err, response) => {
           response.should.have.status(404);
           done();
         });
      });
  });

  describe('PATCH /api/v1/foods/1', () => {
   it('should update an existing food', done => {
     chai.request(server)
       .patch('/api/v1/foods/1')
       .send({
         name: "Apple",
         calories: 200
       })
       .end((err, response) => {
         response.should.have.status(201);
         response.should.be.json;
         response.body.should.be.a('object');
         response.body.should.have.property('food');
         response.body.food.name.should.equal('Apple');
         response.body.food.calories.should.equal(200);
       });
         done();
     });
     it('should return 404 if datatypes incorrect', done => {
       chai.request(server)
         .patch('/api/v1/foods/10')
         .send({
           name: "Apple",
           calories: 200
         })
          .end((err, response) => {
            response.should.have.status(400);
          });
          done();
       });
   it('should return 422 if patch does not include all attributes', done => {
     chai.request(server)
       .patch('/api/v1/foods/1')
       .send({
         name: "Apple"
       })
        .end((err, response) => {
          response.should.have.status(422);
        });
        done();
     });
   });


  // describe('POST /api/v1/papers', () => {
  //  it('should create a new paper', done => {
  //    chai.request(server)
  //    // Notice the change in the verb
  //      .post('/api/v1/papers')
  //      // Here is the information sent in the body or the request
  //      //You can pass in the wrong datatype and test that sad path
  //      .send({
  //        title: 1,
  //        author: 'Amy'
  //      })
  //      .end((err, response) => {
  //        // Different status here
  //        response.should.have.status(201);
  //        response.body.should.be.a('object');
  //        response.body.should.have.property('id');
  //        done();
  //      });
  //  });

   // it('should not create a record with missing data', done => {
   //  chai.request(server)
   //    .post('/api/v1/papers')
   //    .send({
   //      title: 'Waterfall Wow' //missing author property
   //    })
   //    .end((err, response) => {
   //      response.should.have.status(422);
   //      response.body.error.should.equal(
   //        `Expected format: { title: <String>, author: <String> }. You're missing a "author" property.`
   //      );
   //      done();
   //    });
   //  });
//  });
});
