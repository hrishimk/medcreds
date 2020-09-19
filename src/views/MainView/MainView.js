
import React, { useState } from 'react'
import classes from './MainView.module.scss'
import FormFiled from '../../components/ui/FormField/FormField'
import DropDown from '../../components/ui/DropDown/DropDown'
import ButtonView from '../../components/ui/ButtonView/ButtonView'
import ImgOffice from '../../assets/office.png'
import HeaderView from '../../components/app/HeaderView/HeaderView'
import Container from '../../components/ui/Container/Container'
import FooterView from '../../components/app/FooterView/FooterView'

import {
    useWindowWidth,
} from '@react-hook/window-size'

const MainView = () => {

    const windowWidth = useWindowWidth()

    const countries = [

        {
            id: 'usa',
            title: 'USA'
        },
        {
            id: 'india',
            title: 'India'
        }
    ]

    // is smaller screen
    const mobile = windowWidth < 1300

    // Org name
    const [orgName, setOrgName] = useState('')
    const [orgNameError, setOrgNameError] = useState('')

    // Email
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')


    // Country
    const [country, setCountry] = useState(countries[0].id)

    // Category
    const [cat, setCat] = useState(countries[0].id)

    // Certificate type
    const [cert, setCert] = useState(countries[0].id)

    /**
     * Handle form submit
     */
    const submitHandler = () => {
        if (!orgName) {
            setOrgNameError('Field is required')
        }
        else {
            setOrgNameError('')
        }

        if (!email) {
            setEmailError('Field is required')
        }
        else {
            setEmailError('')
        }
    }

    return (
        <div className={classes.MainView}>
            <div className={classes.background}></div>
            <Container>
                <HeaderView />
                <div className={classes.body}>
                    <div className={classes.detail}>
                        <h1 className={classes.mainTitle}>Add Credentialing Organization</h1>
                        <p className={classes.descp}>Onboard A New Credentialing Organization</p>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.imgView}>
                            <img src={ImgOffice} alt="" />
                        </div>
                        <div className={classes.formWrap}>
                            <div className={classes.form}>
                                <div className={classes.inputWrap}>
                                    <FormFiled
                                        label="Organization Name"
                                        required
                                        placeHolder="asdsa@asdas.com"
                                        val={orgName}
                                        change={e => setOrgName(e.target.value)}
                                        errMsg={orgNameError}
                                    />
                                    <DropDown
                                        label="Country"
                                        required
                                        list={countries}
                                        val={country}
                                        change={(val) => { setCountry(val.id) }} />


                                    <FormFiled
                                        label="Email Address"
                                        size={mobile ? "small" : "long"}
                                        required
                                        placeHolder={"asdsa@asdas.com"}
                                        val={email}
                                        change={(e) => { setEmail(e.target.value) }}
                                        errMsg={emailError}
                                    />

                                    <DropDown
                                        label="Certificate Category"
                                        required
                                        list={countries}
                                        val={cat}
                                        change={(val) => { setCat(val.id) }} />
                                    <DropDown
                                        label="Certificate"
                                        required
                                        list={countries}
                                        val={cert}
                                        change={(val) => { setCert(val.id) }} />
                                </div>
                                <div className={classes.buttonWrap}>
                                    <ButtonView label="Add" click={submitHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <FooterView />
        </div>
    )
}

export default MainView