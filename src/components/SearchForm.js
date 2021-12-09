import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const key = "df0a80b6b88c3f3fdcb4865e89f020a4";

const SearchForm = () => {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);

    const changeHandler = (e) => {
        setSearchInput(e.target.value);        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(searchInput);

        // fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchInput}&per_match=24&format=json&nojsoncallback=1`)
        //     .then( response => response.json())
        //     .then( data => console.log(data.photos.photo))

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${searchInput}&per_match=24&format=json&nojsoncallback=1`)
            .then( response => setData(response.data.photos.photo))
            .catch( error => {
                console.log("Encountered an error with fetching and parsing data", error)
            })

        
    }
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                <form onSubmit={submitHandler}>
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search" value={searchInput} onChange={changeHandler}  placeholder="Search Images..." />
                        </div>                        
                        <div className="col-auto">
                            <button className="btn btn-lg btn-success" type="submit">Search</button>
                        </div>                        
                    </div>
                </form>
            </div>       
        </div>    

        { data.length >= 1 ? <Results data={data} /> : <h5>Search Result...</h5> }        
        </>
    )
}

export default SearchForm;