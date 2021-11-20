export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const xml = req.file
    res.status(200).json({ data: 'success', xml: xml });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};
