import Link                         from "next/link"
import React, { FunctionComponent } from "react"

const Header: FunctionComponent = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link> |{" "}

                <Link href="/about">
                    <a>About</a>
                </Link> |{" "}

                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header
