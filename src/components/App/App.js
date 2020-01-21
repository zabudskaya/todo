import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './App.module.css';

import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Сontacts/Сontacts';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className={styles.wrap}>
                    <Card className={styles.menu}>
                        <MenuList >
                            <Link to='/' className={styles.link}>
                                <MenuItem>Обо мне</MenuItem>
                            </Link>
                            <Link to='/todo' className={styles.link}>
                                <MenuItem>Задачи</MenuItem>
                            </Link>
                            <Link to='/contacts' className={styles.link}>
                                <MenuItem>Контакты</MenuItem>
                            </Link>
                        </MenuList>
                    </Card>

                    <Card className={styles.content}>
                        <Route path='/' exact component={About}/>
                        <Route path='/todo' component={Todo}/>
                        <Route path='/contacts' component={Contacts}/>
                    </Card>
                </div>
            </Router>

        )
    }
}
export default App;
