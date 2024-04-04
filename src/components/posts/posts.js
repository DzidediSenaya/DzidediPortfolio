import React, { useState, useEffect } from 'react';
import "./posts.css";
import blog from "../../assets/portfolio6.jpg";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://jadeportfolio-api.onrender.com/post')
            .then(response => response.json())
            .then(data => {
                // Combine fetched posts with static posts
                const combinedPosts = [...staticPosts, ...data];
                setPosts(combinedPosts);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Static posts
    const staticPosts = [
        {
            id: 1,
            category: "Article",
            title: "What Happens When You Type www.into a Web Browser",
            content: "Read here: https://www.linkedin.com/in/dzidedi-senaya-8432bb6b/recent-activity/articles/",
            author: "Dzidedi Senaya",
            date: "Mar 5, 2024",
            readingTime: "4 min read"
        }
    ];

    return (
        <section id='Posts'>
           <h1 className="text-center font-bold text-2xl text-sky-900 mb-2">Posts</h1>
            <section className="featured">
                <div className="featured_container">
                    <div className="post_thumbnail">
                        <img src={blog} alt="Featured Post Thumbnail" />
                    </div>

                    <div className="post_info">
                        <a href="#" className="category_btn"></a>
                        <h2 className="post_title">What Happens When You Type www.into a Web Browser<a href="https://www.linkedin.com/in/dzidedi-senaya-8432bb6b/recent-activity/articles/ #target=blank" ></a></h2>
                        <p className="post_body"></p>
                        <div className="post_author">
                            <div className="post_author-avatar" ><img src={blog} alt="Author Avatar" /></div>
                        </div>
                        <div className="post_author-info"></div>
                        <h5>by Dzidedi</h5>
                        <small>june 3rd 2022 -7-23</small>
                    </div>
                </div>
            </section>

            <section className="posts">
                <div className="posts_container">
                    {posts.map(post => (
                        <article className="post" key={post.id}>
                            <div className="post_thumbnail">
                                <img src={blog} alt="Post Thumbnail" />
                                <div className="post_info">
                                    <a href="#" className="category_btn">{post.category}</a>
                                    <h3 className="post_title"><a href={`/post/${post.id}`}>{post.title}</a></h3>
                                    <p className="post_body">{post.content}</p>
                                    <div className="post_author">
                                        <div className="post_author-avatar">
                                            <img src={blog} alt="Author Avatar" />
                                        </div>
                                        <div className="post_author-info">
                                            <h5>by: {post.author}</h5>
                                            <small>{post.date} - {post.readingTime}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Posts;
