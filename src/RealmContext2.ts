import {createRealmContext} from '@realm/react';
import {Tasks, Agents,  UserRol, Teams, Templates} from './ItemSchema2';

export const realmContext = createRealmContext({
  schema: [Tasks, Agents, UserRol, Teams, Templates],
});
