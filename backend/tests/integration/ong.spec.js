const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/databases/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.schema.dropTableIfExists('ongs');
        await connection.migrate.latest();
    });

    afterAll( async() => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            nome: "APAD4",
            email: "contato3@apad.com.br",
            whatsapp: "62999999999",
            city: "gyn",
            uf: "GO"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});