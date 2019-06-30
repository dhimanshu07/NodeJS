const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
  const data = request.body;
  console.log(request.body);	
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  console.log(database);
  response.json(data);
});


 
//database.insert({name: 'Himanshu', status: 'ok'});
//database.insert({name: 'Toshi', status:'good'});
app.get('/api', (request, response) =>{
	database.find({}, (err, data) => {
		if(err){
			response.end(); 
			return;
		} 
       response.json(data);
	});
});



/*const mymap = L.map('mymap').setView([lat, lon], 15);
          const attribution =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
          const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
          const tiles = L.tileLayer(tileUrl, { attribution });
          tiles.addTo(mymap);
          const marker = L.marker([lat, lon]).addTo(mymap);
        });*/