import { describe, expect, test } from '@jest/globals';
import request, { Response } from 'supertest';


describe('API testing', () => {
  test('GET /posts', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get("/posts")
      .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8')
      .expect('x-powered-by', 'Express')
      .expect('server', 'cloudflare')
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(100);
        expect(response.body).toEqual(expect.arrayContaining([{
          "userId": expect.any(Number),
          "id": expect.any(Number),
          "title": expect.any(String),
          "body": expect.any(String),
        }]));
        done();
      }).catch(err => {
        done(err);
      });
  });
  test('GET /posts/10', (done) => {
    const res = {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
    request('https://jsonplaceholder.typicode.com')
      .get("/posts/10")
      .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8')
      .expect('x-powered-by', 'Express')
      .expect('server', 'cloudflare')
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(res);
        done();
      }).catch(err => {
        done(err);
      });
  });
  test('POST /posts', (done) => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const res = {
      id: expect.any(Number),
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    request('https://jsonplaceholder.typicode.com')
      .post("/posts")
      .send(data)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .expect('x-powered-by', 'Express')
      .expect('server', 'cloudflare')
      .then((response: Response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(res);
        done();
      }).catch(err => {
        done(err);
      });
  });
  test('PUT /posts', (done) => {
    const data = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const res = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    request('https://jsonplaceholder.typicode.com')
      .put("/posts/1")
      .send(data)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .expect('x-powered-by', 'Express')
      .expect('server', 'cloudflare')
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(res);
        done();
      }).catch(err => {
        done(err);
      });
  });
  test('DELETE /posts', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .delete("/posts/1")
      .set('Content-Type', 'application/json; charset=UTF-8')
      .expect('x-powered-by', 'Express')
      .expect('server', 'cloudflare')
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        done();
      }).catch(err => {
        done(err);
      });
  });
});