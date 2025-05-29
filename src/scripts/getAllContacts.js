import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { readFile } from 'node:fs/promises';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  try {
    const data = await readFile(PATH_DB, contacts, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
