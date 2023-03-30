import {createRealmContext} from '@realm/react';
import {Tasks, Teams, Templates} from './ItemSchema';

export const realmContext = createRealmContext({
  schema: [Tasks, Templates, Teams],
});
