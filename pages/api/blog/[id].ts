import {
    NextApiRequest,
    NextApiResponse,
}                from "next"
import BlogPosts from "../../../data/BlogPosts.json"
import { Blog }  from "../../../interfaces"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id as string
    const blog = (BlogPosts as Blog[]).find(blog => blog.id === id)

    if (!blog) {
        return res.status(400).json({message: "Not found."})
    }

    return res.status(200).json(blog)
}
