const db = new Surreal();
db.connect('ws://localhost:8000/rpc', {
	namespace: 'test',
	database: 'test',
});

db.signin({
	namespace: 'test',
	database: 'test',

	// Provide the name of the scope
	scope: 'user',

	// Provide the variables used by the signin query
	email: 'john@doe.org',
	password: 'VerySecurePassword!',
});
