import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import * as Application from 'expo-application';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext, t } from '../../contexts/SettingsContexts/ThemeContext';
import { HistoryContext } from '../../contexts/HistoryContext';
import List from '../../components/UI/List';


export default function Root() {
  const { theme } = useContext(ThemeContext);
  const history = useContext(HistoryContext);

  return <>
    <List
      title='General'
      items={[
        {
          key: 'theme',
          icon: <Feather name='moon' size={24} color={theme.text} />,
          text: 'Theme',
          onPress: () => history.pushPath('hydra://settings/theme'),
        },
        {
          key: 'account',
          icon: <FontAwesome5 name='user' size={24} color={theme.text} />,
          text: 'Account',
          onPress: () => history.pushPath('hydra://accounts'),
        },
        {
          key: 'dataUse',
          icon: <Feather name='activity' size={24} color={theme.text} />,
          text: 'Data Use',
          onPress: () => history.pushPath('hydra://settings/dataUse'),
        },
      ]}
    />
    <View style={styles.appDetails}>
      <Text style={t(styles.appDetailsText, {
        color: theme.text,
      })}>
        {Application.applicationName}: {Application.nativeApplicationVersion} - build {Application.nativeBuildVersion}
      </Text>
    </View>
  </>;
}

const styles = StyleSheet.create({
  appDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    textAlign: 'center',
    marginVertical: 25,
    marginHorizontal: 15,
  },
  appDetailsText: {
    flex: 1,
    textAlign: 'center',
  },
});
