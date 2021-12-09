import React from "react";

const SearchResult = ({data}) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((image)=><div className="col-md-4 mb-4" key={image.id}>
                                <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} className="img-fluid" alt={image.title} />
                            </div>
                        )
                    }
                </div>
            </div>
        </> 
    )
}

export default SearchResult;