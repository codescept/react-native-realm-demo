import {useUser} from '@realm/react';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Switch, Text, View} from 'react-native';
import {Button, Icon, ListItem, Overlay} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BSON} from 'realm';

import {CreateToDoPrompt} from './CreateToDoPrompt';
import {realmContext} from './RealmContext';

import {COLORS} from './Colors';
import {
  UserRol,
  Agents,
  Customers,
  Fields,
  Tasks,
  Teams,
  Templates,
} from './ItemSchema';
import {geteRandomTemplate, getRandomTeam} from './utils';

const {useRealm, useQuery} = realmContext;

const useRolSubscriptionName = 'agent_rols';
const ownuseRolSubscriptionName = 'ownAgent_rols';

const agentsSubscriptionName = 'agents';
const ownagentsSubscriptionName = 'ownAgents';

const customersSubscriptionName = 'Customers';
const ownCustomersSubscriptionName = 'ownCustomers';

const fieldsSubscriptionName = 'Fields';
const ownFieldsSubscriptionName = 'ownFields';

const tasksSubscriptionName = 'tasks';
const ownTasksSubscriptionName = 'ownTasks';

const teamsSubscriptionName = 'teams';
const ownTeamsSubscriptionName = 'ownTeams';

const templatesSubscriptionName = 'templates';
const ownTemplatesSubscriptionName = 'ownTemplates';

export function ItemListView() {
  const realm = useRealm();

  //Syncs:
  const items_userRol = useQuery(UserRol).sorted('_id');
  const items_agents = useQuery(Agents);
  const items_customers = useQuery(Customers);
  const items_fields = useQuery(Fields);
  const items_tasks = useQuery(Tasks).sorted('_id');
  const items_teams = useQuery(Teams).sorted('_id');
  const items_templates = useQuery(Templates);

  // const {
  //   data: items,
  //   status,
  //   error,
  // } = useQuery('name_of_the_collection', collection =>
  //   collection.find({}, {limit: 10, skip: 20}),
  // );

  // console.log(
  //   'FETCH: agents_rols: ',
  //   JSON.parse(JSON.stringify(items_userRol)),
  // );
  console.log('FETCH: agents: ', JSON.parse(JSON.stringify(items_agents)));

  // console.log(
  //   'FETCH: customers: ',
  //   JSON.parse(JSON.stringify(items_customers)),
  // );
  // console.log('FETCH: fields: ', JSON.parse(JSON.stringify(items_fields)));
  // console.log('FETCH: tasks: ', JSON.parse(JSON.stringify(items_tasks)));
  // console.log('FETCH: teams: ', JSON.parse(JSON.stringify(items_teams)));
  // console.log(
  //   'FETCH: templates: ',
  //   JSON.parse(JSON.stringify(items_templates)),
  // );

  const user = useUser();
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);
  const [showAllItems, setShowAllItems] = useState(
    !!realm.subscriptions.findByName(tasksSubscriptionName),
  );

  // realm.addListener('change', error => console.log({error}));

  useEffect(() => {
    //UserRols
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownuseRolSubscriptionName);
        mutableSubs.add(realm.objects('agent_rols'), {
          name: useRolSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(useRolSubscriptionName);
        mutableSubs.add(realm.objects('agent_rols'), {
          name: ownuseRolSubscriptionName,
        });
      });
    }

    //Agents
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownagentsSubscriptionName);
        mutableSubs.add(realm.objects(Agents), {
          name: agentsSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(agentsSubscriptionName);
        mutableSubs.add(realm.objects(Agents), {
          name: ownagentsSubscriptionName,
        });
      });
    }

    //Customers
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownCustomersSubscriptionName);
        mutableSubs.add(realm.objects(Customers), {
          name: customersSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(customersSubscriptionName);
        mutableSubs.add(realm.objects(Customers), {
          name: ownCustomersSubscriptionName,
        });
      });
    }

    //Fields
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownFieldsSubscriptionName);
        mutableSubs.add(realm.objects(Fields), {
          name: fieldsSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(fieldsSubscriptionName);
        mutableSubs.add(realm.objects(Fields), {
          name: ownFieldsSubscriptionName,
        });
      });
    }

    //Tasks
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownTasksSubscriptionName);
        mutableSubs.add(realm.objects(Tasks), {name: tasksSubscriptionName});
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(tasksSubscriptionName);
        mutableSubs.add(
          realm.objects(Tasks).filtered(`owner_id == "${user?.id}"`),
          {name: ownTasksSubscriptionName},
        );
      });
    }

    //Teams
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownTeamsSubscriptionName);
        mutableSubs.add(realm.objects(Teams), {
          name: teamsSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(teamsSubscriptionName);
        mutableSubs.add(realm.objects(Teams), {
          name: ownTeamsSubscriptionName,
        });
      });
    }

    //Templates
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownTemplatesSubscriptionName);
        mutableSubs.add(realm.objects(Templates), {
          name: templatesSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(templatesSubscriptionName);
        mutableSubs.add(realm.objects(Templates), {
          name: ownTemplatesSubscriptionName,
        });
      });
    }
  }, [realm, user, showAllItems]);

  // createItem() takes in a summary and then creates an Item object with that summary
  const createItem = useCallback(
    async (summary: any, value: any) => {
      realm.write(() => {
        return new Agents(realm, {
          first_name_: 'arss 1',
          last_name_: 'salg 1',
          address_: 'Colombia',
          username_: 'arss',
          email_: 'arss1234@gmail.com',
          latitude: '18.4083838',
          longitude: '-66.1596594',
          phone_: '+57 314 8731345',
          fleet_image: 'https://avatars.githubusercontent.com/u/1180972?v=4',
          is_active: 0,
          is_available: 1,
          status_: 0,
          user_role_: '641b6386e53114e63c59b50f', // TODO: add the whole user object here.
          team_id_: ['642c5fd0fea1e9e4a36064b8', '642d668a5bd84e69179bf562'],
          template_id_: [
            '6421f3d9425ac7525f9b4a79',
            '641e08f25c26a31d86a878e8',
            '64300d265ab5f6c2bc816796',
          ],
          transport_type_: null,
          idOptional: '1680873847127s',
          transport_desc_: '',
          tags_: [],
          password_: 'a123456',
          was_deleted: false,
          createdAt: '2023-04-07T13:24:07.132Z',
          updatedAt: '2023-04-07T14:51:21.630Z',
          __v: 0,
          uid_: 'AakUjQ3xSsRFd04V0QHqWDxLnYk1',
        } as any);
      });
      // const template = realm.write(() => {
      //   return new Templates(realm, getRandomTeam() as any);
      // });
      // console.log({template});
      // const team = realm.write(() => {
      //   let team: any = getRandomTeam();
      //   if (!team.location_accuracy_) team.location_accuracy_ = 'High';
      //   if (team.template_id_) team.template_id_ = [template];
      //   return new Teams(realm, {...team, owner_id: user?.id});
      // });
      // console.log({team});
      // realm.write(() => {
      //   return new UserRol(realm, {
      //     agentRol_name: 'auto asssing NEW',
      //     create_task: true,
      //     update_profile: true,
      //     view_open_tasks: true,
      //     on_hold_buttom: true,
      //     map_view: false,
      //     idOptional: '1676050092710',
      //     createdAt: new Date('2023-02-10T17:28:12.717Z'),
      //     updatedAt: new Date('2023-02-10T17:28:12.717Z'),
      //     __v: 0,
      //   } as any);
      // });
      // realm.write(() => {
      //   return new Tasks(realm, {
      //     owner_id: user?.id,
      //     customFields: JSON.stringify({value, summary}),
      //     job_status_: 'assigned',
      //     // team_id_: temas[1],
      //   } as any);
      // });
      // realm.write(() => {
      //   let template: any = geteRandomTemplate();
      //   if (template.config) {
      //     try {
      //       template.config = JSON.stringify(template.config);
      //     } catch (error) {}
      //   }
      //   if (template.fields) template.fields = JSON.stringify(template.fields);
      //   return new Templates(realm, {...template, owner_id: user?.id});
      // });
    },
    [realm, user],
  );

  // deleteItem() deletes an Item with a particular _id
  const deleteItem = useCallback(
    (id: BSON.ObjectId) => {
      // if the realm exists, get the Item with a particular _id and delete it
      const item = realm.objectForPrimaryKey(Tasks, id) as any; // search for a realm object with a primary key that is an objectId
      if (item) {
        if (item.owner_id !== user?.id) {
          Alert.alert("You can't delete someone else's task!");
        } else {
          realm.write(() => {
            realm.delete(item);
          });
        }
      }
    },
    [realm, user],
  );

  return (
    <SafeAreaProvider>
      <View style={styles.viewWrapper}>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleText}>Show All Tasks</Text>
          <Switch
            trackColor={{true: '#00ED64'}}
            onValueChange={() => {
              if (realm.syncSession?.state !== 'active') {
                Alert.alert(
                  'Switching subscriptions does not affect Realm data when the sync is offline.',
                );
              }
              setShowAllItems(!showAllItems);
            }}
            value={showAllItems}
          />
        </View>
        <Overlay
          isVisible={showNewItemOverlay}
          onBackdropPress={() => setShowNewItemOverlay(false)}>
          <CreateToDoPrompt
            onSubmit={(summary: any, value: any) => {
              setShowNewItemOverlay(false);
              createItem(summary, value);
            }}
          />
        </Overlay>
        <FlatList
          keyExtractor={item => item._id.toString()}
          data={items_tasks as any}
          renderItem={({item}) => {
            let summary: string = '';
            try {
              summary = JSON.parse(item.customFields).summary;
            } catch (error) {}
            return (
              <ListItem
                key={`${item._id}`}
                bottomDivider
                topDivider
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}>
                <ListItem.Title style={styles.itemTitle}>
                  {summary}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.itemSubtitle}>
                  {item.owner_id === user?.id ? '(mine)' : user?.profile.email}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.itemSubtitle}>
                  Team: {item?.team_id_?.team_name_}
                </ListItem.Subtitle>
                {item.owner_id === user?.id && (
                  <Button
                    type="clear"
                    onPress={() => deleteItem(item._id)}
                    icon={
                      <Icon
                        type="material"
                        name="clear"
                        size={12}
                        color="#979797"
                        tvParallaxProperties={undefined}
                      />
                    }
                  />
                )}
              </ListItem>
            );
          }}
        />
        <Button
          title="Add To-Do"
          buttonStyle={styles.addToDoButton}
          onPress={() => setShowNewItemOverlay(true)}
          icon={
            <Icon
              type="material"
              name={'playlist-add'}
              style={styles.showCompletedIcon}
              color="#fff"
              tvParallaxProperties={undefined}
            />
          }
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  addToDoButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    margin: 5,
  },
  showCompletedButton: {
    borderRadius: 4,
    margin: 5,
  },
  showCompletedIcon: {
    marginRight: 5,
  },
  itemTitle: {
    flex: 1,
  },
  itemSubtitle: {
    color: '#979797',
    flex: 1,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  toggleText: {
    flex: 1,
    fontSize: 16,
  },
});
