const { Sequelize } = require('sequelize');
const {development} = require("../config/config")
const {database} = development ;


const sequelize = new Sequelize(
process.env.DATABASE_URL , {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }

    }

);

(async ()=> {
    try{
        await sequelize.sync({alter:true})
    }catch (e) {
        console.log(e)
    }

})();

module.exports = sequelize ;