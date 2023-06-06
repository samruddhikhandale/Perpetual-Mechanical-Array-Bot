import type { SapphireClient } from '@sapphire/framework';

const clients: SapphireClient[] = [];

export function setClient(client: SapphireClient) {
  clients.push(client);
  console.debug('Client set');
}

export function getClient() {
  if (!clients[0]) {
    throw new Error('Client not initialised, use setClient() first');
  }
  return clients[0];
}
