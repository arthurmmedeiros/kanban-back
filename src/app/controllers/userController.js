import User from '../models/User';
import Board from '../models/Board';

class UserController{
    async store(req, res){
        const userExists = await User.findOne({where : {email: req.body.email}});

        if(userExists){
            return res.status(400).json({error: 'Usuário já existe'});
        }


        const {id, name, email} = await User.create(req.body);

        return res.json({
            id,
            name,
            email
        });
    }

    async update(req, res){
        return 
    }

    async index (req, res){

        const users = await User.findAll({
            where: {id: req.body.idUser},
            attributes: ['id', 'name', 'email'],
            // include :[
            //     {   
            //         model: Board,
            //         as: 'board',
            //         attributes: ['description']
            //     }
            // ]
        });

        return res.json(users);
    }

    async single (req, res){
        console.log(req.params);
        const user = await User.findOne({
            where: {id: req.params.id},
            attributes: ['id', 'name', 'email'],
            // include :[
            //     {   
            //         model: Board,
            //         as: 'board',
            //         attributes: ['description']
            //     }
            // ]
        });

        return res.json(user);
    }

    // async singleUser (req, res){
    //     console.log(req);
    //     const user = await User.findOne({
    //         where: { id: req.userId },
    //         attributes:[ 'id', 'name', 'email']
    //     });

    //     return res.json(user);
    // }
}

export default new UserController();