import React from 'react';
import {useGlobalContext} from "../store/movie_context.js"; 
import '../App.css';

const Stories = () => {

    const {hits} = useGlobalContext();
    console.log(hits)

    return (
        <div className='main'>
            {
                hits.map((curPost) => {
                    const { title, author,  objectID, url, num_comments } = curPost;
                    return (
                        <div className="card"   key={objectID}>
                        <h2>{title}</h2>
                            <p> By <span> {author}  </span> | {num_comments} comments </p>
                             {/* <p>url :{url}</p>     */}
                             <a href={url} target="_blank" rel='noreferrer'>Read More</a>
                             {/* <a href="#">Remove</a> */}
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Stories;