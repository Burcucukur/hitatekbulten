import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';

const Userinformation = () => {
  let handlePress;
  const navigation = useNavigation();
 
  return (
    <View style={{flex: 1}}>
      <View
        container
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          borderRadius: 10,
          borderColor: '#3e3e3e',
          backgroundColor: '#3d3c39',
          textAlign: 'center',
          elevation: 5,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center', //dikey eksende ortalar
          marginBottom: 2,
          marginTop: 5,
        }}>
        
          return (
            <Text style={{fontSize: 17, color: '#ffffff'}}>
             Kullanıcı Adı:
            </Text>
            <Text style={{fontSize: 17, color: '#ffffff'}}>
            Kullanıcı Soyadı:
            </Text>
            <Text style={{fontSize: 17, color: '#ffffff'}}>
             Telefon no:
            </Text>
          );
           </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card_button_titles: {
    color: '#030011',
    backgroundColor: '#1d1d1d',
    margin: 5,
    borderRadius: 8,
    // padding: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 4,
    // paddingLeft: 1,
    // paddingRight: 15,
    marginBottom: 20,
    height: 30,
    width: 75,
    fontSize: 10,
    borderColor: `#000000`,
  },
});
export default Userinformation;
