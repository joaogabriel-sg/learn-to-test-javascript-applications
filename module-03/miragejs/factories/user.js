import { randomNumber } from './utils';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/withshepherd/faker.js
 */
import faker from '@withshepherd/faker';

export default {
  user: Factory.extend({
    name() {
      return faker.fake('{{name.findName}}');
    },
    mobile() {
      return faker.fake('{{phone.phoneNumber}}');
    },
    afterCreate(user, server) {
      const messages = server.createList('message', randomNumber(10), { user });

      user.update({ messages });
    },
  }),
};
