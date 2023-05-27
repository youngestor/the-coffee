import moment from 'moment'

function NewsList({ data }) {
    return (
        <div className='news-list'>
            {data.map((item, index) => {
                const date = moment(item.updatedAt).subtract(10, 'days').calendar()

                return <div key={index} className='news-item'>
                    <img src={item.image} alt='' />
                    <div className='bulletin'>
                        <div className='title'>
                            {item.title}
                        </div>
                        <div className='info'>
                            <span>{date}</span>
                            <span>{item.author}</span>
                        </div>
                        <div className='desc'>
                            {item.desc}
                        </div>
                    </div>
                </div>
            })}

        </div>
    );
}

export default NewsList;