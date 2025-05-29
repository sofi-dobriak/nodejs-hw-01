import { Contact } from '../types/contact.js';
import { readContacts } from '../utils/readContacts.js';

export const countContacts = async (): Promise<number | undefined> => {
  try {
    const contacts: Contact[] = await readContacts();
    const contactLength: number = contacts.length;
    return contactLength;
  } catch (error: unknown) {
    console.error(
      'Error getting the number of contacts:',
      error instanceof Error ? error.message : String(error),
    );
  }
};

console.log(await countContacts());
