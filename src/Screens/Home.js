import React, { Component } from 'react'
import { StyleSheet, Text as Div, ScrollView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { View, Text, Container } from 'native-base'
import { Card } from 'react-native-elements'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import HeaderComponent from '../Components/Header'
import NavigationComponent from '../Components/Navigation'
import CardPromo from '../Components/CardPromo'
import { style } from '../Utils/style'
import HeaderProme from '../Components/HeaderProme'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ScrollView>
        <Container style={{ backgroundColor: 'white' }}>
          <View style={style.wrapper}>
            <Text> text </Text>
          </View>
          <View style={{ backgroundColor: '#4a2d8b', height: 200, borderRadius: 70 }}>
            <HeaderComponent title='PayLive' />
            <View>
              <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={{ marginBottom: 9, fontSize: 18, fontFamily: 'Caladea-Regular', color: '#fff' }}>PayLive Cash</Text>
                <View style={{ marginBottom: 7, flexDirection: 'row', color: '#fff' }}>
                  <Text style={{ fontFamily: 'Caladea-Regular', fontSize: 22, marginRight: 10, color: '#fff' }}>Rp</Text>
                  <Text style={{ fontFamily: 'Caladea-Regular', fontSize: 40, marginRight: 10, color: '#fff' }}>150.000</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginRight: 10, fontSize: 18, fontFamily: 'Caladea-Regular', color: '#fff' }}>PayLive Points</Text>
                  <Text style={{ fontSize: 18, fontFamily: 'Caladea-Regular', color: '#F7C738' }}>2.847</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={style.navCard}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('Top Up')}>
                  <MaterialCommunityIcons name='plus-circle-outline' color='#4a2d8b' size={30} />
                </TouchableOpacity>
                <Text style={{ color: '#4a2d8b', fontFamily: 'Caladea-Regular' }}>Top Up</Text>

              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather name='upload' color='#4a2d8b' size={30} />
                <Text style={{ color: '#4a2d8b', fontFamily: 'Caladea-Regular' }}>Transfer</Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name='history' color='#4a2d8b' size={30} />
                <Text style={{ color: '#4a2d8b', fontFamily: 'Caladea-Regular' }}>History</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={styles.Kios}>
              <View>
                <EvilIcons name='clock' size={30} color='#F7C738' />
              </View>
              <View>
                <Div style={{ fontSize: 20, fontWeight: 'bold', color: '#F7C738' }}>Kunjungi Kios PayLive</Div>
                <Div style={{ fontSize: 16, color: '#F7C738' }}>Untuk melanjutkan. Lihat lokasi PayLive</Div>
              </View>
              <View>
                <MaterialCommunityIcons name='chevron-right' size={25} color='#F7C738' />
              </View>
            </View>
          </View>
          <View style={styles.Body}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <FontAwesome5 style={style.IconNav} name='lightbulb' size={30} color='#F7C738' />
                <Text>PLN</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Category Pulsa')}>
                  <MaterialIcons style={styles.IconNav} name='phone-android' size={30} color='blue' />
                </TouchableOpacity>
                <Text>Pulsa</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <Ionicons style={styles.IconNav} name='ios-globe' size={30} color='green' />
                <Text>Paket Data</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <FontAwesome5 style={styles.IconNav} name='money-check-alt' size={30} color='lightblue' />
                <Text>Pasca Bayar</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <FontAwesome5 style={styles.IconNav} name='shield-alt' size={30} color='#77c969' />
                <Text>BPJS</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <Feather style={styles.IconNav} name='tv' size={30} color='#e05514' />
                <Text>TV Kabel</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <Entypo style={styles.IconNav} name='tv' size={30} color='#9c49eb' />
                <Text>PLN</Text>
              </View>
              <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
                <Entypo style={styles.IconNav} name='dots-three-horizontal' size={30} color='#4b088a' />
                <Text>Lainnya</Text>
              </View>
            </View>
          </View>

        </Container>
        <View style={{ padding: 20, backgroundColor: 'white', marginTop: -40 }}>
          <View style={home.descPayLive}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Kenali PayLive Lebih Dekat</Text>
              <Text style={{ fontSize: 18, color: '#555' }}>Biar makin akrab, yuk cek tips berikut</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ color: '#35b6f2' }}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView horizontal>
            <Card
              containerStyle={{ borderRadius: 20, width: 200 }}
              title='Keuntungan Pakai PayLive'
              image={require('../Assets/Images/pay3.png')}
            >
              <MaterialIcons style={{ textAlign: 'right' }} name='favorite' color='#9c49eb' size={20} />
            </Card>
            <Card
              containerStyle={{ borderRadius: 20, width: 200 }}
              title='Cara topup PayLive Cash'
              image={require('../Assets/Images/pay1.png')}
            >
              <MaterialIcons style={{ textAlign: 'right' }} name='favorite' color='#9c49eb' size={20} />
            </Card>
            <Card
              containerStyle={{ borderRadius: 20, width: 200 }}
              title='Upgrade PayLive Premium'
              image={require('../Assets/Images/pay4.png')}
            >
              <MaterialIcons style={{ textAlign: 'right' }} name='favorite' color='#9c49eb' size={20} />
            </Card>
            <Card
              containerStyle={{ borderRadius: 20, width: 200 }}
              title='Cara bayar Pakai PayLive'
              image={require('../Assets/Images/pay2.png')}
            >
              <MaterialIcons style={{ textAlign: 'right' }} name='favorite' color='#9c49eb' size={20} />
            </Card>
            <Card
              containerStyle={{ borderRadius: 20, width: 200 }}
              title='Cara transfer Pakai PayLive'
              image={require('../Assets/Images/pay5.png')}
            >
              <MaterialIcons style={{ textAlign: 'right' }} name='favorite' color='#9c49eb' size={20} />
            </Card>
          </ScrollView>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <HeaderProme
            title='Cashback lagi dan lagi'
            desc='Serbu berbagai promo terbaru PayLive'
            link='Lihat Semua'
          />
          <ScrollView horizontal>
            <CardPromo
              title='Cashback lagi dan lagi'
              desc='Serbu berbagai promo terbaru OVO'
              img={require('../Assets/Images/promo1.jpg')}
            />
            <CardPromo
              title='Cashback lagi dan lagi'
              desc='Serbu berbagai promo terbaru OVO'
              img={require('../Assets/Images/promo2.jpg')}
            />
            <CardPromo
              title='Cashback lagi dan lagi'
              desc='Serbu berbagai promo terbaru OVO'
              img={require('../Assets/Images/promo3.jpg')}
            />
            <CardPromo
              title='Cashback lagi dan lagi'
              desc='Serbu berbagai promo terbaru OVO'
              img={require('../Assets/Images/promo4.jpeg')}
            />
            <CardPromo
              title='Cashback lagi dan lagi'
              desc='Serbu berbagai promo terbaru OVO'
              img={require('../Assets/Images/promo5.jpg')}
            />
          </ScrollView>
        </View>
      </ScrollView>
    )
  }
}

export default Home
const home = StyleSheet.create({
  descPayLive: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

const styles = StyleSheet.create({
  IconNav: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(168, 168, 168, 0.02)',
    textAlign: 'center'
  },
  Body: {
    marginTop: 20,
    padding: 20,
    height: 200,
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    backgroundColor: 'white',
    elevation: 5
  }
})