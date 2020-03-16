import * as React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeContent from '../../components/Content/HomeConponents/HomeContent';

const HomePage = (props) => {
    return (
        <div>
            <Header />
            <HomeContent />
            <Footer />
        </div>
    );
};

export default HomePage;