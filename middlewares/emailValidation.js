const validaEmail = (req, res, next) => {
    const { email } = req.body;
   
    const regex = /\S+@\S+\.\S+/;
    const regexEmail = regex.test(email);
   
    if (!regexEmail) {
      return res.status(400).json({ message: '"email" must be a valid email' }); 
    }
    next();
   };
   
   module.exports = validaEmail;