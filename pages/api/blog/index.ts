import {
    NextApiRequest,
    NextApiResponse,
}                from "next"
import BlogPosts from "../../../data/BlogPosts.json"

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(BlogPosts)
}
