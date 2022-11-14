import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile.jpg'

const name = 'Pablo Rubianes';

export default function Header ({home}) {
    return(
        <header className={'header'}>
        {home ? (
          <>
            <Image
              priority
              src={profilePic}
              className={'borderCircle'}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={'heading2Xl'}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
                <Image
                  priority
                  src={profilePic}
                  className={'borderCircle'}
                  height={108}
                  width={108}
                  alt={name}
                />
            </Link>
            <h2 className={'headingLg'}>
              <Link href="/" className={'colorInherit'}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
    )
}