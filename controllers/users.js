const { pool } = require('../db/config')
const {generarJWT} = require('../jwt/jwt')

const getAllUsers = async(req,res) => {
    try {
        const resp = await pool.query(`SELECT * FROM users`)
        res.json({
            ok: true,
            data : resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Contacte al administrador`
        })
    }
}
const createUser = async(req,res) => {
    const {name,email,password} = req.body
    try {
        const verifyEmail = await pool.query('SELECT * FROM users WHERE email = $1',[email])
        if(verifyEmail.rows.length > 0){
            res.json({
                ok:false,
                msg:'El email ya existe'
            })
        }else{
            await pool.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3)',[name,email,password])
            const user = await pool.query('SELECT * FROM users WHERE email = $1',[email])
            const token = await generarJWT( user.rows[0].id, user.rows[0].name);
            res.json({
                ok:true,
                msg:'Usuario creado exitosamente',
                user : user.rows[0],
                token
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}
const revalidarToken = async(req,res) => {
    const {id,name} = req
    const resp = await pool.query(`SELECT * FROM users WHERE id = $1`, [id])

    const token = await generarJWT( id, name );
    return res.json({
        ok: true,
        user: resp.rows[0],
        token
    });
}
const logearUsuario = async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1',[email])
        if(user.rows.length > 0){
            if(user.rows[0].password == password){
                token = await generarJWT(user.rows[0].id, user.rows[0].name)
                res.json({
                    ok:true,
                    msg:'Usuario logeado exitosamente',
                    user: user.rows[0],
                    token,
                })
            }else{
                res.json({
                    ok:false,
                    msg:'Password invalida'
                })
            }
        }else{
            res.json({
                ok:false,
                msg:'El usuario no existe'
            })
        }
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    revalidarToken,
    logearUsuario
}