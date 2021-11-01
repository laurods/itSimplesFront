import connectToDatabase from '../../config/conn';
export default async (req, res) => {
	const email = req.body.email; 
	return res.status(200).json({msg: email})	

}