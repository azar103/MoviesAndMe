import React from 'react'
import { TextInput, View, Button, StyleSheet, Text } from 'react-native'
import FilmList from '../Components/FilmList'
import { connect } from 'react-redux'
import Avatar from './Avatar'
class Favorites extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){

        return(
            <View style = {styles.main_container}>
             <View style = {styles.avatar_container}>  
             <Avatar />
             </View> 
             <FilmList
                films={this.props.favoritesFilm}
                navigation = {this.props.navigation}
                favoriteList= {true}
            />
            </View>
        )
      }
    }


const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.toggleFavorite.favoritesFilm,
        avatar: state.setAvatar.avatar
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
})



export default  connect(mapStateToProps)(Favorites)