import Alert from 'react-bootstrap/Alert';
import styles from './index.module.css';

const AlertComponent = ({ text }) => {
  return (
    <Alert className={styles.alert} variant={'danger'}>
      {text}
    </Alert>
  );
}
export default AlertComponent;