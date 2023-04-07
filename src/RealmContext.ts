import {createRealmContext} from '@realm/react';
import {UserRol, Agents, Customers, Fields, Tasks, Teams, Templates} from './ItemSchema';


export const realmContext = createRealmContext({
  schema: [ UserRol, Agents, Customers, Fields, Tasks, Teams, Templates],
});
