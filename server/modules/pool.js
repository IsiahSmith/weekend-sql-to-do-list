const pg = require(`pg`);
const config = {
    database: 'to_do_list',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 3000
};

const pool = new pg.Pool(config);

pool.on(`connect`, () => {
    console.log('connected to postgres'); 
});

pool.on(`error`, (error) => {
    console.log(`error connecting to postgres`, error);
});

module.exports = pool;