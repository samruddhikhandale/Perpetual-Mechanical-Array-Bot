import { Command } from '@ruinguard/core';

export default new Command({
  data: {
    name: 'padoru',
    description: 'Will sing Padoru (as text)'
  },
  flags: [1 << 3],
  async run(interaction) {
    const { channel } = interaction;
    await interaction.reply({
      content: `Merry Christmas ${interaction.user.tag}!`
    });
    await channel.send('<@&813613841488936971> Hashire sori yo');
    await channel.send('<@&813613841488936971> Kazeno yuu ni');
    await channel.send('<@&813613841488936971> Tsukkimihara wo');
    await channel.send('<@&813613841488936971> PADORU PADORU');
    await channel.send('<:LuminePadoru:912033737280192562><:LuminePadoru:912033737280192562><:LuminePadoru:912033737280192562><:LuminePadoru:912033737280192562>');
    //  await channel.send({ stickers: [917799217320316928] });
  }
});
