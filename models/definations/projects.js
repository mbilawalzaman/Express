const {Model, DataTypes} = require ("sequelize");
const sequelize = require ("../../bin/dbConnection")

class Projects extends Model {}

Projects.init({
    projectsId: {
        primaryKey: true,
        type: DataTypes.STRING(60),
    },
    projectsTitle: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    projectsDescription: {
        type: DataTypes.STRING(60),
        allowNull: false,
    }
},{
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Projects"
})

module.exports = Projects;