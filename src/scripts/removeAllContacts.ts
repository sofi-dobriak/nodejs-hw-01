import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { Contact } from '../types/contact.js';

export const removeAllContacts = async (): Promise<void> => {
  try {
    const contacts: Contact[] = await readContacts();

    if (!contacts.length) {
      console.log('No contacts to delete');
      return;
    }

    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
  } catch (error: unknown) {
    console.error(
      'Error deleting all contacts: ',
      error instanceof Error ? error.message : String(error),
    );
  }
};

removeAllContacts();
