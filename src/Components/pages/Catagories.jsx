import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import NewsCard from '../NewsCard';

const Catagories = () => {
    const {id}=useParams()
    const data=useLoaderData();
    const [catagoryNews,setcatagoryNews]=useState([]);
    useEffect(()=>{
        if(id=="0"){
            setcatagoryNews(data);
            return;
        }else if(id ==
            "1"
        ){
          const filterNews= data.filter(news=>news.others.is_today_pick == true);
          setcatagoryNews(filterNews);  
        }else{
            
            const filterNews= data.filter(news=>news.category_id ==id);
            // console.log(filterNews);
            setcatagoryNews(filterNews);
        }
        
    },[data,id])
    
    return (
        <div>
           <h1 className="font-bold mb-5">Total <span className="text-secondary">{catagoryNews.length}</span> news found</h1>
           <div className="grid grid-cols-1 gap-5">
            {
                catagoryNews.map(news=>(<NewsCard key={news.id} news={news}></NewsCard>))
            }

           </div>
        </div>
    );
};

export default Catagories;