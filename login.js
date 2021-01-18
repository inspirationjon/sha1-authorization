const path = require('path');
const sha1 = require('sha1');
const { IO } = require('./io.js');

const pathName = path.resolve('./data.json');

const [, , userName, userPassword] = process.argv;

const io = new IO(pathName);

async function checkUser() {
	const data = await io.read();
	const dataParsed = JSON.parse(data);

	try {
		const found = dataParsed.find((user) => {
			return user.userName === userName;
		});

		if (
			found.userName === userName &&
			sha1(userPassword) === found.passwordEncrypted
		) {
			console.log('Welcome Palonchi!');
		} else {
			console.log('Register Pismadonchi');
		}
	} catch {
		console.log('Register Pismadonchi');
	}
}
checkUser();
