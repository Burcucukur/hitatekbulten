import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
// import QrCode from './component/qrComponenet';
// import AyarlarComponent from './component/ayarlarComponent';
import {
    LazyloadScrollView,
    LazyloadView,
    LazyloadImage
} from 'react-native-lazyload';
import Tabbar from './component/tabbar/tabbar';
import Esport from './component/e-sports/esport';
import Politics from './component/politics/politics';
import Economy from './component/economy/economy';

let handlePress;

const Home = props => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNewsFromAPI()
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  const fetchNewsFromAPI = async () => {
    // API'den haber verilerini çekmek için gerekli işlemleri yapın
    try {
      const response = await fetch('API_ENDPOINT_HERE');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <QrCode />
      <AyarlarComponent />
      <View style={styles.container}>
        <View style={styles.containers}>
          <Esport />
          <Economy />
          <Politics />
        </View>
        <View style={styles.containercoin}>
        <LazyloadScrollView style={styles.scrollView}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            news.map((item, index) => (
              <LazyLoad key={index} height={200} offset={100}>
                {/* Burada API'den gelen verilere göre görüntüleri ve videoları gösterin */}
                <Image source={{ uri: item.image }} style={styles.image} />
                <Video source={{ uri: item.video }} style={styles.video} />
              </LazyLoad>
            ))
          )}
        </LazyloadScrollView>
        </View>
        <Tabbar />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#C8C8C8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 43,
    paddingTop: verticalScale(62),
  },
  container: {
    backgroundColor: '#262626',
    borderRadius: 40,
    height: verticalScale(590),
    width: horizontalScale(390),
    marginTop: verticalScale(35),
    fontSize: moderateScale(80),
    display: 'flex',
    alignItems: 'center',
    marginBottom: -21,
  },
  containers: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: verticalScale(170),
    width: horizontalScale(300),
    marginTop: verticalScale(-40),
    fontSize: moderateScale(80),
    display: 'flex',
    alignItems: 'center', //dikey eksende ortalar
    marginBottom: 10,
  },
  containercoin: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#262626',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: verticalScale(10),
    width: horizontalScale(350),
    marginTop: verticalScale(-350),
    fontSize: moderateScale(80),
    display: 'flex',
    alignItems: 'center', //dikey eksende ortalar
    marginBottom: -10,
  },

  card_button_geri: {
    color: '#ffffff',
    position: 'absolute',
    top: 40,
    left: verticalScale(-175),
    margin: verticalScale(-10),
    paddingHorizontal: 5,
    paddingVertical: 5,
    paddingLeft: 7,
    paddingRight: 7,
    marginBottom: 20,
    height: verticalScale(15),
    width: horizontalScale(15),
    marginTop: verticalScale(27),
  },
});

export default Home;
