import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/9342074?s=460&u=192aba4d106fdd5d679847ddc6c487d992bce79d&v=4" alt=""/>
                <div>
                    <strong>Ênio Costa</strong>
                    <span>Biologia</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod aliquam luctus.<br/><br/> Vestibulum eget molestie ex. Proin elementum semper magna sagittis mollis. Aliquam vitae tempor libero. 
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;