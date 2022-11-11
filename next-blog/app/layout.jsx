import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <div className={'container'}>
        <main>{children}</main>
      </div>
    </html>
  )
}
