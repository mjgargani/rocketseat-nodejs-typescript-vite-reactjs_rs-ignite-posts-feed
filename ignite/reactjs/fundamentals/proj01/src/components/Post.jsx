import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/46717827?v=4" />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Gargani Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Esse é meu post!</p>
        <p><a href="#">http://gargani.dev</a><a href="#">http://gargani.dev</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}