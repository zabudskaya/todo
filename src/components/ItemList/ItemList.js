import React from 'react';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import classname from "classnames";


class ItemList extends React.Component{

    static propTypes = {
        onClickDone: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
    };

    static defaultProps = {
        value: 'Тут должно быть задание',
        isDone: false
    };


    render() {
        const {props, onSortEnd, onClickDone, onClickDelete} = this.props;

        const SortableItem = sortableElement(({children}) => {
            return <li className={styles.item}>{children}</li>
        });

        const SortableContainer = sortableContainer(({children}) => {
            return <ul  className={styles.list}>{children}</ul>;
        });

        this.block = [];

        return(
            <SortableContainer onSortEnd={onSortEnd} pressDelay="200">
                {props.map((item,index) => (
                    <SortableItem
                        className={styles.item}
                        key={item.value}
                        id={item.id}
                        index={index}>
                        <input type="checkbox" checked={item.isDone} className={styles.checkbox} id={`checkbox[${index}]`} readOnly={true}/>
                        <div
                            onClick={() => onClickDone(item.id)}
                            draggable="true"
                            className={
                                classname({
                                    [styles.itemText]: true,
                                    [styles.done]: item.isDone,
                                })}
                            ref={node => this.block[item.id] = node}
                            >
                            {item.value}
                        </div>
                        <button type="button"
                                onClick={() => onClickDelete(item.id)}
                                className={styles.button}>
                            ×
                        </button>
                    </SortableItem>
                ))}
            </SortableContainer>
        )
    }
}

ItemList.propTypes = {
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;