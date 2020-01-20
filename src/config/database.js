module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'arthur',
    password: 'arthur',
    database: 'kanbane',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
    }
};