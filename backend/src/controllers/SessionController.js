const connection = require('../database/connection');
const { hashPassword } = require('../utils/helpersFunctions');

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        const ong= await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return res.status(400).json({ error: "No ONG found for this ID"});
        }

        return res.json(ong);
    },

    async login(req, res) {
        const { email, password } = req.body;
        const passHash = hashPassword(password); 

        const ong= await connection('ongs')
            .where('email', email)
            .where('password', passHash)
            .select(['name', 'id'])
            .first();

        if (!ong) {
            return res.status(400).json({ error: "No ONG found for this ID"});
        }

        return res.json(ong);
    }

}