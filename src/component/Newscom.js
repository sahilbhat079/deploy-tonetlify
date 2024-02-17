import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';
import Spiner from './Spiner';
import InfiniteScroll from "react-infinite-scroll-component";


const Newscom = (props) => {
  const [articles, setarticles] = useState([])
  const [load, setload] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] =useState(0)

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  const on_load = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=8`
    let response = await fetch(url);
    props.setProgress(30);
    setload(true);
    if (response) {
      let jsonData = await response.json();
      // console.log(jsonData);
      props.setProgress(70);
      setarticles(jsonData.articles);
      settotalResults(jsonData.totalResults);
      setload(false);
      props.setProgress(100);

    }
  }





  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}  News time`;
    on_load();
  // eslint-disable-next-line 
  }, [])

  


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=8`
    setpage(page + 1);
    
    let response = await fetch(url);
    if (response) {
      const jsonData = await response.json();
      console.log(jsonData);
      setarticles(articles.concat(jsonData.articles));
      settotalResults(jsonData.totalResults);
    }
  };



  return (
    <>
      <h2 className="text-center pt-2" style={{marginTop:'90px',
    marginBottom:"40px"}}> Top Headlines - {props.category} </h2>
      {load && <Spiner />}
      <div className="container"></div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spiner />}
      >
        <div className="container ">
          <div className="row">
            {articles.map((example) => {
              return <div className="col-md-3" key={example.url}>
                <Newsitem title={example.title ? example.title.slice(0, 22) : ""} author={example.author} date={example.publishedAt} description={example.description ? example.description.slice(0,60) : ""} imageurl={example.urlToImage} source={example.url} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>



  )
}



Newscom.propTypes = {
  country: PropTypes.string
};

Newscom.defaultProps = {
  country: 'in',
};



export default Newscom;