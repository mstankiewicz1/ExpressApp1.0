function usersRoutes() {

// app.get('/', (req, res) => {

//     console.log(req.cookies);

//     res.send('Strona Domowa');

// });


// app.post('/hello', (req, res) => {

//     const { name, surname } = req.body;

//     res.send(`Witaj ${name} ${surname}`);

// });

    // fetch('/hello', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name: 'Anna', 
    //         surname: 'Kowalska'
    //     }),
    //     headers: {
    //      'Content-Type': 'application/json'
    //     }
    // })

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

// app.get('/', (req, res) => {


//     res.send('<a href="/go_back">Cofnij</a>');

// });

// app.get('/google', (req, res) => {
//     // res.send('Zażółć gęślą jaźń');
//     // const str = 'Zażółć gęślą jaźń';
//     // const ar = str.split(' ');
    
//     // res.send(ar);
//     // res.send({
//     //     text: 'Hello, World',
//     //     isGood: true
//     // });
//     // res.json('Tekstem');
//     // res.location('https://google.com');
//     // res.sendStatus(302);
//     // res.redirect('https://google.com');
//     // res.redirect('..');
//     // res.redirect('back');
//     // res.redirect('back');
//     res.send('Google');
    
//     // res.write('Zażółć gęślą jaźń');
//     // res.end();
// });

// app.get('/', (req, res) => {

//     // const fileName = 'index.html';

//     // res.sendFile(fileName, {
//     //     root: path.join(__dirname, 'static'),
//     // });
// });

// app.get('/logo', (req, res) => {
//     // const fileName = 'plik.jpg';
//     const fileName =  path.join(__dirname, 'static/plik.jpg');

//     // res.sendFile(fileName, {
//     //     root: path.join(__dirname, 'static'),
//     //     // lastModified: false
//     // // });
//     // res.attachment(fileName, {
//     //     root: path.join(__dirname, 'static'),
//     //     // lastModified: false
//     // });
//     // res.end();
//     res.download(fileName, 'jakiś mój plik png', {

//     });
//         // lastModified: false
//     // });
//     // res.end();
// });

// app.get('/', (req, res) => {
   
//     res.send('Strona Główna');

// });

// app.get('/hi/:name', (req, res) => {
   
//     const { name } = req.params;

//     // const dt = new Date();
//     // dt.setDate(dt.getDate() + 7);

//     res.cookie('visitor_name', name, {
//         // expires: dt
//         maxAge: 5 * 60 * 1000,
//     });

//     res.send('Imie zapisano.');

// });

// app.get('/logout', (req, res) => {
   
//     res.clearCookie('visitor_name');

//     res.redirect('/');

// });
};

module.exports = usersRoutes;