import {createRealmContext} from '@realm/react';
import {
  UserRol,
  Agents,
  Customers,
  Fields,
  Tasks,
  Teams,
  Templates,
  Events,
  Route,
  CustomFieldConfig,
  Coords,
} from './ItemSchema';

export const realmContext = createRealmContext({
  schema: [
    UserRol,
    Agents,
    Customers,
    Fields,
    Tasks,
    Teams,
    Templates,
    Events,
    CustomFieldConfig,
    Route,
    Coords,
  ],
});
