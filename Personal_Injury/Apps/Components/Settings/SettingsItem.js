import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity, View, Text} from 'react-native';

export default function SettingsItem(props) {
  return (
    <TouchableOpacity className="py-4 px-2 flex-row justify-between items-center" onPress={() => { () =>
        navigation.navigate("SettingsNavigator", {
          screen: props.screen,
        }) }}>
          <View className="flex-row items-center">
            <Ionicons name={props.iconName} size={24} color="grey" />
            <Text className="text-base ml-3">{props.itemText}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={24} color="grey" />
        </TouchableOpacity>
  )
}

