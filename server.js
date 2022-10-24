const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const sdkData = fs.readFileSync('./public/sdks.json', 'utf-8');
const app = express();
const port = 3001;
