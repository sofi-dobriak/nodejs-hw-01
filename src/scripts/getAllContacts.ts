import { Contact } from '../types/contact.js';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async (): Promise<Contact[] | undefined> => {
  try {
    const contacts: Contact[] = await readContacts();

    if (!contacts.length) {
      console.log('No contacts to display');
      return;
    }

    return contacts;
  } catch (error: unknown) {
    console.error(
      'Error receiving all contacts:',
      error instanceof Error ? error.message : String(error),
    );
  }
};

console.log(await getAllContacts());
