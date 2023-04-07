import Realm from 'realm';
import {defaultProperties, getProperties, optionalProperty} from './utils';

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

export class Customers extends Realm.Object {
  static schema = getProperties('customers', {
    //Strings:
    customer_email_: optionalProperty('string'),
    customer_address_: optionalProperty('string'),
    customer_latitude_: optionalProperty('string'),
    customer_longitude_: optionalProperty('string'),
    customer_phone_: optionalProperty('string'),
    customer_username_: optionalProperty('string'),
    idOptional: optionalProperty('string'),

    //Numbers:
    __v: optionalProperty('int'),

    // bool:
    is_form_user_: optionalProperty('bool'),
    was_deleted: optionalProperty('bool'),

    // date
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),

    // Tipo Array
    tags_: {type: 'list', objectType: 'string', default: []},
  });
}

export class Fields extends Realm.Object {
  static schema = getProperties('fields', {
    //Strings:
    agent_can: optionalProperty('string'),
    field_name: optionalProperty('string'),
    field_type: optionalProperty('string'),
    field_value: optionalProperty('string'),
    is_mandatory: optionalProperty('string'),
    value: optionalProperty('string'),
    idOptional: optionalProperty('string'),

    //Numbers:
    __v: optionalProperty('int'),

    // date
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),

    //array
    child_items_string: optionalProperty('string'), // here we'll be saving the data using stringify.
  });
}

export class Tasks extends Realm.Object {
  static schema = getProperties('tasks', {
    //strings
    autoAllocationState: optionalProperty('string'),
    job_address_: optionalProperty('string'),
    job_description_: optionalProperty('string'),
    job_pickup_address: optionalProperty('string'),
    idOptional: optionalProperty('string'),
    job_status_: optionalProperty('string'),

    //numbers
    order_id: optionalProperty('int'),
    duration: optionalProperty('double'),
    job_latitude_: optionalProperty('double'),
    job_longitude_: optionalProperty('double'),
    job_pickup_latitude: optionalProperty('double'),
    job_pickup_longitude: optionalProperty('double'),
    agentPrice: optionalProperty('double'),
    taskPrice: optionalProperty('double'),

    customFieldsConfig: {
      type: 'object',
      objectType: 'customFieldConfig',
      optional: true,
    },

    // list
    events: {type: 'list', objectType: 'events', default: []},
    route: {type: 'list', objectType: 'route', default: []},
    // customFields: {
    //   type: 'list',
    //   objectType: 'object',
    //   default: [],
    //   optional: true,
    // }, // TODO: remove it  ,

    customFields_: optionalProperty('string'),

    //objects 1:1
    team_id_: {type: 'object', objectType: 'teams', optional: true},
    customer_id_: {type: 'object', objectType: 'customers', optional: true},
    template_id_: {type: 'object', objectType: 'templates', optional: true},

    //date
    job_pickup_datetime: optionalProperty('date'),
    lastPauseTime: optionalProperty('date'),
    start_time: optionalProperty('date'),
    end_time: optionalProperty('date'),
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),
    //datetime_end_before_:  optionalProperty('date'),
    //datetime_start_before_:  optionalProperty('date'),

    // 1:!
    team_id_: {type: 'object', objectType: 'teams'},
    ...defaultProperties,
  });
}
export class CustomFieldConfig extends Realm.Object {
  static schema = {
    name: 'customFieldConfig',
    embedded: true,
    properties: {
      needOtp: optionalProperty('bool'),
      otp: optionalProperty('int'),
      autoAllocation: optionalProperty('objectId'),
      priceRuleTask: optionalProperty('objectId'),
      priceRuleAgent: optionalProperty('objectId'),
      notification: optionalProperty('objectId'),
    },
  };
}
export class Route extends Realm.Object {
  static schema = {
    name: 'route',
    embedded: true,
    properties: {
      latitude: optionalProperty('double'),
      longitude: optionalProperty('double'),
      date: optionalProperty('date'),
    },
  };
}
export class Events extends Realm.Object {
  static schema = {
    name: 'events',
    embedded: true,
    properties: {
      title: optionalProperty('string'),
      start: optionalProperty('date'),
      description: optionalProperty('string'),
      author: optionalProperty('string'),
      device: optionalProperty('string'),
    },
  };
}

export class Teams extends Realm.Object {
  static schema = getProperties('teams', {
    address_: optionalProperty('string'),
    location_accuracy_: optionalProperty('string'),
    team_name_: optionalProperty('string'),
    idOptional: optionalProperty('string'),

    //Array
    template_id_: {type: 'list', objectType: 'templates', default: []},

    // int
    __v: optionalProperty('int'),

    //bool
    is_default: optionalProperty('bool'),
    was_deleted: optionalProperty('bool'),
    //date:
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),
  });
}

export class Templates extends Realm.Object {
  static schema = getProperties('templates', {
    //string
    template_name: optionalProperty('string'),
    idOptional: optionalProperty('string'),

    //numbers
    __v: optionalProperty('int'),

    //mixed
    config: optionalProperty('mixed'),

    //list 1:1
    fields: {type: 'list', objectType: 'fields', default: []},

    // bool
    is_default: optionalProperty('bool'),
    was_deleted: optionalProperty('bool'),

    //date:
    createdAt: optionalProperty('date'),
    updatedAt: optionalProperty('date'),
  });
}
