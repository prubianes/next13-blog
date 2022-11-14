import Header from '../../../components/header/header'
import Link from 'next/link'

export default function PostLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <div className={'backToHome'}>
                <Link href="/">
                    ← Back to home
                </Link>
            </div>
        </>
    )
}