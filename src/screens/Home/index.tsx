import React, { ReactElement } from "react";

import { View, Text, ScrollView } from "react-native";
import CardComponent, { CardComponentProps } from "uikit/CardComponent";
import MasonryList from "@react-native-seoul/masonry-list";
import Container from "uikit/Container";
import { HomeScreensDescription } from "constants/screens/homeScreens";

const HomeScreen = () => (
  <ScrollView>
    <Container>
      <MasonryList
        data={HomeScreensDescription}
        numColumns={2}
        renderItem={(props) =>
          (props.item &&
            <CardComponent key={props.i}
                           icon={props.item.icon?.call()}
                           title={props.item.title}
                           namePage={props.item.namePage} />)} />
    </Container>

  </ScrollView>
);


export default HomeScreen;
