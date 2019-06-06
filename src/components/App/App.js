import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from "../Footer/Footer";
import InputItem from "../InputItem/InputItem";

const props = {
    firstItem: 'Пройти все уроки блока react.',
    secondItem: 'Сдать тест по react.',
    thirdItem: 'Сделать финальный проект.'
};

const App = () => (
    <div>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList props = {props}/>
        <Footer count = {3}/>
    </div>
);

export default App;