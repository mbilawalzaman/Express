const {Model, DataTypes} = require ("sequelize");
const sequelize = require ("../../bin/dbConnection")

class Teams extends Model {}

Teams.init({
    teamsId: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    teamsLeader: {
        type: DataTypes.STRING(60),
        allowNull: false,
        }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Teams"
})

module.exports = Teams;