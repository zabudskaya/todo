import React from 'react';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './App.module.css';
import About from '../About/About';
import Todo from '../Todo/Todo';

class App extends React.Component{

    render(){
        return (
            <Router>
                <div className={styles.wrap}>
                    <Card className={styles.menu}>
                        <MenuList className={styles.list}>
                            <NavLink to='/' className={styles.link} activeClassName={styles.active} exact>
                                <MenuItem className={styles.listItem}>Обо мне</MenuItem>
                            </NavLink>
                            <NavLink to='/todo' className={styles.link} activeClassName={styles.active} exact>
                                <MenuItem className={styles.listItem}>Задачи</MenuItem>
                            </NavLink>
                        </MenuList>
                    </Card>

                    <Card className={styles.content}>
                        <Route path='/' exact component={About}/>
                        <Route path='/todo' component={Todo}/>
                        <div className={styles.copyright}>
                            Выполнено в Web Hero School
                        </div>
                    </Card>
                </div>
            </Router>

        )
    }
}
export default App;
