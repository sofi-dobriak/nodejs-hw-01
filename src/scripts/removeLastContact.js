import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (!contacts.length) {
    console.log('No contacts');
    return;
  }

  const removed = contacts.pop();

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Removed the last contact: ', removed);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
