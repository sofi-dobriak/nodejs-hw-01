import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Додано один контакт');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
