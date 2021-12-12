const { pool } = require('../db/config')


const getAllTareas = async(req,res) => {
    try {
        const resp = await pool.query(`SELECT * FROM tarea`)
        res.json({
            ok: true,
            data : resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Contacte al administrador`,
            error
        })
    }
}   
const asignarTarea = async(req,res) => {
    const {iduser, idtarea} = req.body
    try {
        await pool.query(`INSERT INTO tareasusers(iduser,idtarea) VALUES($1,$2)`,[iduser,idtarea])
        await pool.query(`UPDATE tarea SET pending = true WHERE id =$1`,[idtarea])
        res.json({
            ok: true,
            msg : `Tarea ${idtarea} asignada al usuario ${iduser}`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Contacte al administrador`,
            error,
        })
    }
}
const getTareaByUserId = async(req,res) => {
    const {iduser} = req.params
    try {
        const resp = await pool.query(`SELECT tarea.id,tarea.title,tarea.desc FROM tareasusers inner join tarea on tarea.id = tareasusers.idtarea WHERE iduser = $1`,[iduser])
        res.json({
            ok: true,
            data : resp.rows
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:`Contacte al administrador`,
            error
        })
    }
}
const editarTarea = async(req,res) => {
    const {id,title,desc,pending,completed} = req.body
    console.log(id,title,desc,pending,completed)
    try {
        const resp = await pool.query('UPDATE tarea SET title = $1, "desc" = $2, pending = $3, completed =$4 WHERE id = $5',[title,desc,pending,completed,id])
        res.json({
            ok:true,
            msg:`Tarea ${id} actualizada con exito`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}
const completarTarea = async(req,res) => {
    const {id,title,desc,pending,completed} = req.body
    try {
        const resp = await pool.query('UPDATE tarea SET title = $1, "desc" = $2, pending = $3, completed =$4 WHERE id = $5',[title,desc,pending,completed,id])
        await pool.query('DELETE FROM tareasusers WHERE idtarea = $1',[id])
        res.json({
            ok:true,
            msg:`Tarea ${id} actualizada con exito`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })
    }
}
const crearTarea = async(req,res) => {
    const {title,desc} = req.body
    try {
        const resp = await pool.query('INSERT INTO tarea(title,"desc") VALUES ($1,$2)',[title,desc])
        res.json({
            ok:true,
            msg:'Tarea creada exitosamente',

        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Contacte al administrador',
            error
        })    
    }
}
const eliminarTarea = async(req,res) => {
    const {id} = req.params
    try {
        await pool.query('DELETE FROM tarea WHERE id = $1', [id])
        res.json({
            ok:true,
            msg:`Tarea ${id} eliminada correctamente`
        })
    } catch (error) {
        res.json({
            ok:false,
            msg:'Conctacte al administrador'
        })
    }
}
module.exports = {
    getAllTareas,
    asignarTarea,
    getTareaByUserId,
    editarTarea,
    completarTarea,
    crearTarea,
    eliminarTarea
}