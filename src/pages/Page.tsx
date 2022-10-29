import styles from './Page.module.scss'

export const Page = ({children} : any) => {
  return (
    <div className={styles.page}>
      <div className={styles.container} >
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}
