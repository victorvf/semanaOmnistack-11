import app from '../../src/app.js';

const request = require('supertest');

describe('ONG', () => {
    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ong/create')
            .set('Authorization', '7de4d133')
            .send({
                name: 'gfassg',
                email: 'aera@ong.com',
                whatsapp: '86999999',
                city: 'teresreina',
                uf: 'pi',
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});
