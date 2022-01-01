import style from './style.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

export function SigninButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return isAuthenticated ? (
    <button className={style.signinButton}>
      <FaGithub color='#84d361' />
      Renan1fps
      <FiX color='#737380' className={style.closeIcon} onClick={() => setIsAuthenticated(false)} />
    </button>
  ) : (
    <button className={style.signinButton}>
      <FaGithub color='#eba417' />
      Realixar login
    </button>
  )
}