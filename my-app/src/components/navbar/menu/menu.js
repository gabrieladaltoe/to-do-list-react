import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

class Menu extends React.Component {
    constructor(){
        super()
        this.state = { open : false }
    }

    handleOpenOrClose = () => {
        this.setState({ open : !this.state.open })
    }

    render(){
        let classesOfButton = 'menu__button'
        let classesOfOptions = 'menu__options'

        if (this.state.open){
            classesOfButton += ' menu__button--open'
            classesOfOptions += ' menu__options--open'
        }

        return(
            <div>
               <a  className={classesOfButton} onClick={this.handleOpenOrClose}>Menu</a>
               <ul className={classesOfOptions}>
                   <li><Link to='/quem-somos' onClick={this.handleOpenOrClose}>Quem somos</Link></li>
                   <li><Link to='./contato' onClick={this.handleOpenOrClose}>Contato</Link></li>
                   <li><Link to='/login' onClick={this.handleOpenOrClose}>Login</Link></li>
               </ul>
            </div>
        )
    }
}

export default Menu