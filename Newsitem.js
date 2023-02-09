import React from 'react'

const Newsitem = (props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div>
        <div className="card" >
            <div style={{
                display:"flex",
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'
                }}>
<span className="badge rounded-pill bg-danger">
        {source}</span>
                </div>
        
  <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title:" "}</h5>
    <p className="card-text">{description?description:" "}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
export default Newsitem
