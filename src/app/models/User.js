import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'

class User extends Model {
    static init(sequelize){
        super.init(
            {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING

            },
            {
                sequelize,
                tableName: 'users'
            }
        );

        this.addHook('beforeSave', async user => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    // static associate (models){
    //     console.log(models);
    //     this.belongsTo(models.Board, {foreignKey: 'user_id'});
    // }

    // static associate (models){
    //     this.hasMany(models.Board, {foreignKey: 'id', sourceKey: 'user_id'});
    // }
}

export default User;