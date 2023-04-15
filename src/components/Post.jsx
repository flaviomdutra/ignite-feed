import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/flaviomdutra.png"
          />
        </div>
        <div className={styles.authorInfo}>
          <strong>Diego Fernandes</strong>
          <span>Web Developer</span>
        </div>

        <time dateTime="2022-05-11 08:13:30" title="11 de Maio às 08:13h">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>
    </article>
  );
}
