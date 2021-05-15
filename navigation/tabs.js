import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Portfolio, Market, Profile } from "../screens"
import { COLORS } from "../constants"

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
            />
            <Tab.Screen
                name="Trade"
                component={Home}
            />
            <Tab.Screen
                name="Market"
                component={Market}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default Tabs;