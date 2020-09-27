import path from 'path';

//O knex não suporta a sintaxe export default
module.exports = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'proffy'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};