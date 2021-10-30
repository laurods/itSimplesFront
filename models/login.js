import connection from '../config/conn';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const saltRounds = 5;
const HTTP401 = 401;
const HTTP500 = 500;
const secret = 'abcdefg';


const findOne = async (email, password) => {
	
	const people = await connection().then((db) =>
		db
			.collection("people")
			.findOne({ email })
	);
        if(!people) return ({ message: 'Email incorreto!' }); 
	const match = await bcrypt.compare(password, people.password);

	if(match) {
        const jwtConfig = { expiresIn: 60 * 60, algorithm: 'HS256' };    
    	const { _id, email } = people;
    	const token = jwt.sign({ id: _id, email: email }, secret, jwtConfig);
	return { token, _id };
    }
	return ({ message: 'Senha incorreta!' });
	
}


module.exports = {	
	findOne,
};
