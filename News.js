import React,{useEffect,useState} from 'react'
import Loading from './Loading';
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
const[articles,setArticles]=useState([]);
const[loading,setLoading]=useState(false);
const[page,setPage]=useState(1);
const[totalResults,setTotalResults]=useState(0); 

const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const updateNews= async ()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da160f5b90ae4456b8129e44af12177e&page=${props.page}&pageSize=${props.pageSize}`;
    let data=await fetch(url);
    props.setProgress(30)
    let parsedData=await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
props.setProgress(100)
}

useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)}-NewMonkey App`;
   updateNews()
}, [])

const  handlePrevClick = async () => {
 setPage(page-1)
updateNews()

}
const handleNextClick = async ()=>{
    setPage(page+1)
    updateNews()

    }
const fetchMoreData = async () => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da160f5b90ae4456b8129e44af12177e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true);
    let data=await fetch(url);
let parsedData=await data.json();
console.log(parsedData);
setArticles(articles.concat(parsedData.articles))
setTotalResults(parsedData.totalResults)
}

        
    return (
        <>
        
            
            <h1 className="text-center" style={{margin:"40px 0px", marginTop:"90px"}}>Newsmonkey App</h1>
             {/* {loading && <Loading/>}  */}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles!==totalResults}
          loader={<Loading/>}>

            <div className="container">
            <div className='row'>
                {articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                    <Newsitem title={element.title?element.title:" "} description={element.description?element.description:" "} 
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div> 
                })}
                </div>
            
            </div>
                </InfiniteScroll>
</>
      
    )
            }
        News.defaultProps = {
            country: 'in',
            pageSize:8,
            category:'general'
          }
          News.propTypes={
            country: PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string
    
          }
          export default News
  

    
