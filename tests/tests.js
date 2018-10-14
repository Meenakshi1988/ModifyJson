const assert = require('chai').assert;
const fs = require('fs');
const inputFilePath = './input.json';
const outputFilePath = './output.json';

describe('Unit tests for modifying JSON data', function (){
    it('Check for existence of file', function (){
        assert(fs.existsSync(inputFilePath), true, "Error: Input file doesn't exist");
    });
    // verify whether input file is having json data
    it('verify the input file contains valid data', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            assert(JSON.stringify(response)).to.contain('Wipro', "Error: Input file doesn't fit the requirement");
        });
    });
    // verify json data is modified
    it('verify data is modified as per the requirement', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
			parsedData = JSON.parse(stringifiedData);
            assert(parsedData).to.contain('Wipro Ltd', "Error: Data isn't modified ");
        });
    });
    // Check whether modified data was written to the file
    it('Check whether modified data was written to the file', function (){
        fs.readFileSync(inputFilePath, 'utf8', function(response){
            let stringifiedData = JSON.stringify(response);
			stringifiedData = stringifiedData.replace('Wipro', 'Wipro Ltd');
            parsedData = JSON.parse(stringifiedData);
            fs.writeFileSync(outputFilePath, parsedData, 'utf8');
            assert(fs.existsSync(outputFilePath), true, "Error: Output file doesn't exist");
        });
    });
});