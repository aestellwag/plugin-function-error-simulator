import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
 
const FunctionNavButton = ({ activeView }) => {
   function navigate() {
       Actions.invokeAction('NavigateToView', { viewName: 'function-view'});
   }
 
   return (
       <SideLink
       showLabel={true}
       icon="Bulb"
       iconActive="BulbBold"
       isActive={activeView === 'function-view'}
       onClick={navigate}>
       Function Tester
       </SideLink>
   )
}
export default FunctionNavButton;