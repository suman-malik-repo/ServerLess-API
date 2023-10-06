module.exports = (req, res) => {
    // Set the "Connection" header to "close"
    res.setHeader('Connection', 'close');
  
    // Send the response
    res.status(200).json({ message: 'Hello, World! This is from Data.js File' });
  };
  