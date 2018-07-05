const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const { HLTV } = require('hltv')

//const HHLTV = require('hltv-api');

const myHLTV = HLTV.createInstance({hltvUrl: 'https://translate.google.com/translate?hl=en&sl=da&tl=en&u=hltv.org'})

const cors = require('cors')

var corsOptions = {
    origin: 'https://eesports-6efa3.firebaseapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

var JSONItems = [];

app.use(cors(corsOptions))
/*
app.get('/', (req, res) => {
  HHLTV.getNews(news => res.json(news));
});
*/
app.get('/matches', (req, res) => {
  HLTV.getMatches().then(matches => res.json(matches));
});

app.get('/results', (req, res) => {
  HLTV.getResults().then(results => res.json(results));
});

app.get('/streams', (req, res) => {
  HLTV.getStreams().then(streams => res.json(streams));
});

app.get('/ranking', (req, res) => {
  HLTV.getTeamRanking().then(ranking => res.json(ranking));
});

app.get('/match/:id', (req, res) => {
  const id = req.params.id;
  HLTV.getMatch({id: id}).then(match => res.json(match));
});

app.get('/team/:id', (req, res) => {
  const id = req.params.id;
  HLTV.getTeam({id: id}).then(team => res.json(team));
});

/* app.get('/', function(request, response){
  respoonse.render('index');
} */
/*
  */
  
  app.listen(port, () => {
    console.log(`Listening on port...,${port}`); // eslint-disable-line no-console
  });
/* 
  const PORT = 3000;   LOCALHOST
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`); 
  }); */