import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './HeaderView.module.scss'
import LinkView from '../../ui/LinkView/LinkView'
import AvatarView from '../../ui/AvatarView/AvatarView'
import LogoView from '../../app/LogoView/LogoView'

import {
    useWindowWidth,
} from '@react-hook/window-size'

const HeaderView = () => {

    const links = [
        {
            id: 'home',
            text: 'Home',
        },
        {
            id: 'orgs',
            text: 'Credentialing Organizations',
        },
        {
            id: 'hospitals',
            text: 'Hospitals',
        },
        {
            id: 'reports',
            text: 'Reports',
        }
    ]

    const [activeLinkId, setActiveLinkId] = useState('home')

    // Mobile menu
    const [menuActive, setMenuActive] = useState(false)

    const windowWidth = useWindowWidth()

    const activeLink = links.find(l => l.id === activeLinkId)
    const inactiveLinks = links.filter(l => l.id !== activeLinkId)


    /**
     * Desktop Menu
     */
    const Links = <div className={classes.links}>
        {
            links.map(link => (
                <LinkView
                    key={link.id}
                    text={link.text}
                    active={link.id === activeLinkId}
                    click={() => setActiveLinkId(link.id)}
                />
            ))
        }
    </div>


    /**
     * Mobile menu
     */
    const MobileLinks = <div className={classes.links}>
        <LinkView
            key={activeLink.id}
            text={activeLink.text}
            active={false}
        />
        <div className={classes.hamburger} onClick={() => setMenuActive(!menuActive)}>
            {
                menuActive &&
                <ul className={classes.menuList}>
                    {
                        inactiveLinks.map(link => (
                            <li
                                key={link.id}
                                onClick={() => setActiveLinkId(link.id)}
                            >
                                {link.text}
                            </li>
                        ))
                    }
                </ul>

            }
        </div>
    </div >

    return (
        <div className={classes.HeaderView}>
            <LogoView />
            <div className={classes.innerWrap}>
                {windowWidth > 1000 ? Links : MobileLinks}
                <AvatarView path="https://picsum.photos/200" name="Ericnel" />
            </div>
        </div>
    )
}

HeaderView.propTypes = {
    /** Logged in user name */
    userName: PropTypes.string,
    /** User avatar  */
    userAvatar: PropTypes.string,
    /** Nav links */
    links: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })),
    /** Selected link id */
    selectedLink: PropTypes.string
};

HeaderView.defaultProps = {
    links: [],
    userName: 'User',
    userAvatar: ''
}

export default HeaderView