interface IAddSubsciptionInput {
  showAllItems: boolean;
  name: string;
  ownName: string;
  realm: Realm;
  filter?: boolean;
}
export const addSubscription = (input: IAddSubsciptionInput) => {
  const {name, ownName, realm, showAllItems, filter = false} = input;
  if (showAllItems) {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.removeByName(ownName);
      mutableSubs.add(realm.objects('agent_rols'), {
        name: name,
      });
    });
  } else {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.removeByName(name);
      mutableSubs.add(realm.objects('agent_rols'), {
        name: ownName,
      });
    });
  }
};
