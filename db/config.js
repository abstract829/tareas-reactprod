const { Pool } = require('pg')

const pool = new Pool({
    connectionString : 'postgres://gfjcqurysqkekp:6364c2649e40109b8dccb01360f45371d3611329a141f87fcf96a7c8e9c92eab@ec2-3-230-219-251.compute-1.amazonaws.com:5432/dddhdl7g1u18ii',
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = {
    pool
}