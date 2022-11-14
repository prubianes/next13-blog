import Date from '../../../components/date/date'
import { getAllPostIds, getPostData } from '../../../lib/posts'

export default async function Post ({params}) {
    const postData = await getPostData(params.slug);
    return (
        <article>
            <h1 className={'headingXl'}>{postData.title}</h1>
            <div className={'lightText'}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    )
}

export async function generateStaticParams() {
    const slug = getAllPostIds();
    return slug.map((postId) => ({
        slug: postId.id
    }))
}