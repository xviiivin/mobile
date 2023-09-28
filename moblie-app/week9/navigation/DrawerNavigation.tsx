import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoriesScreen, FiltersScreen } from "../screens";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
        screenOptions={{ 
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "gray",
        headerStyle: { 
          backgroundColor: "#4a148c",
        },
        headerTintColor: '#fff',
       }}
    > 
      <Drawer.Screen name="Categories" component={CategoriesScreen}/>
      <Drawer.Screen name="Filters" component={FiltersScreen}/>
    </Drawer.Navigator>
  )
}