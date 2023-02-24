import React, {Component} from "react";

class NewsItem extends Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        let title = this.props.title;
        let description = this.props.description;
        return(
            <div className="card" style={
                {
                    width: "18 rem"
                }
            }>
                <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={this.props.newsUrl} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
                    </div>
            </div>
        )
    }
}

export default NewsItem;