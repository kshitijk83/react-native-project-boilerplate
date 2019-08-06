// import { createBottomTabNavigator } from 'react-navigation';
// import { tab1unactive,tab1active,tab2unactive,tab2active,tab3unactive,tab3active,tab4unactive,tab4active } from '../utils/constants/ImagePathConstants';
// import NoData from '../containers/NoData';
// import { Image } from 'react-native';
// import React from "react";
// import { containProperty } from '../utils/constants/AppConstants';
// // import ManageOptions from '../containers/dashBoard/ManageOptions';
// import { settingStack } from './SettingsStack';
// import QRCodeGenerator from '../containers/dashBoard/QRCodeGenerator';
// import MainEvents from '../containers/dashBoard/MainEvents';
// import MainProfile from '../containers/dashBoard/MainProfile';

// export const tabNavigation = createBottomTabNavigator({
// Tab1:{
//     // screen:QRCodeGenerator,
//     screen:MainEvents,
//     navigationOptions:{
//         tabBarIcon:({ focused })=>{
//         const tabIcon = focused ?(
//           <Image
//             resizeMode={containProperty}
//             source={tab1active}
//           />
//         ):(
//             <Image
//             resizeMode={containProperty}
//             source={tab1unactive}
//           />
//         );
//        return tabIcon;
//     }
//     }
// },
// Tab2:{
//     screen:NoData,
//     navigationOptions:{
//         tabBarIcon:({ focused })=>{
//             const tabIcon = focused ?(
//               <Image
//                 resizeMode={containProperty}
//                 source={tab2active}
//               />
//             ):(
//                 <Image
//                 resizeMode={containProperty}
//                 source={tab2unactive}
//               />
//             );
//            return tabIcon;
//         }   
//     }
// },
// Tab3:{
//     // screen:NoData,
//     screen:MainProfile,
//     navigationOptions:{
//         tabBarIcon:({ focused })=>{
//             const tabIcon = focused ?(
//               <Image
//                 resizeMode={containProperty}
//                 source={tab3active}
//               />
//             ):(
//                 <Image
//                 resizeMode={containProperty}
//                 source={tab3unactive}
//               />
//             );
//            return tabIcon;
//         }
//     }
// },
// Tab4:{
//     screen:settingStack,
//     navigationOptions:{
//         tabBarIcon:({ focused })=>{
//             const tabIcon = focused ?(
//               <Image
//                 resizeMode={containProperty}
//                 source={tab4active}
//               />
//             ):(
//                 <Image
//                 resizeMode={containProperty}
//                 source={tab4unactive}
//               />
//             );
//            return tabIcon;
//         }
//     }
// }
// },{
//     initialRouteName:"Tab1",
//     tabBarOptions: {
//         showLabel: false
//       }
// });

