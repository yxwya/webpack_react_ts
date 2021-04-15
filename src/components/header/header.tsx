import React from 'react'
import styles from './Header.module.scss'

// class Header extends React.Component{
//    render(){
//        return(
//            <div>yuan xiao wei</div>
//        )
//    }
// }

const Header:React.FC = ()=>{
    return(
        <div className={styles.nameClass}>yuan xiao wei</div>
    )
}

export default Header
