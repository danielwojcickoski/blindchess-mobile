//External imports
import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

//Icons load
Icon.loadFont();

//Styles imports
import styles from './styles.js'

//Assets imports
import logoReverse from '../../assets/images/logo-reverse.png'

export default function PageHeader({children}) {
    //Navigation Control
    const { goBack, navigate } = useNavigation();
    function hadleNavigateGoBack() {
        goBack();
    }
    function hadleNavigateToHomePage() {
        navigate('Home');
    }

    //JSX
    return (
        <View style={styles.container}>
            <RectButton
                onPress={hadleNavigateGoBack}
                style={styles.headerButton}
            >
                <Icon name="arrow-left" size={30} color="#FFF" />
            </RectButton>

            <RectButton 
                onPress={hadleNavigateToHomePage}
                style={styles.logoView}
            >
                <Image source={logoReverse} style={styles.logo} />
            </RectButton>

            {children}
        </View>
    );
};
