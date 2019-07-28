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
                isDone: false,
                id: 1
            },
            {
                value: 'Пройти все уроки блока react.',
                isDone: false,
                id: 2
            },
            {
                value: 'Сдать тест по react.',
                isDone: false,
                id: 3
            },
            {
                value: 'Сделать финальный проект.',
                isDone: false,
                id: 4
            }
        ]
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if(item.id === id){
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({ items: newItemList });
    };

    render(){
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Список дел:</h1>
                <InputItem/>
                <ItemList props={this.state.items} onClickDone={this.onClickDone} />
                <Footer count={3}/>
            </div>
        );
    }

}
export default App;
