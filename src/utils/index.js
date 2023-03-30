import {BSON} from 'realm';

export const getProperties = (name, rest) => ({
  name,
  primaryKey: '_id',
  properties: {
    _id: {type: 'objectId', default: () => new BSON.ObjectId()},
    ...rest,
  },
});

export const getDefaultValue = type => {
  switch (type) {
    case 'bool':
      return false;
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'double':
      return 0.0;
    default:
      return undefined;
  }
};

export const optionalProperty = type => ({
  type,
  default: getDefaultValue(type),
  optional: true,
});

export const defaultProperties = {
  createdAt: {type: 'date', default: new Date()},
  updatedAt: {type: 'date', default: new Date()},
  owner_id: 'string',
};

const teams = [
  {
    team_name_: 'lopez',

    idOptional: {
      $numberLong: '1667488279334',
    },
    location_accuracy_: 'Low',
    template_id_: [
      {
        $oid: '635c20e6766bb42c479cd8c2',
      },
      {
        $oid: '6364160bf9d972798e9dce9b',
      },
      {
        $oid: '636042f570a76ea605c8e557',
      },
    ],
  },
  {
    address_: 'awd',
    team_name_: 'Functional Team',
    location_accuracy_: 'High',

    idOptional: {
      $numberLong: '1675877367481',
    },
    template_id_: [],
  },
  {
    address_: 'SDSU, Campanile Drive, San Diego, CA, USA',
    team_name_: 'sadakjdak',
    location_accuracy_: 'High',
  },
  {
    address_: 'Área 51, Nevada, EE. UU.',
    team_name_: 'are 52',
    location_accuracy_: 'High',

    idOptional: '1679449130875s',
    template_id_: [],

    was_deleted: true,
  },
  {
    address_: 'Tesla Giga Texas, Tesla Road, Austin, Texas, EE. UU.',
    team_name_: 'Tester',
    location_accuracy_: 'High',
    idOptional: {
      $numberLong: '1667222742501',
    },
    template_id_: [
      {
        $oid: '6359c17020c5dcc2e925fc36',
      },
      {
        $oid: '6360328c5c7cd68348687845',
      },
    ],
  },
  {
    address_: 'Rivadavia, Buenos Aires, Argentina',
    team_name_: 'with tem',
    location_accuracy_: 'High',
    template_id_: [
      {
        $oid: '6359c17020c5dcc2e925fc36',
      },
      {
        $oid: '6359c1a320c5dcc2e925fc3b',
      },
      {
        $oid: '635aa360eb8f5f3d203532de',
      },
    ],
    idOptional: {
      $numberLong: '1667518091377',
    },
  },
  {
    address_: 'Rivas-Vaciamadrid, España',
    team_name_: 'Template',
    location_accuracy_: 'High',
    template_id_: [
      {
        $oid: '635c20e6766bb42c479cd8c2',
      },
    ],
    idOptional: {
      $numberLong: '1667687443857',
    },
  },
  {
    address_: 'San Francisco, California, EE. UU.',
    team_name_: 'Zal',
    location_accuracy_: 'High',
    template_id_: [
      {
        $oid: '6360328c5c7cd68348687845',
      },
    ],
    idOptional: {
      $numberLong: '1667688973366',
    },
  },
  {
    address_: 'Argentina',
    team_name_: 'testdefault',
    location_accuracy_: 'Low',
    template_id_: [
      {
        $oid: '63e2676180fa8f87a84dfab7',
      },
    ],
    idOptional: {
      $numberLong: '1675888483289',
    },
  },
  {
    address_: 'Dasda Bazar, Tripura, India',
    team_name_: 'asdasdasdasdas',
    location_accuracy_: 'Low',
    template_id_: [
      {
        $oid: '63ab4bf2fe4d80e9b2d385f5',
      },
    ],
    idOptional: {
      $numberLong: '1675958010181',
    },
  },
  {
    address_: 'López Portillo, Coacalco, San Francisco Coacalco, Méx., México',
    team_name_: 'Team auto assig',
    location_accuracy_: 'Low',
    template_id_: [
      {
        $oid: '63e281d6ec90820901dc59eb',
      },
      {
        $oid: '63e2789b485acf58d552bbcb',
      },
      {
        $oid: '63e2676180fa8f87a84dfab7',
      },
      {
        $oid: '63af02fe2643a5ea3d0743fb',
      },
    ],
    idOptional: {
      $numberLong: '1676049347170',
    },
  },
  {
    address_: 'Adelaide Australia Meridional, Australia',
    team_name_: 'NAME',
    location_accuracy_: 'Low',
    template_id_: [
      {
        $oid: '636453ec4623eee367455f33',
      },
    ],
    idOptional: '1676049577008',
  },
  {
    address_: 'Colombia',
    team_name_: 'sdfsdfsdf',
    location_accuracy_: 'Low',
    idOptional: '1678912313104s',
    template_id_: [
      {
        $oid: '63ab4bf2fe4d80e9b2d385f5',
      },
      {
        $oid: '6360347270a76ea605c8e1b1',
      },
    ],
  },
  {
    address_: 'Puerto Rico',
    team_name_: 'rere',
    location_accuracy_: 'Low',
    idOptional: '1679015736995s',
    template_id_: [
      {
        $oid: '63ebd969f26c090b4f2b3fd6',
      },
      {
        $oid: '636458bf9368203c8f6cac39',
      },
      {
        $oid: '6360347270a76ea605c8e1b1',
      },
      {
        $oid: '63e41578d5171d80bcdadfa3',
      },
    ],

    was_deleted: true,
  },
  {
    address_: 'RWE Platz, Essen, Alemania',
    team_name_: 'rewrew',
    location_accuracy_: 'Low',
    idOptional: '1679015736995s',
    template_id_: [],
  },
  {
    address_: 'Puerto Rico',
    team_name_: 'default_team',
    location_accuracy_: 'Low',
    idOptional: '1679506268559s',
    template_id_: [],

    is_default: true,
  },
  {
    address_: 'Teramo, Italia',
    team_name_: 'delteam',
    location_accuracy_: 'Low',
    idOptional: '1679595804517s',
    template_id_: [],
    is_default: false,
    was_deleted: true,
  },
];

const templates = [
  {
    fields: [
      {
        $oid: '6359c17020c5dcc2e925fc34',
      },
      {
        $oid: '63646158e6810987ea449135',
      },
    ],
    template_name: 'awd',

    config: {},
    was_deleted: true,
  },
  {
    fields: [
      {
        $oid: '6359c1a320c5dcc2e925fc39',
      },
    ],
    template_name: 'awd',
    config: {},

    was_deleted: true,
  },
  {
    fields: [
      {
        $oid: '6359e05ef87512bcff1fabfe',
      },
    ],
    template_name: 'NT',
    config: {},
  },
  {
    fields: [
      {
        $oid: '635aa35feb8f5f3d203532dd',
      },
      {
        $oid: '635aa381eb8f5f3d203532ed',
      },
    ],
    template_name: 'fsfasdfasd',
  },
  {
    fields: [
      {
        $oid: '635bd08ce6f7a72a608bebb1',
      },
    ],
    template_name: 'New axios',
  },
  {
    fields: [
      {
        $oid: '635c20a9766bb42c479cd8af',
      },
    ],
    template_name: 'New axios',
  },
  {
    fields: [
      {
        $oid: '635c210f766bb42c479cd8f9',
      },
      {
        $oid: '635c210f766bb42c479cd8fa',
      },
    ],
    template_name: 'NT',
  },
  {
    fields: [
      {
        $oid: '6360328c5c7cd68348687844',
      },
    ],
    template_name: 'BLue',
    idOptional: {
      $numberLong: '1667248780295',
    },

    config: {
      autoAllocation: {
        $oid: '6386323440d7981969c1a47f',
      },
      priceRuleTask: null,
      priceRuleAgent: null,
      notification: null,
      _id: {
        $oid: '641de14e6bd1a552b8c7bc32',
      },
    },
  },
  {
    fields: [
      {
        $oid: '63603380c2e4afff5483defb',
      },
      {
        $oid: '63603380c2e4afff5483defc',
      },
    ],
    template_name: 'Nial',
    idOptional: {
      $numberLong: '1667249025034',
    },

    config: {},
  },
  {
    fields: [
      {
        $oid: '6360347270a76ea605c8e1b0',
      },
      {
        $oid: '6362bd041e8ac568afd6536f',
      },
      {
        $oid: '6362bd4a1e8ac568afd6539f',
      },
      {
        $oid: '6362bd4a1e8ac568afd653a0',
      },
    ],
    template_name: 'template form',
    idOptional: {
      $numberLong: '1667249266989',
    },
  },
  {
    fields: [
      {
        $oid: '636042f570a76ea605c8e556',
      },
      {
        $oid: '63617d86d6474399f177e15f',
      },
    ],
    template_name: 'simple conditional',
    idOptional: {
      $numberLong: '1667252981125',
    },
  },
  {
    fields: [
      {
        $oid: '636459d89368203c8f6cacf2',
      },
      {
        $oid: '636453ec4623eee367455f32',
      },
      {
        $oid: '636459fd9368203c8f6cad32',
      },
      {
        $oid: '63645a139368203c8f6cad3f',
      },
      {
        $oid: '63645c24e6810987ea449013',
      },
      {
        $oid: '63645c89e6810987ea44907c',
      },
      {
        $oid: '63738c347494f68c3b7cebe2',
      },
      {
        $oid: '6373a5757494f68c3b7cf267',
      },
      {
        $oid: '6373dac37494f68c3b7cf93c',
      },
      {
        $oid: '6373dac37494f68c3b7cf93d',
      },
      {
        $oid: '6376aaf2037c0ef7aaaeecc0',
      },
      {
        $oid: '6376b879037c0ef7aaaeee1f',
      },
    ],
    template_name: 'Template OTPs',
    config: {
      autoAllocation: null,
      priceRuleTask: null,
      priceRuleAgent: null,
      notification: {
        $oid: '63878bd6ae479cfa4444b375',
      },
      _id: {
        $oid: '640b3d0f318918ccd8a4e38d',
      },
    },
    idOptional: {
      $numberLong: '1667519468320',
    },
  },
  {
    fields: [
      {
        $oid: '636458bf9368203c8f6cac38',
      },
      {
        $oid: '63efc63b1591d6834804f158',
      },
      {
        $oid: '63fe5fb7a9c9eb4a3ae1171d',
      },
      {
        $oid: '640a8af4318918ccd8a4b004',
      },
    ],
    template_name: 'Tempalte with no OTP',
    config: {
      autoAllocation: null,
      priceRuleTask: null,
      priceRuleAgent: null,
      notification: null,
      _id: {
        $oid: '640a8af4318918ccd8a4b006',
      },
    },
    idOptional: {
      $numberLong: '1667520703383',
    },
  },
  {
    fields: [],
    template_name: 'NEW ARG',
    config: {
      needOtp: false,
      priceRuleAgent: '638787080c35ccdc00fd9abb',
      autoAllocation: '6386323440d7981969c1a47f',
      notification: '63878bd6ae479cfa4444b375',
    },
    idOptional: {
      $numberLong: '1669829779175',
    },
  },
  {
    fields: [
      {
        $oid: '6388ff2255c9a2ec26627f71',
      },
      {
        $oid: '6388c32f40c66a986acc6ae0',
      },
      {
        $oid: '638f7c8b5a06b30849d00adf',
      },
      {
        $oid: '639888c258caa5596ec5705c',
      },
      {
        $oid: '63ab4f80fe4d80e9b2d392ec',
      },
    ],
    template_name: 'Z Send to ALL',
    config: {
      needOtp: false,
      autoAllocation: '63863636ecf0b43fe87bf350',
      notification: '63878bd6ae479cfa4444b375',
      priceRuleAgent: '638787080c35ccdc00fd9abb',
      priceRuleTask: '638638ada769f7e72244c11e',
    },
    idOptional: {
      $numberLong: '1669907230777',
    },
  },
  {
    fields: [
      {
        $oid: '63a5c67bc4bd04b99b0260a3',
      },
      {
        $oid: '63ab4fa4fe4d80e9b2d392f8',
      },
      {
        $oid: '63ab4fa4fe4d80e9b2d392f9',
      },
      {
        $oid: '63ab505bfe4d80e9b2d39536',
      },
    ],
    template_name: 'Z ONE BY ONE',
    config: {
      needOtp: false,
      autoAllocation: '63862d3540d7981969c1a3cd',
      notification: '6385050135108af0bddd6fbb',
      priceRuleAgent: '638787080c35ccdc00fd9abb',
      priceRuleTask: '63864635c2da24925d32b39b',
    },
    idOptional: {
      $numberLong: '1671807842736',
    },
  },
  {
    fields: [
      {
        $oid: '63ab4bf2fe4d80e9b2d385f4',
      },
      {
        $oid: '63ab4d50fe4d80e9b2d38984',
      },
    ],
    template_name: 'Z NEAREST',
    config: {
      needOtp: false,
      autoAllocation: '6386323440d7981969c1a47f',
      notification: '638504e135108af0bddd6fb9',
      priceRuleAgent: '63861acb40d7981969c1a1af',
      priceRuleTask: '638638ada769f7e72244c11e',
    },
    idOptional: {
      $numberLong: '1672170482283',
    },
  },
  {
    fields: [
      {
        $oid: '63af02fe2643a5ea3d0743fa',
      },
      {
        $oid: '63b47c1b26eeb18d1c502fcf',
      },
      {
        $oid: '63b47c1b26eeb18d1c502fd0',
      },
      {
        $oid: '63e13f01d940f9856bdc3cde',
      },
    ],
    template_name: 'ZZ NUEVO',
    config: {
      autoAllocation: {
        $oid: '63863636ecf0b43fe87bf350',
      },
      priceRuleTask: {
        $oid: '63864635c2da24925d32b39b',
      },
      priceRuleAgent: {
        $oid: '63861acb40d7981969c1a1af',
      },
      notification: {
        $oid: '638504e135108af0bddd6fb9',
      },
      _id: {
        $oid: '63e69c0171c84cd82732747a',
      },
    },
    idOptional: {
      $numberLong: '1672413950781',
    },
  },
  {
    fields: [
      {
        $oid: '63da9b67c8a4ae53d90740d4',
      },
      {
        $oid: '63da9b67c8a4ae53d90740d5',
      },
      {
        $oid: '63da9b67c8a4ae53d90740d6',
      },
      {
        $oid: '63da9b67c8a4ae53d90740d7',
      },
      {
        $oid: '63da9b67c8a4ae53d90740d8',
      },
      {
        $oid: '63da9b67c8a4ae53d90740d9',
      },
    ],
    template_name: 'Multiples test',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '63863636ecf0b43fe87bf350',
      },
      priceRuleTask: {
        $oid: '638638ada769f7e72244c11e',
      },
      priceRuleAgent: {
        $oid: '638787080c35ccdc00fd9abb',
      },
      notification: {
        $oid: '63878bd6ae479cfa4444b375',
      },
      _id: {
        $oid: '63da9b68c8a4ae53d90740db',
      },
    },
    idOptional: {
      $numberLong: '1675271016026',
    },
  },
  {
    fields: [
      {
        $oid: '63e2676180fa8f87a84dfab6',
      },
    ],
    template_name: 'znotification test',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '63863636ecf0b43fe87bf350',
      },
      priceRuleTask: {
        $oid: '638638ada769f7e72244c11e',
      },
      priceRuleAgent: {
        $oid: '638787080c35ccdc00fd9abb',
      },
      notification: {
        $oid: '63e2670780fa8f87a84dfab0',
      },
      _id: {
        $oid: '63e2676180fa8f87a84dfab8',
      },
    },
    idOptional: {
      $numberLong: '1675781985444',
    },
  },
  {
    fields: [
      {
        $oid: '63e281d6ec90820901dc59ea',
      },
      {
        $oid: '63ed269b0283ceb33ffb75aa',
      },
      {
        $oid: '63ed269b0283ceb33ffb75ab',
      },
      {
        $oid: '63fe62eaa9c9eb4a3ae11af7',
      },
    ],
    template_name: 'ZZZZZZTestet',
    config: {
      autoAllocation: {
        $oid: '6388c6d493ff75d65fc3dfc0',
      },
      priceRuleTask: {
        $oid: '6386484d2c36d8e4035e6cb1',
      },
      priceRuleAgent: {
        $oid: '63861acb40d7981969c1a1af',
      },
      notification: {
        $oid: '63e281bfec90820901dc59e4',
      },
      _id: {
        $oid: '63fe638ca9c9eb4a3ae121cc',
      },
    },
    idOptional: {
      $numberLong: '1675788758725',
    },
  },
  {
    fields: [
      {
        $oid: '63e41578d5171d80bcdadf97',
      },
      {
        $oid: '63e41578d5171d80bcdadf98',
      },
      {
        $oid: '63e41578d5171d80bcdadf99',
      },
      {
        $oid: '63e41578d5171d80bcdadf9a',
      },
      {
        $oid: '63e41578d5171d80bcdadf9b',
      },
      {
        $oid: '63e41578d5171d80bcdadf9c',
      },
      {
        $oid: '63e41578d5171d80bcdadf9d',
      },
      {
        $oid: '63e41578d5171d80bcdadf9e',
      },
      {
        $oid: '63e41578d5171d80bcdadf9f',
      },
      {
        $oid: '63e41578d5171d80bcdadfa0',
      },
      {
        $oid: '63e41578d5171d80bcdadfa1',
      },
      {
        $oid: '63e41578d5171d80bcdadfa2',
      },
    ],
    template_name: 'Template OTPs (copy)',
    idOptional: {
      $numberLong: '1667519468320',
    },
    config: {
      needOtp: true,
      _id: {
        $oid: '63e41577d5171d80bcdadf94',
      },
    },
  },
  {
    fields: [
      {
        $oid: '63e5167c0db7be411333b409',
      },
    ],
    template_name: 'safasdfasdfasdf',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '63863636ecf0b43fe87bf350',
      },
      priceRuleTask: {
        $oid: '638638ada769f7e72244c11e',
      },
      priceRuleAgent: {
        $oid: '63861acb40d7981969c1a1af',
      },
      notification: {
        $oid: '6387664e1eb0980c9155b809',
      },
      _id: {
        $oid: '63e5167c0db7be411333b40b',
      },
    },
    idOptional: {
      $numberLong: '1675957884384',
    },
  },
  {
    fields: [
      {
        $oid: '63e67f83e41c9a1c96768f5b',
      },
    ],
    template_name: 'awdawd',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '63862d3540d7981969c1a3cd',
      },
      priceRuleTask: {
        $oid: '63864635c2da24925d32b39b',
      },
      priceRuleAgent: {
        $oid: '63861acb40d7981969c1a1af',
      },
      notification: {
        $oid: '63876a412684d343c1db4c1f',
      },
      _id: {
        $oid: '63e67f83e41c9a1c96768f5d',
      },
    },
    idOptional: {
      $numberLong: '1676050307788',
    },

    was_deleted: true,
  },
  {
    fields: [
      {
        $oid: '63ebd969f26c090b4f2b3fd4',
      },
      {
        $oid: '63ebd969f26c090b4f2b3fd5',
      },
    ],
    template_name: 'simple conditional (copy)',
    idOptional: {
      $numberLong: '1667252981125',
    },
  },
  {
    fields: [
      {
        $oid: '641464a2f222d1a59b2e9a77',
      },
      {
        $oid: '641464a2f222d1a59b2e9a79',
      },
      {
        $oid: '641464a2f222d1a59b2e9a78',
      },
    ],
    template_name: 'axy',
    idOptional: '1679015736997s',
    config: {
      autoAllocation: null,
      priceRuleTask: null,
      priceRuleAgent: null,
      notification: null,
      _id: {
        $oid: '641464bbf222d1a59b2e9acf',
      },
    },

    was_deleted: true,
  },
  {
    fields: [
      {
        $oid: '6414ae7444e127e1b30b45d6',
      },
    ],
    template_name: 'WITH S',
    idOptional: '1679076603358s',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '63ebdfa32a7ee483b1a6fb15',
      },
      priceRuleTask: {
        $oid: '6386484d2c36d8e4035e6cb1',
      },
      priceRuleAgent: {
        $oid: '640b8e53318918ccd8a4e776',
      },
      notification: {
        $oid: '63876a412684d343c1db4c1f',
      },
      _id: {
        $oid: '6414ae7444e127e1b30b45d8',
      },
    },
  },
  {
    fields: [
      {
        $oid: '64187eeb1310f45de2b31d62',
      },
    ],
    template_name: 'CVS On Demand',
    idOptional: '1679163452567s',
    config: {
      needOtp: true,
      autoAllocation: {
        $oid: '64187aa31310f45de2b31c37',
      },
      priceRuleTask: {
        $oid: '64187dc41310f45de2b31cc5',
      },
      priceRuleAgent: {
        $oid: '64187e3b1310f45de2b31cee',
      },
      notification: {
        $oid: '64187ccc1310f45de2b31c88',
      },
      _id: {
        $oid: '64187eeb1310f45de2b31d64',
      },
    },
  },
  {
    fields: [
      {
        $oid: '641b640ee53114e63c59b606',
      },
    ],
    template_name: 'default_template',
    idOptional: '1679506268567s',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '641b63a4e53114e63c59b561',
      },
      priceRuleTask: {
        $oid: '641b63eee53114e63c59b5dc',
      },
      priceRuleAgent: {
        $oid: '641b63dee53114e63c59b5b3',
      },
      notification: {
        $oid: '641b63bae53114e63c59b58a',
      },
      _id: {
        $oid: '641b640ee53114e63c59b608',
      },
    },
  },
  {
    fields: [
      {
        $oid: '641c931cf5cf225ec6abf972',
      },
    ],
    template_name: 'templatefordelete',
    idOptional: '1679594252938s',
    config: {
      needOtp: false,
      autoAllocation: {
        $oid: '641b63a4e53114e63c59b561',
      },
      priceRuleTask: {
        $oid: '641b63eee53114e63c59b5dc',
      },
      priceRuleAgent: {
        $oid: '641b63dee53114e63c59b5b3',
      },
      notification: {
        $oid: '641b63bae53114e63c59b58a',
      },
      _id: {
        $oid: '641c931cf5cf225ec6abf974',
      },
    },
    is_default: false,
    was_deleted: true,
  },
];

export const getRandomTeam = () => {
  const randomIndex = Math.floor(Math.random() * teams.length);
  return teams[randomIndex];
};

export const geteRandomTemplate = () => {
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
};
