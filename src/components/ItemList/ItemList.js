import React from 'react';
import Item from '../Item/Item';

const ItemList = ({props}) => (<ol>
    <li> <Item props = {props.firstItem}/> </li>
    <li> <Item props = {props.secondItem}/> </li>
    <li> <Item props = {props.thirdItem}/> </li>
</ol>);

export default ItemList;