const connection = require('../database/connection');
const crypto = require('crypto');    // rocketseat --> para criar o hash do password
const hash = crypto.createHash('sha1');
// const uuid = require('uuidv4');      // alterada para generateUniqueId -- tests
const { generateUniqueId, hashPassword } = require('../utils/helpersFunctions');

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, password, whatsapp, city, uf }= req.body;
        const passHash= hashPassword(password);

        // const id = crypto.randomBytes(4).toString('HEX');    // rocketseat
        // const id = uuid.uuid();
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id, name, email, 
            password: passHash,
            whatsapp, city, uf
        });
    
        return res.json({ id });    
    }
}