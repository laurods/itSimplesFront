export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const xml = req.file.buffer;
    res.status(200).json({ xml });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};
