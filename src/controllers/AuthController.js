const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

class AuthController {
    
    //REGISTER
    async register(req, res) {
        try {
            const { username, email, password, passwordConfirm, isAdmin } = req.body;

            const useExist = await User.findOne({email:email});
            
            //Validação de email
            if(useExist){
                return res.status(434).json("Já existe um Usuario cadastrado com esse e-mail")
            }

            //Valida se as senha conferem
            if (password !== passwordConfirm) {
                return res.status(433).json("As senhas não conferem");
            }

            //CRIPTOGRAFA A SENHA
            const saltRounds = 10;
            const salt = await bcrypt.genSaltSync(saltRounds)
            const hash = await bcrypt.hashSync(password,salt)

            //CRIA UM NOVO USUARIO
            const newUser = await User({
                username: username,
                email: email,
                password: hash,
                isAdmin: isAdmin,
            });
            //SALVA O USUARIO
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(433).json(error);
        }
    }

    // LOGIN
    async login(req, res) {
        try {
            const { username, email, password } = req.body;

            //VALIDANDO E-MAIL
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(433).json("O email não foi cadastrado");
            }

            //Descriptografando a Senha 
            const testPassword = await bcrypt.compareSync(password,user.password); 

            if (!testPassword) {
                return res.status(432).json("Senha invalida");
            }

            const payload = { userId: user._id }; // Include relevant user data
            const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Set expiration time
        
            res.status(200).json({ token, message: `Bem vindo ${user.username}` });
        
        } catch (error) {
            res.status(433).json(error);
        }
    }
}

module.exports = new AuthController();
