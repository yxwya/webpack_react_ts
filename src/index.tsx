import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './App';
import styles from './index.module.scss';
 
const App = () => {
 return (
    <div className={styles['appIndex']}>
        <Apps></Apps>
    </div>
 )
};
 
ReactDOM.render(<App />, document.getElementById('root'));