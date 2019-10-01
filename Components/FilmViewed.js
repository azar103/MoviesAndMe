
import React from 'react'
import {Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import moment from 'moment'
import { getImageFromApi } from '../API/TMDBApi'
class FilmViewed extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            onLongPressed : false
        }
    }
    
    _onLongPressButton = () =>{
        this.setState({
            onLongPressed: true
        })   
       }
       
       _changText (){
           if(this.state.onLongPressed){
               return (
                   <Text style={styles.title_style}>Sorti le {moment(new Date(this.props.film.release_date)).format('DD/MM/YYYY')}</Text>
               )
           }else{
               return (
                   <Text style={styles.title_style}>{this.props.film.title}</Text>
               )
           }
           
       }
  
    render() {

       const {navigate}= this.props.navigation
       const {film} =this.props

         return(
             <TouchableOpacity 
                    style= {styles.main_container}
                    onLongPress={this._onLongPressButton}
                    onPress= {() => navigate("FilmDetail",{idFilm: film.id})}
              >
                    <Image 
                      source= {{uri : getImageFromApi(film.backdrop_path)}}
                      style={{width: 60, height: 60, borderRadius: 60/ 2}} 
                    />
                {this._changText()}
             </TouchableOpacity>
         )
     }
    }
    const styles = StyleSheet.create({
        main_container: {
            flex: 1,
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        },
        image_style: {
            height: 80,
            width: 80,
            borderRadius: 0.4
        },
        title_style: {
            marginLeft: 10
        }
    })

export default FilmViewed