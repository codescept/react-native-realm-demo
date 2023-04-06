import Realm from 'realm';
import {defaultProperties, getProperties, optionalProperty} from './utils';

export class Agents extends Realm.Object {
  static schema = getProperties('agents', {
    //Strings:
    first_name_: optionalProperty('string'),
    last_name_: optionalProperty('string'),
    address_: optionalProperty('string'),
    username_: optionalProperty('string'),
    email_: optionalProperty('string'),
    latitude: optionalProperty('string'),
    longitude: optionalProperty('string'),
    phone_: optionalProperty('string'),
    fleet_image: optionalProperty('string'),
    transport_type_: optionalProperty('string'),
    idOptional: optionalProperty('string'),
    transport_desc_: optionalProperty('string'),
    password_: optionalProperty('string'),

    //Numbers:
    is_active: optionalProperty('int'),
    is_available: optionalProperty('int'),
    status_: optionalProperty('int'),
    __v: optionalProperty('int'),

    // bool:
    was_deleted: optionalProperty('bool'),

    //date:
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),

    // Tipo Array ?????
    tags_: {type: 'list', objectType: 'string', default: []},

    // relacion 1:1
    user_role_: {type: 'object', objectType: 'agent_rols', optional: true},
    //team_id_:  {type: 'objectId[]', objectType: 'teams', optional: true},
    //template_id_1: {type: 'objectId[]', objectType: 'templates', optional: true},
    // team_id_: optionalProperty('objectId[]'), // type Array of Objects of Team,
    team_id_: {type: 'list', objectType: 'teams', default: []},
    template_id_: {type: 'list', objectType: 'templates', default: []},
    // template_id_: optionalProperty('objectId[]'),
  });
}

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
export class UserRol extends Realm.Object {
  static schema = getProperties('agent_rols', {
    //Strings:
    agentRol_name: optionalProperty('string'),
    idOptional: optionalProperty('string'),

    //Numbers:
    __v: optionalProperty('int'),

    // bool:
    create_task: optionalProperty('bool'),
    update_profile: optionalProperty('bool'),
    view_open_tasks: optionalProperty('bool'),
    on_hold_buttom: optionalProperty('bool'),
    map_view: optionalProperty('bool'),
    is_default: optionalProperty('bool'),

    //date:
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),
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

    //team_id_: 'objectId',
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
    team_id_: {type: 'object', objectType: 'teams'},
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
