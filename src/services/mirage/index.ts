import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer(){
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}) // pega todos os dados do type User sem precisar declarar.
        },

        factories: {
            user: Factory.extend({
                name(i: number){
                    return faker.name.findName(); //`User ${i + 1}` // User 1..2..3..4..
                },
                email(){
                    return faker.internet.email().toLowerCase();
                },
                created_at(){
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) {
            server.createList('user', 15);
        },

        routes() {
            this.namespace = 'api';
            this.timing = 3500;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        },
    });

    return server;
}