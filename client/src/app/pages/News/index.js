import React, { useState, useEffect } from 'react'
import NewsList from "./NewList";
import { apiNewsRead } from '../../../services'

function News() {
    const [allNews, setAllNews] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await apiNewsRead()
        setAllNews(res.allNews)
    }

    return (
        <div className='news-wrapper'>
            <div className='news-top'>
                <div className='title'>
                    Tin tức
                </div>
                <div className='desc'>
                    The Coffee sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.
                </div>
            </div>
            <NewsList data={allNews} />
        </div>
    );
}

export default News;