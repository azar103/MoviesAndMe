import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator} from 'react-native'

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import { connect } from 'react-redux'
import FilmList from './FilmList'
class Search extends React.Component{
   constructor(props){
     super(props)
     this.searchedText = ""
     this.page = 0
     this.totalPages = 0
     this.state = {
       films: [],
       isLoading: false
      }
      this._loadFilms = this._loadFilms.bind(this)
    }
  _loadFilms(){
    this.setState({isLoading: true})
    if(this.searchedText.length>0){
    getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(
      data => 
      {
        this.page = data.page
        this.totalPages = data.totalPages
        this.setState({
          films: [...this.state.films, ...data.results],
          isLoading: false
        })  
      }
        )
    }
  }
  _searchTextInputChanged(text){
    this.searchedText = text;
  }
  _displayLoading(){
    if (this.state.isLoading){
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  _searchFilms(){
    this.page = 0
    this.totalPages = 0
    this.setState({
        films: []
    }, ()=>{
      this._loadFilms()
    })
  
  }
  
  render(){
  
    return(
      <View style={styles.main_container}>
        
         <TextInput onSubmitEditing={() => this._searchFilms()} 
                   onChangeText={(text)=> this._searchTextInputChanged(text)} 
                   style={styles.textinput} placeholder='Titre du film' />
         <Button title="Rechercher" onPress={() => this._searchFilms()} />
         <FilmList
            films={this.state.films}
            page= {this.page}
            totalPages = {this.totalPages}
            loadFilms ={this._loadFilms}
            navigation = {this.props.navigation}
            favoriteList= {false}
        />
        {this._displayLoading()}
      </View>

    )
  }
}
const styles = StyleSheet.create(
  {
    main_container:{
      flex: 1
    },
    textinput:{
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      paddingLeft: 5
    },
    loading_container:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)


const mapStateToProps = (state) => {
  return {
      favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}
export default connect(mapStateToProps)(Search)
