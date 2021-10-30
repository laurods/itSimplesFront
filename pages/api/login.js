import connection from '../../config/conn';
const HTTP200 = 200;
const HTTP500 = 500;
export default async (req, res) => {
    const { email, password } = req.body; 
    const people = await connection().then((db) =>
		db
			.collection("people")
			.findOne({ email })
	);
        if(!people) return ({ message: 'Email incorreto!' }); 
	
	return (people); 

}