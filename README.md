# Quantified Self

## Basic Overview

Quantified Self is a backend Express application that works in conjunction with a postgresql database.  The application delivers a variety of endpoints that help a user track their daily calories.

These are currently available endpoints:

* GET /api/v1/foods
* GET /api/v1/foods/:id
* POST /api/v1/foods
* PATCH /api/v1/foods/:id
* DELETE /api/v1/foods/:id
* GET /api/v1/meals
* GET /api/v1/meals/:meal_id/foods
* POST /api/v1/meals/:meal_id/foods/:id
* DELETE /api/v1/meals/:meal_id/foods/:food_id
* GET /api/v2/mealfoods
* GET /api/v2/mealsfoods/:id
* GET /api/v1/dates
* POST /api/v1/dates
* GET /api/v1/dates/meals
* GET /api/v1/dates/:day/meals

Quantified Self works in conjunction with a front-end Javascript application called Calorie Tracker:
* Github Repo to Frontend:  <https://github.com/mmbensalah/calorie_tracker>.
* Frontend Deployed Site:  <https://mmbensalah.github.io/calorie_tracker/>.

### Database Schema

![alt text](/assets/schema.png)

### Initial Setup

1. Clone this repository locally

  ```shell
  git clone git@github.com:bdiveley/quantified_self.git
  ```

2. Install the dependencies

  ```shell
  npm install
  ```

### Running the Server Locally

To see your code in action locally, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:3000/` to run your application.

### Running the Server in Production

This site is served from GitHub Pages in production.

 <https://damp-garden-70659.herokuapp.com/>.

### Built With

* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com/)
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://chaijs.com/)
* [TravisCI](https://travis-ci.com/)
* Knex 

### Developers

* Miriam Bensalah - <https://github.com/mmbensalah>
* Bailey Diveley - <https://github.com/bdiveley>

### Project Board

 <https://github.com/bdiveley/quantified_self/projects/1>.
