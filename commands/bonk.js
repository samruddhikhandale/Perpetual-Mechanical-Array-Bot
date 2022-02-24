import { Command } from '@ruinguard/core';
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import BonkU from '../lib/bonk-gifs.js';
import { EmbedColor } from '../lib/constants.js';

const Bonk = new BonkU(),

  cmd = new SlashCommandBuilder()
    .setName('bonk')
    .setDescription('Select a member and bonk them.')
    .addUserOption((option) => option
      .setName('target')
      .setDescription('The member to bonk')
      .setRequired(true))
    .addStringOption((option) => option.setName('reason').setDescription('Reason to bonk'));

export default new Command({
  data: cmd,
  flags: [1 << 1],
  async run(interaction) {
    const user = await interaction.options.getUser('target'),

      inputReason = await interaction.options.getString('reason'),
      reason = inputReason || Bonk.bonkReason(),

      isHorny =
      (/h+o+r+n+(y|i)/gim).test(inputReason) ||
      (/s+e+g+s/gim).test(inputReason) ||
      (/s+e+x/gim).test(inputReason),
      isSelf = user === interaction.user;

    console.log('Bonk GIFs', Bonk.bonkGifs);

    console.log('Horny Bonk GIFs', Bonk.hornyBonkGifs);

    console.log('Self Horny Bonk GIFs', Bonk.selfHornyBonkGifs);

    const gif = Bonk.bonkGif();
    console.log('Selected Bonk: ', gif);

    const selfHornyBonkGif = Bonk.selfHornyBonkGif();
    console.log('Selected Self Horny Bonk', selfHornyBonkGif);

    const hornyBonkGif = Bonk.hornyBonkGif();
    console.log('Selected Horny Bonk: ', hornyBonkGif);

    const bonk = new MessageEmbed()
        .setColor(EmbedColor)
        .setTitle('**Bonked!**')
        .setThumbnail(await user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${user} has been bonked!\nReason: ${reason}`)
        .setImage(gif),

      hornyBonk = new MessageEmbed()
        .setColor(EmbedColor)
        .setTitle('**Bonked!**')
        .setThumbnail(await user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${user} has been bonked!\nReason: ${reason}`)
        .setImage(hornyBonkGif),

      selfHornyBonk = new MessageEmbed()
        .setColor(EmbedColor)
        .setTitle('**Bonked!**')
        .setThumbnail(await user.displayAvatarURL({ dynamic: true }))
        .setDescription(`${user} has been bonked!\nReason: ${reason}`)
        .setImage(selfHornyBonkGif);

    if (!isHorny) {
      return interaction.reply({ embeds: [bonk] });
    }
    else if (isSelf) {
      return interaction.reply({ embeds: [selfHornyBonk] });
    }
    return interaction.reply({ embeds: [hornyBonk] });
  }
});
