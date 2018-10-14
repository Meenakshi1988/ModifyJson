const fs = require('fs');
if(fs.existsSync('./input.json')){
	fs.readFile('./input.json', 'utf8', function(err, response){
		console.log(`Contents of the input : \n${response}`);
		let stringifiedData = JSON.stringify(response);
		stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
		parsedData = JSON.parse(stringifiedData);
		try {
			console.log(`Writing the modified data to output.json...`);
			fs.writeFileSync('./output.json', parsedData, 'utf8');
		} catch (err) {
			console.log(`Error: Failed to write data to output.json`);
		}
	});
} else {
	console.log(`Error: Make sure that file you are trying to read exists`);
}