// Este script lee un archivo tsv con una lista de libros
// crea otro archivo con los que no tienen número de páginas
var fs = require('fs');
var srcArr = [];

//read haystack
var sourceReader = require('readline').createInterface({
  input: require('fs').createReadStream('bbeverpic.tsv')
});

var countSource = 0;

sourceReader.on('line', function (line) {
  //console.log('Line from file:', line);
  srcArr.push(line);
  ++countSource;
});

sourceReader.on('close', function(){
	console.log("File has " + countSource + " lines");
	console.log("Array has " + srcArr.length + " elements");
})

// function findString(str){
	
// 	var found = false;

// 	stream.on('data',function(d){
// 		//console.log(d.toString());
// 	 	return d.toString().indexOf(str);
// 	});
// 	stream.on('error',function(err){
// 	    //then(err, found);
// 	    console.error("error reading file: " + err);
// 	});
// }



// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('bbeverpicsPages.tsv')
// });

// var count = 0;

// lineReader.on('line', function (line) {
//   //console.log('Line from file:', line);
//   if (findString(line.slice(0,-6)) == -1){
//   	console.log(line);
//   	++count;
//   }
// });

// lineReader.on('close', function(){
// 	console.log("Didn't find " + count + " lines");
// })