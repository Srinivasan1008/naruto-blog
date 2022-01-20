import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticlesList from '../components/ArticleList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {
    const props = useParams();
    const name = props.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(()=> {
        const fetchData = async () => {
           const result = await fetch(`/api/articles/${name}`);
           const body = await result.json();
           setArticleInfo(body);
        }
        fetchData();
    }, [name])

    if(!article){
        return <NotFoundPage />
    }

    const otherArticles = articleContent.filter(article => article.name !== name);

    return(
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        <br/>
        {article.content.map((pargraph, key) => (
            <p key={key}>{pargraph}</p>
        ))}
        <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
        <h3>Other Artcles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}
export default ArticlePage;