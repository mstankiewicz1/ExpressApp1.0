const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000');
});

app.all('/', (req) => {
    // console.log('req.url', req.url);
    // console.log('req.originalUrl', req.originalUrl);
    // console.log('req.path', req.path);
    // console.log('req.protocol', req.protocol);
    // console.log('req.secure', req.secure);

    if(!req.secure) {
        console.log('protokół niezabezpieczony!');
    }

});

// app.get('/hi', () => {
//     console.log("Hi Word!");
// });