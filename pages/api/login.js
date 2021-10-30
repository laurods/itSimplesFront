import peopleDAO from '../../models/login';
const HTTP200 = 200;
const HTTP500 = 500;
export default async (req, res) => {
    try {
        const { email, password } = req.body; 
        console.log(email);
        console.log(password);     
        //const authPeople = await peopleDAO.findOne(email, password);
        //return res.status(HTTP200).json(authPeople);
        return res.status(HTTP200).json({ message: 'login efetuado' });
        
      } catch (err) {
        return res.status(HTTP500).json({ message: err.message });
      } 

}