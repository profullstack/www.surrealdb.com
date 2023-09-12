const db = new Surreal();
db.connect('ws://localhost:8000/rpc', {
	ns: 'test',
	db: 'test',
});

db.signin({
	user: 'john',
	pass: 'VerySecurePassword!',
});
