import readXlsxFile from 'read-excel-file'

export default async (req, res) => { 
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    return res.status(200).json({msg:'suscess'});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
