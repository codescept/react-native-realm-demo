import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {COLORS} from './Colors';
import {arrayData, numberData, objectData, stringData} from './utils';

export function CreateToDoPrompt(props: any): React.ReactElement<any> {
  const {onSubmit} = props;
  const [summary, setSummary] = useState('');
  const [selectedValue, setSelectedValue] = useState(objectData);

  return (
    <View style={styles.modalWrapper}>
      <Text h4 style={styles.addItemTitle}>
        Add To-Do Item
      </Text>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 35,
            width: '100%',
          }}>
          Select type
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: '100%'}}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="Object" value={objectData} />
          <Picker.Item label="String" value={stringData} />
          <Picker.Item label="Number" value={numberData} />
          <Picker.Item label="Array" value={arrayData} />
        </Picker>
      </View>
      <Input
        placeholder="What do you want to do?"
        onChangeText={(text: string) => setSummary(text)}
        autoCompleteType={undefined}
      />
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={() => onSubmit(summary, selectedValue)}
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
