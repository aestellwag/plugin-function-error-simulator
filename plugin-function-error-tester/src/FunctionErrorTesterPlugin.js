import React from 'react';
import { VERSION, View } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace } from './states';

import FunctionNavButton from './components/FunctionNavButton';
import FunctionTester from './components/FunctionTester';

const PLUGIN_NAME = 'FunctionErrorTesterPlugin';

export default class FunctionErrorTesterPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    // Add function tester button component to the SideNav
    flex.SideNav.Content.add(
      <FunctionNavButton key="news-sidenav-button" />
    );
  
    // Add Function Tester to the ViewCollection
    flex.ViewCollection.Content.add(
      <View name="function-view" key="function-view">
        <FunctionTester key="function-tester-view" />
      </View>
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
