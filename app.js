const express = require ('express');
const path = require ('path');

const publicPath = path.join (__dirname, './public');

const app = express();

app.use (express.static(publicPath));

app.get ('/', (req, res) => {
res.sendFile (path.join(__dirname, 'views/home.html'));
});


app.get ('/register', (req, res) => {
    res.sendFile (path.resolve(__dirname, 'views/register.html'));
    });


const port = process.env.PORT || 3001;
app.listen (port, () => console.log(`servidor corriendo en el puerto $(port)`));



