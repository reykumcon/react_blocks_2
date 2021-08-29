import React, { Component } from 'react';
import styles from './MyStyle.module.css';

class Subcontent extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.subcontent}></div>
                <div className={styles.subcontent}></div>
                <div className={styles.subcontent}></div>
            </div>
        )
    }
}

export default Subcontent;