                      
 module.exports = async (req, res) => {
    try {
        const xml = req.file.buffer;   
          res.status(200).json({msg: 'teste'});       

        } catch (err) {
         console.log(err.stack);
     } 
    
}
