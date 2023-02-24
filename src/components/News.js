import React , {Component} from "react";
import NewsItem from "./NewsItem";

class News extends Component
{

    constructor(props) {
        super(props);
        this.state ={
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f8af2a582e7486ab2a69d91a93c12c8&page=1&pageSize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData.totalResults);
        this.setState({
            articles : parsedData.articles,
            totalArticles : parsedData.totalResults
        })
        console.log(this.state.articles.length);
    }
    handlePreviousClick = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f8af2a582e7486ab2a69d91a93c12c8&page=${this.state.page - 1}&pageSize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page - 1
        })
    }

    handleNextClick = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f8af2a582e7486ab2a69d91a93c12c8&page=${this.state.page + 1}&pageSize=5`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page + 1
        })
    }
    render() {
        return(
            <>
                <div className="container my-3">
                    <h1>News - Top Headlines</h1>
                    <div className="row">
                        {
                            this.state.articles.map((element) => {
                                return <div className="col-md-4" key ={element.url} >
                                    <NewsItem title={element.title !== null ? element.title : "..."}
                                              description={element.description ? element.description :"..."}
                                              imageUrl={element.urlToImage ? element.urlToImage : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"}
                                              newsUrl={element.url }>
                                    </NewsItem>
                                </div>
                            })
                        }

                    </div>
                    <div className="container my-3 d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1}  className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
                        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalArticles / 5) } className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                    </div>
                </div>
            </>

        )
    }
}
export default News