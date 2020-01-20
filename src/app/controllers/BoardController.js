import Board from '../models/Board';
import Lane from '../models/Lane';
import Card from '../models/Card';

class BoardController {
    async store(req, res){
        const {user_id, description, } = req.body;
        console.log(req.body);
        const board = await Board.create({
             user_id,
             description
        });

        console.log(board);

        return res.json(board);
    }

    async index (req, res){
        
        const board = await Board.findAll({
            attributes: ['id', 'description'],
            include :[
                {   
                    model: Lane,
                    as: 'lanes',
                    attributes: ['title','label', 'id' ]
                },
                {
                    model:Card,
                    as: 'cards',
                    attributes:['title', 'description', 'label', 'id', 'lane_id']
                }
            ]
        });
        return res.json(board);
    }

    async single (req, res){
        
        const board = await Board.findOne({
            attributes: ['id', 'description'],
            where: {id: req.params.id},
            include :[
                {   
                    model: Lane,
                    as: 'lanes',
                    attributes: ['title','label', 'id' ]
                },
                {
                    model:Card,
                    as: 'cards',
                    attributes:['title', 'description', 'label', 'id', 'lane_id']
                }
            ]
        });
        return res.json(board);
    }
}

export default new BoardController();