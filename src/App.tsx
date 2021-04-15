import React from 'react'
import styles from './App.module.scss'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Main from './components/mainContent/Main'

const Apps:React.FC = () =>{
    return(
        <div className={styles.appClass}>
            <BrowserRouter>
                <Route path="/" component={Header}></Route>
            </BrowserRouter>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
export default Apps