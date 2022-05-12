import { COLORS, EMOJIS, ROLE_IDS } from '@pma-lib/Constants';
import EnvConfig from '@pma-lib/EnvConfig';
import {
  abyssRoleCheck, crownRoleCheck, repRoleCheck, whaleRoleCheck,
} from '@pma-lib/RoleCheck';
import { canGibRole } from '@pma-lib/StaffCheck';
import { GiveRoleArgs } from '@pma-types/interfaces';
import { RequestTypes } from 'detritus-client-rest';
import { ApplicationCommandOptionTypes } from 'detritus-client/lib/constants';
import { InteractionCommand } from 'detritus-client/lib/interaction';
import { Member } from 'detritus-client/lib/structures';

export default new InteractionCommand({
  name: 'give-role',
  description: 'Gives role to selected user',
  global: false,
  guildIds: [EnvConfig.guildId as string],

  options: [
    {
      name: 'one',
      description: 'Give one role!',
      type: ApplicationCommandOptionTypes.SUB_COMMAND,
      options: [
        {
          name: 'user',
          description: 'Select user',
          type: ApplicationCommandOptionTypes.USER,
          required: true,
        },
        {
          name: 'role',
          description: 'Select Role',
          type: ApplicationCommandOptionTypes.STRING,
          required: true,
          async onAutoComplete(ctx) {
            const repRoles = [
              {
                name: 'Megastar in Mondstadt 🚶🌬️',
                value: ROLE_IDS.REPUTATION.MONDSTADT,
              },
              {
                name: 'Illustrious in Inazuma 🚶⛈️',
                value: ROLE_IDS.REPUTATION.INAZUMA,
              },
              {
                name: 'Legend in Liyue 🚶🌏',
                value: ROLE_IDS.REPUTATION.LIYUE,
              },
            ];

            const crownRoles = [
              {
                name: "Ten'nō of Thunder 👑⛈️",
                value: ROLE_IDS.CROWN.ELECTRO,
              },
              {
                name: 'Jūnzhǔ of Earth 👑🌏',
                value: ROLE_IDS.CROWN.GEO,
              },
              {
                name: 'Herrscher of Wind 👑🌬️',
                value: ROLE_IDS.CROWN.ANEMO,
              },
              {
                name: 'Arbitrator of Fate 👑',
                value: ROLE_IDS.CROWN.NON_ELE,
              },
            ];

            const otherRoles = [
              {
                name: 'Affluent Adventurer 💰',
                value: ROLE_IDS.WHALE,
              },
              {
                name: 'Abyssal Conqueror 🌀',
                value: ROLE_IDS.ABYSSAL_CONQUEROR,
              },
            ];

            const allRoles = repRoles.concat(otherRoles, crownRoles);

            const inputVal = ctx.value.toLowerCase();

            const values = allRoles.filter((role) => role.name.toLowerCase().includes(inputVal));

            const choices = values.map((role) => ({
              name: role.name,
              value: role.value,
            }));

            ctx.respond({ choices });
          },
        },
      ],

      async onBefore(ctx) {
        const canGib = canGibRole(ctx.member as Member);

        if (!canGib) {
          await ctx.editOrRespond({
            content: `You cannot give roles to anyone, not even to yourself ${EMOJIS.PepeKekPoint}`,
          });
          return false;
        }
        return true;
      },

      async run(ctx, args: GiveRoleArgs) {
        let exp = 0;
        let additionalNotes = 'none';
        const selectedRoles = [args.role!];

        exp += repRoleCheck(selectedRoles, args.user!).exp;

        await crownRoleCheck(ctx, selectedRoles, args.user!).then((dataArr) => {
          dataArr.forEach((data) => {
            exp += data.exp;
            additionalNotes = data.notes;
          });
        });

        await abyssRoleCheck(ctx, selectedRoles, args.user!).then((data) => {
          exp += data.exp;
          additionalNotes = data.notes;
        });

        exp += whaleRoleCheck(selectedRoles, args.user!).exp;

        const finalEmb: RequestTypes.CreateChannelMessageEmbed = {
          title: '**Role Given!**',
          color: COLORS.EMBED_COLOR,
          description: `<@&${args.role}> given to <@${args.user?.id}>\nTotal Exp: ${exp}`,
        };

        if (additionalNotes !== 'none') {
          finalEmb.fields?.push({
            name: '**Additional Notes**',
            value: additionalNotes,
          });
        }

        await ctx.editOrRespond({
          embeds: [finalEmb],
        });
        const finalMsg = await ctx.fetchResponse();

        await finalMsg.reply({
          content: `>award <@${args.user}> ${exp}`,
        });
      },
    },
  ],
});
