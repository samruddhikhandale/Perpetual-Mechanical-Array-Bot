import { ApplyOptions } from '@sapphire/decorators';
import { Listener, ListenerOptions } from '@sapphire/framework';
import type { ForumChannel } from 'discord.js';
import { PMAEventHandler } from '../../baseBot/lib/Utilities';
import db from '../../lib/Firestore';
import { customLogger } from '../../lib/utils';

@ApplyOptions<ListenerOptions>({
  emitter: PMAEventHandler,
  event: 'HoFSetup',
  name: 'Hall of Fame Channel Setup',
})
export default class UserEvent extends Listener {
  public async run(forumChannel: ForumChannel) {
    const logger = customLogger;
    logger.debug(`Got ${forumChannel}`);

    await db
      .collection('hall-of-fame-config')
      .doc('channel')
      .set(
        { forumId: forumChannel.id },
        {
          merge: true,
        },
      )
      .then(() => {
        logger.debug(`Forum channel registered in database for Hall Of Fame`);
      })
      .catch(logger.error);
  }
}
