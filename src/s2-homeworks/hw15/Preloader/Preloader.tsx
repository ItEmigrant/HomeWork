import React from 'react';
import preloader from '../Preloader/IMG/Spin-1s-200px.svg'
import style from '../Preloader/preloader.module.css'

export const Preloader = () => {
    return <img className={style.preloader} src={preloader} alt={'fetching'}/>

};

