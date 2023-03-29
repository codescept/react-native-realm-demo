import {createRealmContext} from '@realm/react';
import {Task, Item} from './ItemSchema';

export const realmContext = createRealmContext({
  schema: [Item, Task],
});
