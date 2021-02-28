import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rvkash.png" alt="Avatar"/>
      <div>
        <strong>Rafael Linhares</strong>
        <p>
        <img src="icons/level.svg" alt="Level img"/>
        Level 1</p>
      </div>
    </div>
  )
}