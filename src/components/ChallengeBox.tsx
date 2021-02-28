import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return(
    <div className={styles.ChallengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 30 minutos</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>

            <button 
            type="button"
            className={styles.ChallengeSucceededButton}
            >
              Completei
            </button>

          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
        <strong>Finalize um desafio para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avance de level completando desafios
        </p>
      </div>
      )}
    </div>
  ) 
}