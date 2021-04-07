const User = require('./user');
const Personality = require('./personality');

Personality.belongsTo(User,{
    foreignKey: "user_id",
})

module.exports = {User, Personality};