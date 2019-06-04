import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from "../Footer/Footer";
import InputItem from "../InputItem/InputItem";

const App = () => (
    <div>
        <h1>Список дел:</h1>
        <InputItem />
        <ItemList/>
        <Footer/>
    </div>
);

export default App;