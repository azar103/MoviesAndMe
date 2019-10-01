import React from 'react'
import FilmList from '../Components/FilmList'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import FilmViewed from '../Components/FilmViewed'

class ViewedFilms extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
      console.log(this.props.viewedFilms)
        return(
            
             <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={this.props.viewedFilms}
                renderItem= {({item}) => 
                <FilmViewed
                  film = {item}
                  navigation = {this.props.navigation}
                />
            }

            />
    
        )
      }
    }


const mapStateToProps = (state) => {
    return {
        viewedFilms: state.toggleViewed.viewedFilms
    }
}





export default  connect(mapStateToProps)(ViewedFilms)