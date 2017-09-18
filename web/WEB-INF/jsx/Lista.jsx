import React from 'react';

function ListItem(props) {
    const value = props.value;
    return (
        <li>
            {value}
        </li>
    );
}

let ime = "Mate";

function NumberList(props) {
    const komentari = props.komentari;
    const listItems = komentari.map((komentar) =>
        <ListItem value={komentar.comment} key={komentar.id}/>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export {NumberList, ime}


