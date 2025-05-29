import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import { Contact } from '../types/contact.js';

const generateContacts = async (number: number): Promise<void> => {
  try {
    const contacts: Contact[] = await readContacts();

    // for (let i = 0; i < number; i++) {
    //   const newContact: Contact = createFakeContact();
    //   contacts.push(newContact);
    // }

    const newContacts: Contact[] = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    contacts.push(...newContacts);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`${number} contacts added.`);
  } catch (error: unknown) {
    console.error(
      'Error adding a contacts:',
      error instanceof Error ? error.message : String(error),
    );
  }
};

generateContacts(5);
