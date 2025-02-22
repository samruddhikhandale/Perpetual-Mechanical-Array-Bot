import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener, type ListenerOptions } from '@sapphire/framework';
import { ROLE_IDS } from '../../lib/Constants';
import EnvConfig from '../../lib/EnvConfig';

@ApplyOptions<ListenerOptions>({
  enabled: true,
  event: Events.ShardReady,
  name: 'RNGFreezeUnmute',
  once: true,
})
export default class RNGFreezeUnMuteEvent extends Listener<typeof Events.ShardReady> {
  public async run() {
    const guild = await this.container.client.guilds.fetch(EnvConfig.guildId);

    const freezeRNGRole = await guild.roles.fetch(ROLE_IDS.OTHERS.FROZEN_RNG);

    if (!freezeRNGRole) {
      return;
    }
    let length = 0;
    freezeRNGRole.members.forEach((member) => {
      member.roles
        .remove(freezeRNGRole, 'Bot restarted, cannot have them muted for long duration')
        .then(() => {
          length += 1;
        });
    });
    this.container.logger.info(`Unmuted ${length} users`);
  }
}
