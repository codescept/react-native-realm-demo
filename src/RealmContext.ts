import {createRealmContext} from '@realm/react';
import {Agents, Tasks, Teams, Templates, UserRol} from './ItemSchema';

export const realmContext = createRealmContext({
  schema: [Teams, Templates, Tasks, UserRol, Agents],
});
