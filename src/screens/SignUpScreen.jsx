import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Image,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';


const SignUpScreen = () => {
  const navigation=useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <Image
        className="h-full w-full absolute"
        source={require('../../assets/images/background.png')}
      />
      {/*lights*/}
      <View className="flex-row justify-around absolute w-full ">
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInDown.duration(1000).springify()}
          className="h-[160] w-[60]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/*title and form*/}
      <View className="h-full w-full flex justify-around pt-40 pb-10  ">
        {/*title*/}
        <View className="flex items-center ">
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl ">
            SignUp
          </Animated.Text>
        </View>

        {/*form*/}
        <View className="flex items-center mx-4 space-y-4">
        <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 rounded-2xl w-full">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
          </Animated.View>
          
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="bg-black/5 rounded-2xl w-full">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="bg-black/5 rounded-2xl w-full">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3n bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white" font->
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="flex-row justify-center">
            <Text> Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.push("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
