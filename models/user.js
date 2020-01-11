module.exports = (sequelize, types) => {
    return sequelize.define("User", {
        name:{
            type: types.STRING,
            required: true
        }
    })
}