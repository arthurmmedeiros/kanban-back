import Sequelize, { Model } from 'sequelize';

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        label: Sequelize.STRING,
        description: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'card'
      }
    );

    return this;
  }

      static associate (models){
        this.belongsTo(models.Lane, {foreignKey: 'lane_id', as :'lane'});

        this.belongsTo(models.Board, {foreignKey: 'board_id', as :'cardboard'});

    }
}

export default Card;