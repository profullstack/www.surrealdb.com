const db = new Surreal();
db.connect('ws://localhost:8000/rpc', {
	namespace: 'test',
	database: 'test',
});

db.signin({
	username: 'john',
	password: 'VerySecurePassword!',
});
