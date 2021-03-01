import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const {
    minutes, 
    seconds, 
    hasFinished, 
    startCountdown, 
    resetCountdown, 
    isActive
  } = useContext(CountdownContext)
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.CountdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
          <> 
            {isActive ? (
              <button type="button"
                className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar Ciclo
              </button>

            ) : (
                <button type="button"
                  className={styles.CountdownButton}
                  onClick={startCountdown}
                >
                  Iniciar Ciclo
                </button>
              )}
          </>
        )}
    </div>
  );
} 