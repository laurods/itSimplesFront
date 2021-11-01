import connectToDatabase from '../../config/conn';
export default async (req, res) => {
	const email = req.body.email;
	const { db, client } = await connectToDatabase(); 
	return res.status(200).json({db: db, client:client})	

}