const connection = require('../database/connection');
// const crypto = require('crypto');    // rocketseat
// const uuid = require('uuidv4');      // alterada para generateUniqueId -- tests
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf }= req.body;

        // const id = crypto.randomBytes(4).toString('HEX');    // rocketseat
        // const id = uuid.uuid();
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });
    
        return res.json({ id });    
    }
}