import { NextPage } from "next"
import Link         from "next/link"
import * as React   from "react"
import { Layout }   from "../../components/layout"
import { fetcher }  from "../../helpers/common"
import { Blog }     from "../../interfaces"

type Props = {
    post: Blog
}

const BlogPost: NextPage<Props> = ({post}) => {
    return (
        <Layout title={`${post.title} | Blog`}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Published on {post.published_on}</p>

            <Link href="/blog">
                <a>Back to blog list</a>
            </Link>
        </Layout>
    )
}

BlogPost.getInitialProps = async ({query}) => {
    const post: Blog = await fetcher(`/api/blog/${query.id}`)

    const moment = (await import("moment")).default


    return {post: {...post, published_on: moment(post.published_on).format("dddd D MMMM YYYY")}}
}

export default BlogPost
