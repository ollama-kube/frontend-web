// utils/indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'conversationDB';
const DB_VERSION = 1;
const STORE_NAME = 'conversations';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addConversation = async (conversation: any) => {
  const db = await initDB();
  return db.put(STORE_NAME, conversation);
};

export const getConversations = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteConversation = async (id: any) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};
