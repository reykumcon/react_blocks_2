import React, { Component } from 'react';
import styles from './MyStyle.module.css';

class Main extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className={styles.main}>
                {children}
            </div>
        )
    }
}

export default Main;