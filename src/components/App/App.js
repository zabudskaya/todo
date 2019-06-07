import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from "../Footer/Footer";
import InputItem from "../InputItem/InputItem";
import styles from './App.module.css';



class App extends React.Component{
    state = {
        items: [
            {
                value: 'Закончить блок js.',
                isDone: true
            },
            {
                value: 'Пройти все уроки блока react.',
                isDone: false
            },
            {
                value: 'Сдать тест по react.',
                isDone: false
            },
            {
                value: 'Сделать финальный проект.',
                isDone: false
            }
        ]
    };
    render(){
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Список дел:</h1>
                <InputItem/>
                <ItemList props={this.state.items}/>
                <Footer count={3}/>
            </div>
        );
    }

}

export default App;