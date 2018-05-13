const express = require('express');
const app = express();

const { HLTV } = require('hltv')
const myHLTV = HLTV.createInstance({hltvUrl: 'https://translate.google.com/translate?hl=en&sl=da&tl=en&u=hltv.org'})

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
app.use(cors(corsOptions))



myHLTV.getMatches().then((res) => {
  myHLTV.getMatches().then(data => { console.log(JSON.stringify(data)); });
});
myHLTV.getMatch({id: 2306295}).then(res => {
  console.log(res);
});

/*


HLTV.getMatches().then((res) => {
    getMatches(matches => res.join(matches));
});

app.get('/', (req, res) => {
    getNews(news => res.json(news));
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