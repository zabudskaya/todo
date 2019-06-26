import React from 'react';
import classname from 'classnames';
import styles from './Item.module.css';

const Item = ({value, isDone, index, onClickDone}) => (
    <label
        htmlFor={`checkbox[${index}]`}
        onClick={() => onClickDone(isDone)}
        className={
            classname({
                [styles.item]: true,
                [styles.done]: isDone,
            })}>
        {value}
    </label>);

export default Item;