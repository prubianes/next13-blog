import './globals.css'
import styles from './page.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </html>
  )
}
