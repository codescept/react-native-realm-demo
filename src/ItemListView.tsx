import {useUser} from '@realm/react';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Switch, Text, View} from 'react-native';
import {Button, Icon, ListItem, Overlay} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BSON} from 'realm';

import {CreateToDoPrompt} from './CreateToDoPrompt';
import {realmContext} from './RealmContext';

import {COLORS} from './Colors';
import {Item, Task} from './ItemSchema';

const {useRealm, useQuery} = realmContext;

const itemSubscriptionName = 'items';
const ownItemsSubscriptionName = 'ownItems';
const customFieldSubscriptionName = 'customFields';
const ownCustomFieldSubscriptionName = 'ownCustomFields';

export function ItemListView() {
  const realm = useRealm();
  const items = useQuery(Item).sorted('_id');
  const user = useUser();

  console.log(JSON.stringify(items));
  const [showNewItemOverlay, setShowNewItemOverlay] = useState(false);

  const [showAllItems, setShowAllItems] = useState(
    !!realm.subscriptions.findByName(itemSubscriptionName),
  );

  useEffect(() => {
    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownItemsSubscriptionName);
        mutableSubs.add(realm.objects(Item), {name: itemSubscriptionName});
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(itemSubscriptionName);
        mutableSubs.add(
          realm.objects(Item).filtered(`owner_id == "${user?.id}"`),
          {name: ownItemsSubscriptionName},
        );
      });
    }

    if (showAllItems) {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(ownCustomFieldSubscriptionName);
        mutableSubs.add(realm.objects(Task), {
          name: customFieldSubscriptionName,
        });
      });
    } else {
      realm.subscriptions.update(mutableSubs => {
        mutableSubs.removeByName(customFieldSubscriptionName);
        mutableSubs.add(realm.objects(Task), {
          name: ownCustomFieldSubscriptionName,
        });
      });
    }
  }, [realm, user, showAllItems]);

  // createItem() takes in a summary and then creates an Item object with that summary
  const createItem = useCallback(
    async (summary: any, value: any) => {
      console.log({summary});
      realm.write(() => {
        return new Item(realm, {
          owner_id: user?.id,
          summary: summary,
          customFields: JSON.stringify(value, summary),
          task: {address: summary},
        });
      });
    },
    [realm, user],
  );

  // deleteItem() deletes an Item with a particular _id
  const deleteItem = useCallback(
    (id: BSON.ObjectId) => {
      // if the realm exists, get the Item with a particular _id and delete it
      const item = realm.objectForPrimaryKey(Item, id); // search for a realm object with a primary key that is an objectId
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
          data={items}
          renderItem={({item}) => {
            console.log('item>>>>', item.summary);
            return (
              <ListItem
                key={`${item._id}`}
                bottomDivider
                topDivider
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}>
                <ListItem.Title style={styles.itemTitle}>
                  {item.summary}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.itemSubtitle}>
                  {item.owner_id === user?.id ? '(mine)' : ''}
                </ListItem.Subtitle>
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
