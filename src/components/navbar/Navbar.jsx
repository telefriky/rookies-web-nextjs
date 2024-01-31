'use client'
import Image from "next/image";
 import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
//import { auth } from "@/lib/auth";


// import { useRouter } from 'next/router'
// const router = useRouter()
// const { pathname, asPath, query } = router
// change just the locale and maintain all other route information including href's query

const Navbar =  () => {

  //const session = await auth();

  const f = 0.75;
  const w = 600 * f;
  const h = 118 * f;

  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src='/navbar_logo.png'
          alt="Rookies"
          width={w}
          height={h}
          className={styles.imgContainer}
        />
      </Link>
      <div>
        {/* <Links session={session}/> */}

        <Links />

      </div>
    </div>
  )
}

export default Navbar