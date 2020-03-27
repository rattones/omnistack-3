const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const ong_id= req.headers.authorization;

        const { page= 1 } = req.query;

        const incidents = await connection('incidents')
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf'])
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .where('ong_id', ong_id)
            .limit(4).offset( (page-1)*4 );
    
        return res.json(incidents);
    }

}