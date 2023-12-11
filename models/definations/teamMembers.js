const {Model, DataTypes} = require ("sequelize");
const sequelize = require ("../../bin/dbConnection")

class TeamsMember extends Model {}

TeamsMember.init({
    teamsMemberId: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "TeamMembers"
})

module.exports = TeamsMember;