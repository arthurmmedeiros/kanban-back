import Sequelize, { DatabaseError } from 'sequelize';

import User from '../app/models/User';
import Board from '../app/models/Board';
import Lane from '../app/models/Lane';
import Card from '../app/models/Card';

import databaseConfig from '../config/database';

const models = [User, Board, Lane, Card];

class Database {
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();