import React from "react";
import { pushRotate as Menu} from "react-burger-menu";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHome, faProjectDiagram, faCode } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './header.module.css';

const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu pageWrapId={"page-wrap"} 
        outerContainerId={"outer-container"} 
        isOpen={isOpen} 
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
            <Link activeClass='active' className={`nav-link ${styles.home}`} to='home' spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon className={`{styles.home}${styles.iconMargin}`} icon={faHome} /> Home
            </Link>
            <Link activeClass='active' className={`nav-link ${styles.code}`} to='skills' spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon className={`{styles.code}${styles.iconMargin}`} icon={faCode} /> Skills
            </Link>
            <Link activeClass='active' className={`nav-link ${styles.projects}`} to='projects' spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon className={`{styles.projects}${styles.iconMargin}`} icon={faProjectDiagram} /> Projects
            </Link>
            <Link activeClass='active' className={`nav-link ${styles.resume}`} to='resume' spy={true} offset={-70} duration={500} onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon className={`{styles.resume}${styles.iconMargin}`} icon={faFile} /> Resume
            </Link>
        </Menu>
    );
};

export default BurgerMenu;