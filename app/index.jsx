import { View, StyleSheet, Image } from 'react-native'

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={''}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }, logo:{
        width: 250,
        height: 250
    }
})

export default SplashScreen