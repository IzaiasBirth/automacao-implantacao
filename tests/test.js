const request = require('supertest');
const app = require('../app');

describe('Testes da Aplicação', () => {
  it('Deve retornar status 200 para a rota principal', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
