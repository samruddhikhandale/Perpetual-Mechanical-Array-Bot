import { Colors, Snowflake } from 'detritus-client/lib/constants';
import { ElementDamageCategories } from '../botTypes/types';

function formatEmoji(EmojiSnowflake: Snowflake) {
  return `<:_:${EmojiSnowflake}>`;
}

export enum TravelerTypes {
  ANEMO = 'Anemo Traveler',
  GEO = 'Geo Traveler',
  ELECTRO = 'Electro Traveler',
  DENDRO = 'Dendro Traveler',
  HYDRO = 'Hydro Traveler',
  PYRO = 'Pyro Traveler',
  CRYO = 'Cryo Traveler',
  UNIVERSAL = 'Universal Traveler',
  UNALIGNED = 'Unaligned Traveler',
}

export const EleDmgCategoriesArr: ElementDamageCategories[] = [
  'anemo-dmg-skill',
  'geo-dmg-skill',
  'electro-dmg-skill',
  'uni-dmg-n5',
];

export enum ICONS {
  COPIUM = 'https://cdn.discordapp.com/emojis/897176156057518130.webp?&quality=lossless',
  VOID = 'https://cdn.discordapp.com/emojis/886587673408569394.png?v=1',
  ANEMO = 'https://cdn.discordapp.com/emojis/803516622772895764.webp?&quality=lossless',
  ELECTRO = 'https://cdn.discordapp.com/emojis/803516644923146260.webp?&quality=lossless',
  GEO = 'https://cdn.discordapp.com/emojis/803516612430135326.webp?&quality=lossless',
  PALM_VORTEX_AETHER = 'https://cdn.discordapp.com/emojis/840965851199832087.png?v=1',
  STARFELL_SWORD_LUMINE = 'https://cdn.discordapp.com/emojis/840965876370112532.png?v=1',
  LIGHTENING_BLADE_AETHER = 'https://cdn.discordapp.com/attachments/817208583988051999/886635086362071040/ElectroAether3.png',
  SPIRAL_ABYSS = 'https://cdn.discordapp.com/emojis/806999511096361031.png?v=1',
  CHECK_MARK = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/check-mark-button_2705.png',
  CROSS_MARK = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/cross-mark_274c.png',
  MASANORI = 'https://cdn.discordapp.com/attachments/825749528275189760/954657244157452348/250.png',
}

export enum COLORS {
  EMBED_COLOR = 0xe0d1bd,
  INVISIBLE = 0x2f3136,
  BLURPLE = Colors.BLURPLE,
  ANEMO = 0x00ffcc,
  GEO = 0xfce200,
  ELECTRO = 0xa500ff,
  UNALIGNED = 0x01152d,
  UNIVERSAL = 0xfffffd,
  ERROR = 0xff0033,
  SUCCESS = 0x00c455,
}

export const EMOJIS = {
  HmmMine: formatEmoji('830243258960838717'),
  HmmTher: formatEmoji('830243224105779290'),
  BoreasKek: formatEmoji('829620211190595605'),
  AetherBonk: formatEmoji('821169357765345291'),
  LuminePadoru: formatEmoji('912033737280192562'),
  PepeKekPoint: formatEmoji('849624262625198131'),
  AetherNoU: formatEmoji('905099437767024712'),
  GoosetherConfuse: formatEmoji('907307618677178368'),
  FakeNooz: formatEmoji('865259265471152138'),
  pepeduck: formatEmoji('907293876073680946'),
  AntiHornyElixir: formatEmoji('810751842883207168'),
  AetherBruh: formatEmoji('813355624796520478'),
  AetherYikes: formatEmoji('810278255336489020'),
  Keqing_No: formatEmoji('804883023723233321'),
  AetherMAD_REEE: formatEmoji('865476945427824690'),
  LumineMAD_REEE: formatEmoji('814814997196308491'),
  LuminePanic: formatEmoji('814883112998666241'),
  TarouAngy: formatEmoji('854040153555468329'),
};

export enum ChannelIds {
  ARCHIVES = '806110144110919730',
  CONFESSIONS = '938763983551356928',
  BOT_SPAM = '804253204291387422',
  COMMAND_CENTER = '803488949254225960',
  MUSIC_BOT_SPAM = '803534858189668372',
  PING_CELESTIA = '841941486034878464',
  SHOWCASE = '876121506680287263',
}

export namespace STAFF {
  export enum ADMIN {
    EMERITUS_KNIGHT = '930313822911217674',
    SERVER_ADMIN = '813605549907378186',
  }
  export enum MODS {
    HONORARY_KNIGHT = '803429256758820916',
    GUILD_EMISSARIES = '814338717703471135',
  }
  export enum HELPERS {
    GAME_DIRECTOR = '821571314543624232',
    SERVER_STAFF = '828537737330163732',
    KNIGHT_RECRUIT = '825108492582649877',
    BOT_DEV = '892956048640602122',
  }
}

export const STAFF_ARRAY = [
  ...Object.values(STAFF.ADMIN),
  ...Object.values(STAFF.HELPERS),
  ...Object.values(STAFF.MODS),
];

export namespace ROLE_IDS {
  export enum OTHERS {
    ARCHONS = '813613841488936971',
    ABYSSAL_CONQUEROR = '804225878685908992',
    WHALE = '804010525411246140',
  }

  export enum REPUTATION {
    MONDSTADT = '804595515437613077',
    LIYUE = '804595502960214026',
    INAZUMA = '809026481112088596',
  }
  export enum CROWN {
    ANEMO = '815938264875532298',
    GEO = '816210137613205554',
    ELECTRO = '856509454970781696',
    UNALIGNED = '859430358419243038',
  }
}

const REP_ROLES = [
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

const CROWN_ROLES = [
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
    value: ROLE_IDS.CROWN.UNALIGNED,
  },
];

const OTHER_ROLES = [
  {
    name: 'Affluent Adventurer 💰',
    value: ROLE_IDS.OTHERS.WHALE,
  },
  {
    name: 'Abyssal Conqueror 🌀',
    value: ROLE_IDS.OTHERS.ABYSSAL_CONQUEROR,
  },
];

export const ACH_ROLES = [REP_ROLES, OTHER_ROLES, CROWN_ROLES].flat();

export const ABYSS_QUOTES = [
  '*You stare into the abyss and you feel some presence staring over you*',
  '*Darkness beseech upon the emptiness of the void, howling and yet nothing calls back*',
  '*The path of the Copium ends here, Your journey has come to an end*',
  '*The darkness breaks upon the dawning night, the night sky bleaks upon the emptiness*',
  '*Well.. thats it folks*',
  '*When you stare into the Abyss*\n*The Abyss stars back at you*',
  'https://tenor.com/view/john-cena-cena-are-you-sure-are-you-sure-about-that-are-you-sure-about-that-meme-gif-23133134',
  'https://tenor.com/view/staring-into-space-gif-8743533',
  'https://tenor.com/view/stare-into-the-abyss-the-grinch-jim-carrey-how-the-grinch-stole-christmas-stare-into-nothingness-gif-18820322',
  'https://tenor.com/view/cave-dive-darkness-leap-gif-5803442',
  'https://tenor.com/view/full-bore-and-into-the-abyss-davy-jones-abyss-dark-bore-gif-22332324',
];
