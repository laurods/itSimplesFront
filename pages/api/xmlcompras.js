                      
 module.exports = async (req, res) => {
    try {
        const xml = req.file.buffer;   
          res.status(200).json(xml);       

        } catch (err) {
         console.log(err.stack);
     } 
    
}
