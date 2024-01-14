import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RegisterScreen from "./screens/Authentication/register";
import LoginScreen from "./screens/Authentication/loginScreen";
import AccountScreen from "./screens/Account/accountscreen";
import NotificationsScreen from "./screens/Notifications/notificationScreen";
import Homescreen from "./screens/Home/Home";
import FeedScreen from "./screens/Feed/feedScreen";
import SettingScreen from "./screens/Settings/settingsScreen";
import HomeDetails from "./screens/Home/homeDetailsscreen";
import FeedDetails from "./screens/Feed/FeedDetails";
import AccountDetails from "./screens/Account/AccountDetails";
import AccountDetailsDetails from "./screens/Account/doubledetails";
import SettingDetails from "./screens/Settings/SettingsDetails";
import NotificationsDetails from "./screens/Notifications/NotificationsDetails";

import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function Stackhome() {
    return (
      <Drawer.Navigator
        initialRouteName="Initial Home Screen"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Drawer.Screen
          name="Initial Home Screen"
          component={Homescreen}
          options={{ headerTitle: "Home", drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name="Home Details screen"
          component={HomeDetails}
          options={{ headerTitle: "Home Details", drawerLabel: "Home Details" }}
        />
      </Drawer.Navigator>
    );
  }
  function Stackfeed() {
    return (
      <Drawer.Navigator
        initialRouteName="Initial Feed Screen"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Drawer.Screen
          name="Initial Feed Screen"
          component={FeedScreen}
          options={{ headerTitle: "Feed", drawerLabel: "Feed" }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Feed Details screen"
          component={FeedDetails}
          options={{ headerTitle: "Feed Details", drawerLabel: "Feed Details" }}
        />
      </Drawer.Navigator>
    );
  }
  function AccountStack() {
    return (
      <Drawer.Navigator
        initialRouteName="Initial Account Screen"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Drawer.Screen
          name="Initial Acount Screen"
          component={AccountScreen}
          options={{ headerTitle: "Account", drawerLabel: "Account" }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Account Details screen"
          component={AccountDetails}
          options={{
            headerTitle: "Account Details",
            drawerLabel: "Account Details",
          }}
        />
        <Drawer.Screen
          name="Account Details Details screen"
          component={AccountDetailsDetails}
          options={{
            headerTitle: "Account Details Details",
            drawerLabel: "Account Details Details",
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    );
  }
  function NotificationsStackScreen() {
    return (
      <Drawer.Navigator
        initialRouteName="Initial Notifications Screen"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Drawer.Screen
          name="Initial Notifications Screen"
          component={NotificationsScreen}
          options={{
            headerTitle: "Notifications",
            drawerLabel: "Notifications",
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Notifications Details screen"
          component={NotificationsDetails}
          options={{
            headerTitle: "Notifications Details",
            drawerLabel: "Notifications Details",
          }}
        />
      </Drawer.Navigator>
    );
  }
  function SettingsStackScreen() {
    return (
      <Drawer.Navigator
        initialRouteName="Initial Settings Screen"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Drawer.Screen
          name="Initial Settings Screen"
          component={SettingScreen}
          options={{ headerTitle: "Settings", drawerLabel: "Settings" }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Settings Details screen"
          component={SettingDetails}
          options={{
            headerTitle: "Settings Details",
            drawerLabel: "Settings Details",
          }}
        />
      </Drawer.Navigator>
    );
  }

  function Bottomtabscreens() {
    return (
      <Tab.Navigator
        initialRouteName="Home Screen"
        screenOptions={{
          headerStyle: { backgroundColor: "lightblue" },
          tabBarStyle: { backgroundColor: "darkblue" },
        }}
      >
        <Tab.Screen
          name="Account Screen"
          component={AccountStack}
          options={{
            headerTitle: "Account",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            tabBarLabel: "Account",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notification Screen"
          component={NotificationsStackScreen}
          options={{
            headerTitle: "Notifications",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" color={color} size={size} />
            ),
            tabBarLabel: "Notifications",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Home Screen"
          component={Stackhome}
          options={{
            headerTitle: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarLabel: "Home",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Feed Screen"
          component={Stackfeed}
          options={{
            headerTitle: "Feed",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="wifi" color={color} size={size} />
            ),
            tabBarLabel: "Feed",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings Screen"
          component={SettingsStackScreen}
          options={{
            headerTitle: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
            tabBarLabel: "Settings",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login Screen"
          screenOptions={{
            headerStyle: { backgroundColor: "lightblue" },
          }}
        >
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{
              headerTitle: "Login",
            }}
          />
          <Stack.Screen
            name="Register Screen"
            component={RegisterScreen}
            options={{
              headerTitle: "Register",
            }}
          />
          <Stack.Screen
            name="Bottom Tab"
            component={Bottomtabscreens}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
