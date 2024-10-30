import {View, Text} from 'react-native';

export default function SettingsSection({title, children}) {
  return (
    <View className="mb-8">
        <Text className="text-base font-semibold mb-2">{title}</Text>
        <View className="bg-white border border-borderColor rounded-lg">{
            children.map((item, index)=>{
                return(
                    <View 
                        key={index}
                        className="border-borderColor"
                        style={{
                            borderTopWidth: index == 0 ? 0 : 0.5
                        }}
                    >
                        {item}
                    </View>
                );
            })
        }</View>
    </View>
  )
}


