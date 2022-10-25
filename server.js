const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const sdkData = fs.readFileSync('./public/sdks.json', 'utf-8');
const port = process.env.PORT || 3001;
const app = express();
const parseSdkData = JSON.parse(sdkData);
app.use(bodyParser.json());
app.use(express.static('build'));

app.get('/', (_, res) => {
  res.sendFile('build/index.html', { root: __dirname });
});

app.get('/api/tags', (_, res) => {
  const tags = parseSdkData.filter(item => !!item.tags).map(el => el.tags).flat();
  const uniqTags = ['all', ...new Set(tags)];
  const tagsList = JSON.stringify(uniqTags);
  res.end(tagsList);
});
app.post('/api/list', (req, res) => {
  const filterValue = req.body.filter;
  if (filterValue === 'all') {
    res.end(sdkData);
  } else {
    const filteredList = parseSdkData?.filter(item => !!item?.tags?.length
      && item?.tags?.some(elem => elem.toLowerCase().includes(filterValue.toLowerCase())));
    const list = JSON.stringify(filteredList);
    res.end(list);
  }
});

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
