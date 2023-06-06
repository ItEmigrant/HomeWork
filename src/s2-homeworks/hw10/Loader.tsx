import s from './Loader.module.css'
import preloader from './bll/img/Spin-1s-200px.svg'

export const Loader = () => <img className={s.loader} src={preloader} alt={'fetching'}/>
