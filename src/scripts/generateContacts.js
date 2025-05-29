import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`${number} контактів додано.`);
  } catch (error) {
    console.error('Помилка при записі:', error.message);
  }
};

generateContacts(3);
