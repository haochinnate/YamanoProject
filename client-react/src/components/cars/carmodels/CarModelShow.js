import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchCarmodelByName } from '../../../actions';
import youtube from '../../../apis/youtube';

class CarModelShow extends React.Component {
    
    state = { videos: [], isFirst: true };

    componentDidMount() {
        // console.log(this.props.manufacturer);
        // console.log(this.props.carmodel);
        // if (this.props.manufacturer) {
        //     // console.log(this.props.manufacturer);
        //     this.props.fetchCarmodelsByManufacturer(this.props.manufacturer);
        // }
        this.props.fetchCarmodelByName(this.props.match.params.manufacturerName, this.props.match.params.carmodelName);

        // this.fetchVideos(`${this.props.match.params.carmodelName} 試駕`);
    }

    fetchVideos = async (term) => {
        // console.log(term);
        
        const response = await youtube.get('/search', {
            params: { q: term }
        });

        // console.log(response.data.items)
        this.setState({ 
            videos: response.data.items,
        });
    }


    renderVideoItem(video, idx) {
        console.log(video)
        const videoItemClass = idx === 0 ? 'carousel-item active' : 'carousel-item';
        console.log(videoItemClass)
        return (
            <div className={videoItemClass} key={video.id.videoId}>
                {/* "ffjN93Bcvuo" */}
                {/* <img src={video.snippet.thumbnails.medium.url} 
                    className="d-block w-100" 
                    alt={video.snippet.title}>
                </img> */}
                <iframe className="w-100" title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{video.snippet.title}</h5>
                    {/* 精銳小兵 令國產車汗顏！Škoda Fabia 1.0 TSI */}
                    <p>{video.snippet.description}</p>
                    {/* 11月小改款上市的Škoda Fabia，車頭與車尾做了微幅的修改，在安全配備上更是做了許多的精進。自1999年上市發表以來，Fabia在全球銷量已經超過400萬輛，除了 ... */}
                </div>
            </div>
        );
    }

    renderVideosTmp() {
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active" key="ffjN93Bcvuo">
                {/* <img src={video.snippet.thumbnails.medium.url} 
                    className="d-block w-100" 
                    alt={video.snippet.title}>
                </img> */}
                    <iframe className="w-100" title="精銳小兵 令國產車汗顏！Škoda Fabia 1.0 TSI" src={`https://www.youtube.com/embed/ffjN93Bcvuo`}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>精銳小兵 令國產車汗顏！Škoda Fabia 1.0 TSI</h5>
                        <p>11月小改款上市的Škoda Fabia，車頭與車尾做了微幅的修改，在安全配備上更是做了許多的精進。自1999年上市發表以來，Fabia在全球銷量已經超過400萬輛，除了 ...</p>
                    </div>
                </div>
                </div>
  
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }


    renderVideos(videos) {
        // console.log(videos);
        return (
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                
                <div className="carousel-inner">
                    {
                        videos.map((video, i) => {
                            return this.renderVideoItem(video, i)
                        })
                    }

                    {/* <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
    
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
  
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }

    // https://getbootstrap.com/docs/5.0/components/carousel/
    render() {
        
        if (!this.props.carmodel) {
            return <div>Loading...</div>
        }
        
        const { name, bodyStyle, officialUrl, isArchived, 
            manufacturerId, alias, releaseDate, yearsInfo, mainImage} = this.props.carmodel;

        // <div>{carmodel.name}</div>
        // <div>{carmodel.bodyStyle}</div>
        // <div>{carmodel.officialUrl}</div>
        // <div>{carmodel.isArchived}</div>
        // <div>{carmodel.manufacturerId}</div>
        // <div>{carmodel.alias}</div>
        // <div>{carmodel.releaseDate}</div>
        // <div>{carmodel.yearsInfo}</div>
        // <div>{carmodel.mainImage}</div>  

        return (
            <div className="container">
                {/* {this.renderVideos(this.state.videos)} */}
                {this.renderVideosTmp()}
                <h1>Eererer</h1>
                <h1>{name}</h1>
                <h2>{bodyStyle}</h2>
                <h5>{officialUrl}</h5>
                <h5>{isArchived}</h5>
                <h5>{manufacturerId}</h5>
                <h3>更多影片</h3>
                {/* https://www.youtube.com/results?search_query=fabia+%E8%A9%A6%E9%A7%95 */}
            </div>
        );
    }
    
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    // console.log(state);

    const tmpCarModel = _.find(state.carmodels, { name: ownProps.match.params.carmodelName});
    // console.log(tmpCarModel);
    return { 
        carmodel: tmpCarModel,
    }
};

export default connect(
    mapStateToProps, 
    { fetchCarmodelByName }
)(CarModelShow);

