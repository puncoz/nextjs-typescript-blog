import { NextPage } from "next"
import Link         from "next/link"
import * as React   from "react"
import { Layout }   from "../../components/layout"
import { fetcher }  from "../../helpers/common"
import { Blog }     from "../../interfaces"

type BlogPageProps = {
    blogList: Blog[]
}

const BlogPage: NextPage<BlogPageProps> = ({blogList}) => {
    return (
        <Layout title="Blog">
            <h1>Blog List</h1>

            <ul>
                {blogList.map((blog, index) => (
                    <li key={index}>
                        <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

BlogPage.getInitialProps = async () => {
    const blogList: Blog[] = await fetcher("http://localhost:3000/api/blog")

    return {blogList}
}

export default BlogPage
