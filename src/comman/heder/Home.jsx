import React from 'react';
import Header from './../../common/heder/Header';
import './Home.css';

import SingleLineGridList from '../../screens/home/Gridlist';
import TitlebarGridList from '../../screens/home/GridNewMovies';
import ResetPasswordForm from '../../screens/home/SearchControl';


class Home extends React.Component {
    render() {
        return <div id = "Home" >
            <Header/>

            <div id="upcoming-movie">
            Upcoming Movies
            </div>

            <div id="GridList-1">
                <SingleLineGridList  />
            </div>

            <div id="right" style={{ height: '100px' }}>
                      
                </div>
            
            <div id="released-movie" className="flex-container">
            <div id="left">
                <TitlebarGridList/>
                </div>
            <div id="right">
                <ResetPasswordForm/>
                </div>
        
            </div>





            < /div>;
    }
}
export default Home;