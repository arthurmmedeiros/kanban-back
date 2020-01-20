import Lane from '../models/Lane';


class LaneController {
    async store(req, res){
        const {title, label,board_id} = req.body;

        const lane = await Lane.create({
             title,
             label,
             board_id
        })

        return res.json(lane);
    }

    async index (req, res){
        console.log(Board);

        return res.json(users);
    }

}

export default new LaneController();