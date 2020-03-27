import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

class Footer extends React.Component{

    static defaultProps = {
        count: 4,
    };

    static propTypes = {
        count: PropTypes.number.isRequired
    };



    render(){
        const {count, onFilter, filter} = this.props;

        return(
            <div>
                <p className={styles.text}>Вот столько у Вас задач: {count} </p>
                <div className={styles.filter}>
                    <button id="all" type="button" className={styles.filterItem + ' ' + (filter === 'all' ? styles.active : '')} onClick={() => onFilter('all')}>Все</button>
                    <button id="fulfilled" type="button" className={styles.filterItem + ' ' + (filter === 'fulfilled' ? styles.active : '')} onClick={() => onFilter('fulfilled')}>Выполненные</button>
                    <button id="unfulfilled" type="button" className={styles.filterItem + ' ' + (filter === 'unfulfilled' ? styles.active : '')} onClick={() => onFilter('unfulfilled')}>Невыполненные</button>
                </div>
            </div>
        );
    }
}



export default Footer;