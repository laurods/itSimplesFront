import connectToDatabase from '../../config/conn';
export default async (req, res) => {
	const email = req.body.email;
	const { db, client } = await connectToDatabase();
	if(client.isConnected()) {
		return res.status(200).json({msg: 'conectou'})
	}

	return res.status(200).json({msg:'erro'})	

}