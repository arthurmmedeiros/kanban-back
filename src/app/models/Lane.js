import Sequelize, { Model } from 'sequelize';

class Lane extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        label: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'lane'
      }
    );

    return this;
  }

      static associate (models){
        this.belongsTo(models.Board, {foreignKey: 'board_id', as :'board'});
        this.hasMany(models.Card, {as :'card'})
    }
}

export default Lane;