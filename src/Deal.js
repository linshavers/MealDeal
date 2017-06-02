import React, { Component } from 'react';
import * as firebase from 'firebase';

class Deal extends Component {
    
    
    // componentDidMount(){
    //     var rootRef = firebase.database().ref("users");
    //     var dealRef = rootRef.child('updatedDeals');

    //     dealRef.on('value'. snap => {
    //         this.setState({
    //             ...this.state, 
    //             readData: snap.valu()

    //         });
    //     });
    // }
    

    render() {
        return(
            <div>
            <h1>hi</h1>
            {/*{this.stuff()}*/}
            </div>
        )
    }
}

export default Deal;