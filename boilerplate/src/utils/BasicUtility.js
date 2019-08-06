// ---- to find if it in tablet mode -----
import { Dimensions } from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const TABLET_HEIGHT = 1000;
export const TABLET_WIDTH = 700;
export const VERSION = "v1.0.1";

//------this is used to check , is tablet or not----//
export const isTablet=()=>{
    return(deviceWidth>=TABLET_WIDTH);
}

//----this function is used to go to next input------//
export const goToNextInput = (index,self)=>{
    if(index)
    {
        self.refs[index].refs[index].focus();
    }
}