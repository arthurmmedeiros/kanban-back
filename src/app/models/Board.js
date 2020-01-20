import Sequelize, { Model } from 'sequelize';

// class Board extends Model {
//     static init(sequelize){
//         super.init(
//             {
//                 description: Sequelize.STRING,
//             },
//             {
//                 sequelize
//             }
//         );

//         return this;
//     }

//     static associate (models){
//         console.log(models);
//         this.belongsTo(models.User, {foreignKey: 'user_id', as :'user'});
//     }

// }

// export default Board;

import Sequelize, { Model } from 'sequelize';

class Board extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'board'
      }
    );
    return this;
  }

      static associate (models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as :'user'});

        this.hasMany(models.Lane, {as :'lanes'});
        this.hasMany(models.Card, {as :'cards'});
    }
}

export default Board;