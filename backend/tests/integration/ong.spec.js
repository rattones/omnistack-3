const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach( async () => {
        await connection.migrate.rollback();        // zerar o banco para fazer os testes
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', 'id valido')
            .send({
                name: "Cão Viver",
                email: "contato@caoviver.ong.br",
                whatsapp: "37999888666",
                city: "Divinópolis",
                uf: "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(36);
    });
})