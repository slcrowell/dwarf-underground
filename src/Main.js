import React, {Component} from 'react';

import Article from './Article';
import SideAd from './SideAd';
import BottomAds from './BottomAds';

class Main extends Component {
    render() {
        return (
            <main className="expanded row">
                <Article />

                <SideAd />
                
                <BottomAds />

            </main>
        )
    }
}

export default Main;