import style from './style.module.scss'
import { FaGithub } from 'react-icons/fa'
export function SigninButton() {
  return (
    <button className={style.signinButton}>
      <FaGithub />
      Realixar login
    </button>
  )
}