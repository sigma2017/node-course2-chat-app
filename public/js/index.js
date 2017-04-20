var socket = io();

socket.on('connect', function () {
console.log('connected to server');	

socket.emit('createMessage', {
	from: 'Pulica',
	text: 'heeey'
	});
});

socket.on('disconnect', function () {
console.log('deconectat de la sever');
});

socket.on('newMessage', function (message) {
console.log('newMessage', message);
});