const express = require('express');


const app = express();

const rootCall = (req, res) => res.send('I know how to open node...Yeee!');

app.get('/', rootCall)

app.listen(4200, () => console.log('Listening to port 4200'))