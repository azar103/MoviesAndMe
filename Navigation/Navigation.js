import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
const SearchStackNavigator = createStackNavigator({
    Search: {
         screen: Search,
         navigationOptions: {
             title: 'Rechercher'
         }
    },
    FilmDetail: {
        screen: FilmDetail
    }
   
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris'
        }
    }
})
const MoviesTabNavigator = createBottomTabNavigator({

   Search: {
       screen: SearchStackNavigator,
       navigationOptions: {
           tabBarIcon: () =>  {
               return <Image
               source={require('../Images/ic_search.png')}
               style={styles.icon}
            
            />}
       }
   },

    Favorites:{
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: () =>  {
                return <Image
                source={require('../Images/my-icon-favorite.png')}
                style={styles.icon}
             
             />}
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showLable: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'
    }
}
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(MoviesTabNavigator)