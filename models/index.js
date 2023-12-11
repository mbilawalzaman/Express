const sequelize = require ("../bin/dbConnection");
const Users = require("./definations/users");
const Teams = require("./definations/teams");
const Projects = require("./definations/projects");
const Tasks = require("./definations/tasks");
const TeamMembers = require("./definations/teamMembers");
const Sessions = require("./definations/sessions")


const models = { 
    Users, Teams, Projects, Tasks , TeamMembers, Sessions
};

//relations

//team-projects one-to-one 
Teams.hasOne(Projects , {foreignKey: "TeamsId"});
Projects.belongsTo(Teams, {foreignKey: "TeamsId"});

//users-sessions one-to-one 
Users.hasOne(Sessions , {foreignKey: "userId"});
Sessions.belongsTo(Users, {foreignKey: "userId"});

//projects-task one-to-many
Projects.hasMany(Tasks , {foreignKey: "ProjectId"});
Tasks.belongsTo(Projects, {foreignKey: "ProjectId"});

//TeamMember-task one-to-many
TeamMembers.hasMany(Tasks , {foreignKey: "TasksId"});
Tasks.belongsTo(TeamMembers, {foreignKey: "TasksId"});

//Users-TeamMember one-to-many
Users.hasMany(TeamMembers, { foreignKey: "UsersId" });
TeamMembers.belongsTo(Users, { foreignKey: "UsersId" });


//TeamMember-teams one-to-many
Teams.hasMany(TeamMembers , {foreignKey: "TeamsId"});
TeamMembers.belongsTo(Teams, {foreignKey: "TeamId"});

//users-teams one-to-many (user as a instructor)
Users.hasMany(Teams, {foreignKey: "UsersId"});
Teams.belongsTo(Users, {foreignKey: "UsersId"})

const db= {};

db.sequelize= sequelize;
sequelize.models = models;

module.exports = {models, db};