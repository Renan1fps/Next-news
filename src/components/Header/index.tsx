import style from './style.module.scss'
export function Header(){
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news logo"/>
        <nav>
          <a className={style.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}