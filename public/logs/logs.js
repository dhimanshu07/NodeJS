
		getData();
		async function getData(){
			const response = await fetch('/api');
			const data = await response.json();
			console.log(data);

  			for (item of data){
			const root1 = document.createElement('div');
			const mood = document.createElement('div');
			const geo = document.createElement('div');
			const date = document.createElement('div');
			const image = document.createElement('img');

			mood.textContent = `mood : ${item.variable}`;
			geo.textContent = `Latitude : ${item.lat},Longitude : ${item.lon}`;
			const dateString = new Date(item.timestamp).toLocaleString();
			date.textContent = dateString;
			image.src = item.image64;

			root1.append(mood, geo, date, image);
			document.body.append(root1);
		}
	} 