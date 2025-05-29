import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { Contact } from '../types/contact.js';

export const readContacts = async (): Promise<Contact[]> => {
  try {
    const data: string = await fs.readFile(PATH_DB, 'utf-8');
    const contacts: Contact[] = JSON.parse(data);

    return contacts;
  } catch (error: unknown) {
    console.error(
      'Error reading contacts:',
      error instanceof Error ? error.message : String(error),
    );

    return [];
  }
};
