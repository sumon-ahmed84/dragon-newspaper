import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';

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
           total {catagoryNews.length} found news
        </div>
    );
};

export default Catagories;