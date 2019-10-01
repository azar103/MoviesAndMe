import React from 'react'
import { StyleSheet, View  } from 'react-native'
import { getLatestBestMovies } from '../API/TMDBApi'
import FilmList from '../Components/FilmList'

class News extends React.Component {
    constructor(props){
          super(props)
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
         getLatestBestMovies(this.page+1).then(
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
  
       _displayLoading(){
         if (this.state.isLoading){
           return(
             <View style={styles.loading_container}>
               <ActivityIndicator size='large' />
             </View>
           )
         }
       }
    componentDidMount(){
         this._loadFilms()
       
       }
       
    render(){
       
         return(
            
              <FilmList
                 films={this.state.films}
                 page= {this.page}
                 totalPages = {this.totalPages}
                 loadFilms ={this._loadFilms}
                 navigation = {this.props.navigation}
                 favoriteList= {false}
             />
      
     
         )
       }
     }
     const styles = StyleSheet.create(
       {
         main_container:{
           flex: 1
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
     

export default News