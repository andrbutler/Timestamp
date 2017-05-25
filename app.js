var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function(req, resp){
	resp.sendfile('index.html');
});
app.get('/:date', function(req, resp){
	resp.writeHead(200, {'Content-type': 'application/json'});
	var out = {'unix': null, 'natural': null};
	var inTime = req.params.date;
	
	if(inTime.length == 10){
		var time = 	new Date(inTime * 1000);
	}else{
		var time = new Date(inTime);	
	} 
	console.log(req.params.date);
	out.unix = time.getTime()/1000;
	var month;
	switch(time.getMonth()){
		case 0:
		month = 'January';
		break;
		
		case 1:
		month = 'February';
		break;
		
		case 2:
		month = 'March';
		break;
		
		case 3:
		month = 'April';
		break;
		
		case 4:
		month = 'May';
		break;
		
		case 5:
		month = 'June';
		break;
		
		case 6:
		month = 'July';
		break;
		
		case 7:
		month = 'August';
		break;
		
		case 8:
		month = 'September';
		break;
		
		case 9:
		month = 'October';
		break;
		
		case 10:
		month = 'November';
		break;
		
		case 11:
		month = 'December';
		break;
	}
	out.natural = month + ' ' + time.getDate()
	+ ', ' + time.getFullYear();
	resp.end(JSON.stringify(out));
});
app.listen(8080);