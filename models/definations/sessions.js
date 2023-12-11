const {Model, DataTypes} = require ("sequelize");
const sequelize = require ("../../bin/dbConnection")

class Sessions extends Model {}

Sessions.init({
    sessionsId: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    token: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    modelName: "sessions"
})

module.exports = Sessions;