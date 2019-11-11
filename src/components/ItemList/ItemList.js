import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({props, onClickDone, onClickDelete}) => (<ol className={styles.list}>
    {props.map((item, index)=> (
        <li className={styles.item} key={item.value} id={item.id}>
            <input type="checkbox"  className={styles.checkbox} id={`checkbox[${index}]`}/>
            <Item
                value={item.value}
                isDone={item.isDone}
                index={index}
                id={item.id}
                onClickDone={onClickDone}
            />
            <button type="button"
                    onClick ={() => onClickDelete(item.id)}
                    className={styles.button}>
                ×
            </button>
        </li>))}
</ol>);

ItemList.propTypes = {
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;