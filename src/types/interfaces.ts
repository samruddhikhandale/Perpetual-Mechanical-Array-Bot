import { Constants } from 'detritus-client';
import { Snowflake } from 'detritus-client/lib/constants';
import { ParsedArgs } from 'detritus-client/lib/interaction';
import { Member } from 'detritus-client/lib/structures';

export interface IEvent {
  event: Constants.ClientEvents;
  on?: boolean;
  once?: boolean;
  listener(payload?: any): any;
}

export interface AfterRoleCheck {
  exp: number;
  notes: string;
}

export interface AfterCrownRoleCheck extends AfterRoleCheck {
  crownRole: Snowflake;
}

export interface GiveRoleArgs extends ParsedArgs {
  user?: Member;
  role?: Snowflake;
}
