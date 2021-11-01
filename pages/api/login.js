import connectToDatabase from '../../config/conn';
const HTTP200 = 200;
const HTTP500 = 500;
export default async (req, res) => {
    const { email, password } = req.body; 
	console.log(email);
	const { db, client } = await connectToDatabase();
	if(client.isConnected()) {
		const people = await db
		.collection("people")
		.findOne({ email })

	  if(people) {
		return res.status(200).json({ people })
	  }
	}

	return res.status(500).json({ error: 'client DB is not connected' })

}