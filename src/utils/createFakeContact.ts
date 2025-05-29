import { faker } from '@faker-js/faker';
import { Contact } from '../types/contact.js';

export const createFakeContact = (): Contact => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
