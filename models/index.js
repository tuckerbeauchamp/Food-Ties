const User = require('./user');
const Personality = require('./personality');

User.belongsTo(Personality,{
    foreignKey: "personality_id"
})

module.exports = {User, Personality};