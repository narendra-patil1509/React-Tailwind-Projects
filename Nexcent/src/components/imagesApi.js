import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-images-api.p.rapidapi.com/v2/cat/1',
  headers: {
    'x-rapidapi-key': '39b3c578ffmshb5caeefaeec3dabp15c0bcjsn154cb53bbf0d',
    'x-rapidapi-host': 'free-images-api.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



const url = 'https://free-images-api.p.rapidapi.com/v2/cat/1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '39b3c578ffmshb5caeefaeec3dabp15c0bcjsn154cb53bbf0d',
		'x-rapidapi-host': 'free-images-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}