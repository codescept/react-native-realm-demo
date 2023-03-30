import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {COLORS} from './Colors';

export function CreateToDoPrompt(props: any): React.ReactElement<any> {
  const {onSubmit} = props;
  const [summary, setSummary] = useState('');

  return (
    <View style={styles.modalWrapper}>
      <Text h4 style={styles.addItemTitle}>
        Add To-Do Item
      </Text>

      <Input
        placeholder="What do you want to do?"
        onChangeText={(text: string) => setSummary(text)}
        autoCompleteType={undefined}
      />
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={() => onSubmit(summary, 'object')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    width: 300,
    minHeight: 400,
    borderRadius: 4,
    alignItems: 'center',
  },
  addItemTitle: {
    margin: 20,
  },
  saveButton: {
    width: 280,
    backgroundColor: COLORS.primary,
  },
  container: {
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
  },
});
