//import connectToDatabase from '../../config/conn';

export default async (req, res) => {
    const { email, password } = req.body; 
	console.log(email);
	return res.status(200).json({ email })	

}