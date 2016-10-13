const express = require('express'),
	pug = require('pug'),
	app = express();

app.set('views', `${__dirname}/app/views`);
app.engine('html', pug.render);
app.set('view engine', 'pug');
app.use( express.static( `${__dirname}/assets` ) );

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000, () => {
	console.log('Server running -> http://localhost:3000');
});
