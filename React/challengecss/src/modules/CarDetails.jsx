import styles from './CarDetails.module.css';

// eslint-disable-next-line react/prop-types
const CarDetails = ({marca, cor, km}) => {
  return (
    <div className={styles.details}>
        <h1>{marca}</h1>
        <p>Cor: {cor}</p>
        <p>KM: {km}</p>
        <br />
    </div>
  )
}

export default CarDetails