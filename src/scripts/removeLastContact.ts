import { PATH_DB } from '../constants/contacts.js';
import { Contact } from '../types/contact.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async (): Promise<void> => {
  try {
    const contacts: Contact[] = await readContacts();

    if (!contacts.length) {
      console.log('No contacts');
      return;
    }

    const removed: Contact | undefined = contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Removed the last contact: ', removed);
  } catch (error: unknown) {
    console.log(
      'Error deleting the last contact: ',
      error instanceof Error ? error.message : String(error),
    );
  }
};

removeLastContact();
