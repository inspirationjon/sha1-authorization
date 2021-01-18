const sha1 = require('sha1');

class User {
	userName;
	passwordEncrypted;

	constructor(userName, userPassword) {
		this.userName = userName;
		this.passwordEncrypted = sha1(userPassword);
	}
}

module.exports.User = User;
