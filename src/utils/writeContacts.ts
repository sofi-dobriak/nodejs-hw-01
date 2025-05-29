import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { Contact } from '../types/contact.js';

export const writeContacts = async (updatedContacts: Contact[]) => {
  try {
    const data: string = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error: unknown) {
    console.error(
      'Error writing contacts:',
      error instanceof Error ? error.message : String(error),
    );
  }
};
