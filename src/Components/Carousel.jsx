    import React from 'react';
    import image1 from '../images/brenan.jpg'
    import image2 from  '../images/ivan.jpg'
    import image3 from  '../images/jonas.jpg'


    const Carousel = () => {
        return (
            <div className="container-fluid">
            <div className="row">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            
                <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            
                </ol>
        
        
                <div className="carousel-inner carousel-content" role="listbox">
                <div className="item active">
                    <img src={image1} alt="..."/>
                    <div className="carousel-caption">
                    ...
                    </div>
                </div>
                <div className="item">
                    <img src={image2} alt="..."/>
                    <div className="carousel-caption">
                    ...
                    </div>
                </div>
                <div className="item">
                    <img src={image3} alt="..."/>
                    <div className="carousel-caption">
                    ...
                    </div>
                </div>
            
                    </div>
                </div>
                </div>
            </div>
        
        
        );
    }

    export default Carousel;
