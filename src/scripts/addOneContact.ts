import { PATH_DB } from '../constants/contacts.js';
import { Contact } from '../types/contact.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async (): Promise<void> => {
  try {
    const contacts: Contact[] = await readContacts();
    const newContact: Contact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('One contact added');
  } catch (error: unknown) {
    console.error(
      'Error adding contacts:',
      error instanceof Error ? error.message : String(error),
    );
  }
};

addOneContact();
