import moduleName, { Sequelize } from 'sequelize';
                
const db = new Sequelize('nodets','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false
});

export default db;