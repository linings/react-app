import styles from './index.module.css'
import paw from '../../public/paw.svg'
import { Link } from 'react-router-dom';

const Difference = () => {
   return <div className={styles['diff-wrapper']}>
      <h1>Help Us take care of Animals </h1>
      <div>
         <div className={styles.amount}>€ 30</div>
         <div className={styles.text}>Medicine for a pet</div>
      </div>
      <div>
         <div className={styles.amount}>€ 50</div>
         <div className={styles.text}>Food for 5 pets</div>
      </div>
      <div>
         <div className={styles.amount}>€ 100</div>
         <div className={styles.text}>Vet visit</div></div>
      <div>
         <div className={styles.amount}>€ 350</div>
         <div className={styles.text}>Lifesaving surgery</div>
      </div>
      <Link to={'/donate'} className={styles.donate}>
         <img className={styles.paw} src={paw}></img>
         <span className={styles.text}>Donate Now</span>
      </Link>
      <Link to={'/donate'} className={styles.donate2}>
         <img className={styles.paw} src={paw}></img>
         <span className={styles.text}>Donate Monthly</span>
      </Link>
   </div>
}

export default Difference;