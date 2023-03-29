import {BSON} from 'realm';
import Realm from 'realm';

export class Task extends Realm.Object {
  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      address: {type: 'string', optional: true},
    },
  };
}

export class Item extends Realm.Object {
  static schema = {
    name: 'Item',
    primaryKey: '_id',
    properties: {
      // This allows us to automatically generate a unique _id for each Item
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      owner_id: 'string',
      summary: 'string',
      customFields: {type: 'string', optional: true},
      task: {
        type: 'object',
        objectType: 'Task',
      },
    },
  };
}
