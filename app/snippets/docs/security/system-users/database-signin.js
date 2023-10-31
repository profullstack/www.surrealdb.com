const db = new Surreal();
db.connect('ws://localhost:8000/rpc', {
	namespace: 'test',
	database: 'test',
});

db.signin({
	// Because we are signin in a database user, we need to let SurrealDB know on which database this user is located.
	namespace: 'test',
	database: 'test',

	username: 'mary',
	password: 'VerySecurePassword!',
});
