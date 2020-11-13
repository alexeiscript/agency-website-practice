import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/map-image.jpg';

// Re-usable components
import Services from '../Common/Services';

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

                <Services />
            </div>
        );
    }
}

export default Home;