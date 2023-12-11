const {Model, DataTypes,} =require ("sequelize");
const sequelize = require ("../../bin/dbConnection")

class Tasks extends Model {}

Tasks.init({
    tasksId: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    tasksTitle: {
        unique: true,
        type: DataTypes.STRING(60),
        allowNull: false
    },
    tasksDescription: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Task"
})

module.exports = Tasks;