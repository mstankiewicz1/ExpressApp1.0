const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000');
});

// app.get('/hello/new-user', (req) => {

//     console.log('dodawanie nowego użytkownika');

// });

// app.get('/hello/:name', (req) => {

//     console.log('Hello ' + req.params.name);

// });

// app.get('/article/:id/:title?', (req) => {
//     console.log(req.params);
// });



// app.get('/', (req) => {

//     console.log('Spis ludzi');

//     // const { name, surname } = req.query;

//     // console.log("Hello " + name + ' ' + surname);
//     // console.log(req.get('Referer'));

//     // console.log('req.url', req.url);
//     // console.log('req.originalUrl', req.originalUrl);
//     // console.log('req.path', req.path);
//     // console.log('req.protocol', req.protocol);
//     // console.log('req.secure', req.secure);

//     // if(!req.secure) {
//     //     console.log('protokół niezabezpieczony!');
//     // }

// });

// app.get('/:id', (req) => {
//     console.log('Informacja szczegółowa na temat osoby o id ' + req.params.id);
// });



// // app.post('/', (req) => {
// //     console.log('dodawanie nowej osoby');
// // });

// app.patch('/1', (req) => {
//     console.log('aktualizacje osoby o id ' + req.params.id);
// });

// app.delete('/1', (req) => {
//     console.log('usuwanie osoby o id ' + req.params.id);
// });

// app.get('/hi', () => {
//     console.log("Hi Word!");
// });

app.get('/', (req, res) => {


    res.send('<a href="/go_back">Cofnij</a>');

});

app.get('/google', (req, res) => {
    // res.send('Zażółć gęślą jaźń');
    // const str = 'Zażółć gęślą jaźń';
    // const ar = str.split(' ');
    
    // res.send(ar);
    // res.send({
    //     text: 'Hello, World',
    //     isGood: true
    // });
    // res.json('Tekstem');
    // res.location('https://google.com');
    // res.sendStatus(302);
    // res.redirect('https://google.com');
    // res.redirect('..');
    // res.redirect('back');
    // res.redirect('back');
    res.send('Google');
    
    // res.write('Zażółć gęślą jaźń');
    // res.end();
});