'use strict'

const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const fs = require('fs')
const marked = require('marked')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/', ( req, res ) => {

  const promisePool = [
    new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/requirements.md`, 'utf8', ( err, data ) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(marked(data.toString()));
      })
    }),
    new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/styles.css`, 'utf8', ( err, data ) => {
        if (err) {
          console.log(err);
          reject(err);
          return;
        }
        resolve(data.toString());
      })
    })
  ]

  Promise.all(promisePool).then(([ markdown, style ]) => {
    res.render('requirements', { markdown, style });
  })
})

app.get('/*', ( req, res ) => {
  const buttonsArray = Array.from({
    length: getRandomInt(2, 3)
  })

  const buttons = [].concat(
    buttonsArray.map(_ => getRandomInt(5, 50)),
    buttonsArray.map(_ => getRandomInt(-5, -50))
  )

  const bars = Array.from({
    length: getRandomInt(2, 5)
  }).map(_ => getRandomInt(10, 90))

  res.json({
    buttons,
    bars,
    limit: Math.ceil(getRandomInt(100, 225) / 10) * 10
  })
})

const port = process.env.PORT || 8080;

app.listen(port)

console.log(`Running on port ${port}`)
