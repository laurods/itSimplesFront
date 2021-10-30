import peopleDAO from '../../models/login';
const HTTP200 = 200;
const HTTP500 = 500;

const loginPeople = async (req, res) => {
     
    try {
      const { email, password } = req.body;      
      //const authPeople = await peopleDAO.findOne(email, password);
      //return res.status(HTTP200).json(authPeople);
      return res.status(HTTP200).json({ message: 'login efetuado' });
      
    } catch (err) {
      return res.status(HTTP500).json({ message: err.message });
    }    
  };
  
  module.exports = {
    loginPeople,
  };
