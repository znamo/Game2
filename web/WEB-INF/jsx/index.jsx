import React from 'react';
import {render} from 'react-dom';
import NeceDaIde from './NeceDaIde.jsx';
import {NumberList, ime} from './Lista.jsx';

const komentari = [{id:1, comment:"Pita"},
                {id:2, comment:"Mate"},
                {id:3 , comment:"Nije kasno"}];

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Bravo ti!</p>
                <NeceDaIde kome={ime}/>
                <NumberList komentari={komentari} />
            </div>
        );
    }
}


render(<App/>, document.getElementById('app'));

// class App extends React.Component {
//     render(){
//         return <p>Hello React! bome ide</p>
//     }
// }
//
// render(<App/>, document.getElementById('app'));