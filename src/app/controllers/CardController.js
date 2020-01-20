import Card from '../models/Card';
import User from '../models/User';


class CardController {
    async store(req, res){
        const {board_id, lane_id, description, title, label } = req.body;

        
        const card = await Card.create({
             board_id,
             lane_id,
             label,
             title,
             description
        });

        return res.json(card);
    }

    async update(req, res) {
        const { card_id, lane_id } = req.body;
        const card = await Card.findOne({where: {id: card_id} });
        console.log('achou card');
        console.log(card);
        console.log(lane_id);
        if (card){
            await card.update({
                lane_id:lane_id,
            });

            return res.json(card);
        }else{
            return res.json("not found");
        }
      }

}

export default new CardController();