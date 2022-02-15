import { React, useEffect, useState } from 'react';
import { View } from 'react-native'
import RootNavigation from "./Routes";
import LottieView from 'lottie-react-native';



export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading ?
          <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <LottieView
              size={50}
              style={{ height: 700 }}
              source={
                require('./assets/animations/foodapp.json')
              }
              autoPlay
              speed={0.5}
              loop={true}
            />
          </View>
          :
          <RootNavigation />
      }
    </>
  );
}

