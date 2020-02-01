import { NextPage } from "next"
import * as React   from "react"
import { Layout }   from "../components/layout"

const HomePage: NextPage = () => {
    return (
        <Layout title="Home">
            <h1>Home page</h1>
        </Layout>
    )
}

export default HomePage
