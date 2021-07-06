import React from "react";

import HomeScreen from "screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { ArrowRightIcon, CompanyNameLogo } from "uikit/Icons";
import { HomeScreensDescription } from "constants/screens/homeScreens";
import { Heading3 } from "uikit/Typography";
import { useTheme } from "styled-components";
import { Button, View } from "react-native";


const Stack = createStackNavigator();

const RootRouter = () => {
    const theme = useTheme();

    return (
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          headerShown: true,
          headerTransparent: false,
          cardShadowEnabled: true,
          cardStyle: {
            backgroundColor: theme.colors.white
          },
          headerStyle: {
            height: 80,
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0
          },
          headerTintColor: theme.colors.primary,
          headerTitleAlign: "center"
        }}
      >
        <Stack.Screen name="main"
                      options={{
                        headerTitle: () => (<CompanyNameLogo />)
                      }}
                      component={HomeScreen} />
        {Screens}
      </Stack.Navigator>
    );
  }
;

const Screens = HomeScreensDescription.map((item, index) => {
  if (item?.component !== undefined)
    return <Stack.Screen key={index}
                         name={item.namePage}
                         options={{
                           headerTitle: () => (<HeaderTitle weight="bold">{item.title}</HeaderTitle>)
                         }}
                         component={item.component} />;
});

const HeaderTitle = styled(Heading3)`
  color: ${({ theme }) => theme.colors.primary};
`;


export default RootRouter;
