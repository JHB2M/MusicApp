import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StartScreen from "./src/pages/StartScreens/startscreen/StartScreen";
import SignUpScreen from "./src/pages/StartScreens/signupscreen/SignUpScreen";
import SigninScreen from "./src/pages/StartScreens/signinscreen/SigninScreen";
import Home from "./src/pages/TabScreens/home/homePage/Home";
import MyCourses from "./src/pages/TabScreens/myCourses/myCoursesScreen/MyCourses";
import Market from "./src/pages/TabScreens/market/marketpage/Market";
import CourseDetail from "./src/pages/TabScreens/home/courseDetail/CourseDetail";
import MarketDetailPage from "./src/pages/TabScreens/market/marketdetailpage/MarketDetailPage";
import MarketCart from "./src/pages/TabScreens/market/marketCartPage/MarketCart";
import MarketFav from "./src/pages/TabScreens/market/marketFavPage/MarketFav";
import Setting from "./src/pages/SettingScreen/settingScreen/Setting";
import Preference from "./src/pages/SettingScreen/preferenceScreen/Preference";
import MyCoursesDetail from "./src/pages/TabScreens/myCourses/myCoursesDetailScreen/MyCoursesDetail";
import Checkout from "./src/pages/TabScreens/market/checkout/Checkout";
import Payment from "./src/pages/TabScreens/market/payment/Payment";
import MarketSuccess from "./src/pages/TabScreens/market/marketSuccess/MarketSuccess";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
// Bu dosya router.js dosyasıdır

export default function App() {


  

  const Stack = createNativeStackNavigator();
  const StartStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabHomeStack = createNativeStackNavigator();
  const TabMarketStack = createNativeStackNavigator();
  const TabCoursesStack = createNativeStackNavigator();

  //Signin Sign up pages
  function StartScreens() {
    return (
      <StartStack.Navigator screenOptions={{ headerShown: false }}>
        <StartStack.Screen name="StartScreenn" component={StartScreen} />
        <StartStack.Screen name="SignUpScreenn" component={SignUpScreen} />
        <StartStack.Screen name="SignInScreenn" component={SigninScreen} />
      </StartStack.Navigator>
    );
  }
  //HomeScreen içerisi
  function HomeScreenn() {
    return (
      <TabHomeStack.Navigator>
        <TabHomeStack.Screen
          name="HomePage"
          component={Home}
          options={{ headerShown: false }}
        />
        <TabHomeStack.Screen
          name="CourseDetailPage"
          component={CourseDetail}
          options={{ title: "COURSE DETAILS", headerShown: false }}
        />
      </TabHomeStack.Navigator>
    );
  }
  function MarketScreen() {
    return (
      <TabMarketStack.Navigator>
        <TabMarketStack.Screen
          name="MarketPage"
          component={Market}
          options={{ headerShown: false }}
        />
        <TabMarketStack.Screen
          name="MarketDetailPage"
          component={MarketDetailPage}
          options={{ headerShown: false }}
        />
        <TabMarketStack.Screen
          name="MarketCartPage"
          component={MarketCart}
          options={{ headerShown: false }}
        />
        <TabMarketStack.Screen
          name="MarketFavPage"
          component={MarketFav}
          options={{ headerShown: false }}
        />
         <TabMarketStack.Screen
          name="MarketCheckoutPage"
          component={Checkout}
          options={{ headerShown: false }}
        />
         <TabMarketStack.Screen
          name="MarketPaymentPage"
          component={Payment}
          options={{ headerShown: false }}
        />
         <TabMarketStack.Screen
          name="MarketSuccessPage"
          component={MarketSuccess}
          options={{ headerShown: false }}
        />
      </TabMarketStack.Navigator>
    );
  }
  function MyCoursesScreen() {
    return (
      <TabCoursesStack.Navigator screenOptions={{ headerShown: false }}>
        <TabCoursesStack.Screen name="MyCoursesPage" component={MyCourses} />
        <TabCoursesStack.Screen
          name="MyCoursesDetailPage"
          component={MyCoursesDetail}
        />
      </TabCoursesStack.Navigator>
    );
  }
  // tab sekmeleri
  function TabScreens() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeScreenn"
          component={HomeScreenn}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={31} />
            ),
            title: "Home",
          }}
        />
        <Tab.Screen
          name="MarketScreenn"
          component={MarketScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="store" color={color} size={31} />
            ),
            title: "Market",
          }}
        />
        <Tab.Screen
          name="MyCoursesScreenn"
          component={MyCoursesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="book-open" color={color} size={31} />
            ),
            title: "My Courses",
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartScreenss" component={StartScreens} />
      <Stack.Screen name="TabScreenss" component={TabScreens} />
       
      
      
        <Stack.Screen name="SettingScreen" component={Setting} />
        <Stack.Screen name="PreferenceScreen" component={Preference} />
    
          
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
