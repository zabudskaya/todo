import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from "../Footer/Footer";
import InputItem from "../InputItem/InputItem";
import arrayMove from 'array-move';




class Todo extends React.Component{
    state = {
        items:
        localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) :
        [
            {
                value: 'ЗАКОНЧИТЬ БЛОК JS',
                isDone: true,
                id: 1
            },
            {
                value: 'ПРОЙТИ ВСЕ УРОКИ БЛОКА REACT',
                isDone: true,
                id: 2
            },
            {
                value: 'СДАТЬ ТЕСТ ПО REACT',
                isDone: true,
                id: 3
            },
            {
                value: 'СДЕЛАТЬ ФИНАЛЬНЫЙ ПРОЕКТ',
                isDone: false,
                id: 4
            }
        ],
        increment: 4,
        filter: 'all',
        prevent: false,

    };

    componentDidUpdate() {
        localStorage.setItem('items', JSON.stringify(this.state.items));
    }

    onClick = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if(item.id === id){
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({ items: newItemList });
    };

    onClickDone = id => {
      this.timer = setTimeout(() => {
          if(!this.state.prevent){
              this.onClick(id)
          }
          this.setState({
              prevent: false
          })
      }, 200);

    };

    onClickDelete = id => {
        const newItemList = this.state.items.filter(item => item.id !== id);
        this.setState( {items: newItemList});
    };

    onClickAdd = value => this.setState( state => ({
        items: [
            ...state.items,
            {
                value,
                isDone: false,
                id: state.increment + 1,
            }
        ],
        increment: state.increment + 1
    }));

    onFilter = value => {
        this.setState({
            filter: value
        })
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState( {
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render(){
        let items = this.state.items;

        if (this.state.filter === 'fulfilled') {
            items = items.filter(item => item.isDone);

        }else if(this.state.filter === 'unfulfilled'){
            items = items.filter(item => !item.isDone);
        }


        return (
            <div>
                <InputItem props={items} onClickAdd={this.onClickAdd}/>
                <ItemList props={items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}
                          onSortEnd={this.onSortEnd}
                />
                <Footer
                    onFilter={this.onFilter}
                    filter={this.state.filter}
                    props={items}
                    count={items.length}
                />
            </div>
        );
    }

}
export default Todo;
