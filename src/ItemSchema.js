import Realm from 'realm';
import {defaultProperties, getProperties, optionalProperty} from './utils';

export class Teams extends Realm.Object {
  static schema = getProperties('teams', {
    address_: optionalProperty('string'),

    location_accuracy_: 'string',
    team_name_: 'string',

    idOptional: optionalProperty('mixed'),

    template_id_: optionalProperty('string'),

    is_default: optionalProperty('bool'),
    was_deleted: optionalProperty('bool'),

    ...defaultProperties,
  });
}

export class Tasks extends Realm.Object {
  static schema = getProperties('tasks', {
    duration: optionalProperty('mixed'), //  can be double, int, or undefined

    autoAllocationState: optionalProperty('string'),
    customFields: optionalProperty('string'),
    customFieldsConfig: optionalProperty('string'),
    job_address_: optionalProperty('string'),
    job_description_: optionalProperty('string'),
    job_pickup_address: optionalProperty('string'),
    job_status_: 'string',

    order_id: optionalProperty('int'),

    id: optionalProperty('double'),
    idOptional: optionalProperty('double'),
    job_latitude_: optionalProperty('double'),
    job_longitude_: optionalProperty('double'),
    job_pickup_latitude: optionalProperty('double'),
    job_pickup_longitude: optionalProperty('double'),
    agentPrice: optionalProperty('double'),
    taskPrice: optionalProperty('double'),

    team_id_: 'objectId',
    events: optionalProperty('string'),
    fleet_id_: optionalProperty('objectId'),
    route: optionalProperty('string'),
    customer_id_: optionalProperty('objectId'),
    template_id_: optionalProperty('objectId'),

    job_pickup_datetime: optionalProperty('date'),
    lastPauseTime: optionalProperty('date'),
    start_time: optionalProperty('date'),
    end_time: optionalProperty('date'),

    datetime_end_before_: {
      ...optionalProperty('date'),
      default: new Date(),
      optional: false,
    },
    datetime_start_before_: {
      ...optionalProperty('date'),
      default: new Date(),
      optional: false,
    },
    team: {type: 'object', objectType: 'teams'},
    ...defaultProperties,
  });
}

export class Templates extends Realm.Object {
  static schema = getProperties('templates', {
    config: optionalProperty('string'),
    template_name: optionalProperty('string'),

    fields: optionalProperty('string'),

    is_default: optionalProperty('bool'),
    was_deleted: optionalProperty('bool'),
    ...defaultProperties,
  });
}
