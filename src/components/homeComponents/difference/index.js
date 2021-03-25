import styles from './index.module.css'
import paw from '../../../public/paw.svg'
import { Link } from 'react-router-dom';
import Display from '../../creditCard/diplay';
import { useState } from 'react';


const Difference = () => {
   const [showCard, setShowCard] = useState(false);

   const handleCloseCard = () => {
      setShowCard(false);
   };
   const handleShowCard = () => setShowCard(true);


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
      <div className={styles.donate2}>
         <img className={styles.paw} src={paw}></img>
         <button onClick={handleShowCard} className={styles.text}>Donate Now</button>
         {showCard && <Display props={{ show: showCard, handleClose: handleCloseCard }} />}
      </div>

   </div>
}

export default Difference;