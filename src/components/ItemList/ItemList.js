import React from 'react';
import Item from '../Item/Item';

const ItemList = ({props}) => (<ol>
    {props.map(item => (<li key = {item.value}> <Item value = {item.value}/> </li>))}
</ol>);

export default ItemList ;