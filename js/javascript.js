console.log("loaded");

/*global variable*/

var allUserData = [];

function logstuff (data) {
    console.log('Inside logstuff');
    console.log(data)
}

function getInput (options, callback){
	console.log('options are:');
	console.log(options);
	console.log('callback is: ');
	console.log(callback);

	allUserData.push(users);
	console.log('allUserData');
	callback(allUserData);

}

getInput({user: 'bill';}, logstuff);
getInput({user: 'bob';}, logstuff);
getInput({user: 'bertie';}, logstuff);
