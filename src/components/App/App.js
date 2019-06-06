import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from "../Footer/Footer";
import InputItem from "../InputItem/InputItem";

import './App.css'

const App = () => {
    const props = [
            {
                value: 'Пройти все уроки блока react.'
            },
            {
                value: 'Сдать тест по react.'
            },
            {
                value: 'Сделать финальный проект.'
            }
        ];

        return (
            <div className="wrap">
                <h1 className="wrap__title">Список дел:</h1>
                <InputItem/>
                <ItemList props={props} className="wrap__list"/>
                <Footer count={3}/>
            </div>
        );
};

export default App;