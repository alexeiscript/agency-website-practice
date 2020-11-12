import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/map-image.jpg';

class Home extends Component {
    render() {
        return(
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
            </div>
        );
    }
}

export default Home;