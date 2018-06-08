const express = require('express');
const app = express();

const { HLTV } = require('hltv')
/*
const HHLTV = require('hltv-api');
*/
const myHLTV = HLTV.createInstance({hltvUrl: 'https://translate.google.com/translate?hl=en&sl=da&tl=en&u=hltv.org'})

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  HHLTV.getNews(news => res.json(news));
});

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
  //res.json({id})
  HLTV.getMatch({id: id}).then(match => res.json(match));
});

/*
app.get('/results1', (req, res) => {
  HHLTV.getResults(results => res.json(results));
});

app.get('/:matchId(*)', (req, res) => {
  const { matchId } = req.params;
  HHLTV.getMatches(matchId, (stats) => res.json(stats));
});

app.get('/:matchId(*)', function(req, res) {
  HHLTV.getMatches(matchId, function(stats) {
    return res.json(stats);
  });
});



app.get('/results', (req, res) => {
  HHLTV.getResults(results => res.json(results));
});

HLTV.getMatches().then((res) => {
  //console.log(JSON.stringify(res));
  var util = require('util');
  console.log(util.inspect(res));
});

HLTV.getMatches().then((res) => {
  HLTV.getMatches(matches => res.json(matches));
});

HLTV.getMatches().then((res) => {
 // console.log(JSON.stringify(res));

 res.length();
  
});

HLTV.getMatches().then(data => { console.log(JSON.stringify(data)); });

myHLTV.getMatch({id: 2306295}).then(res => {
  console.log(res);
});

/*


HLTV.getMatches().then((res) => {
    getMatches(matches => res.join(matches));
});

  
  app.get('/results', (req, res) => {
    getResults(results => res.json(results));
  });
  
  app.get('/:matchId(*)', (req, res) => {
    const { matchId } = req.params;
    getMatches(matchId, (stats) => res.json(stats));
  });
  */
  const PORT = 3000;
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
  });