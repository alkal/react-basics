import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props)=>{
    const items=props.news.map((item)=>{
        return(
            <NewsItem key={item.id} item={item}/>
        )
    });
    return(
        <main>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h2 className="h4">{props.children}</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {items}
                        </ul>
                    </div>
                 </div>
            </div>
        </main>
    )
}

export default NewsList;