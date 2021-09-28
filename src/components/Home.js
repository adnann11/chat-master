import React from 'react'
import '../stylesheets/home.css'

export const Home = () => {
    return (
        <div>
  
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
    
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Online Chatting</h1>
                <p>Chatting through internet is one of the way to be able to communicate others.</p>
                {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
    
            <div className="container">
              <div className="carousel-caption">
                <h1>Online Chatting</h1>
                <p>Online chatting has become increasingly popular.</p>
                {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
    
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Online Chatting</h1>
                <p>A great advantage of the internet chatting that it brings people from all over the  globe closer together.</p>
                {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
  
    
      <div className="container marketing">
    
        
        <div className="row">
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
    
            <h2>Heading</h2>
            <p>Chatting online is the best way for me to keep in touch with my friends especially Chinese friends. Since I’m far away from my Chinese friends, the only way for me to get enough information about them is through the Internet.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
    
            <h2>Heading</h2>
            <p>We can chat with each other whenever we want to and as long as we can. Even sometimes, I couldn’t see the one I want to chat to then I could leave a message so my friend could see that when he/she logged on next time.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
    
            <h2>Heading</h2>
            <p> I would log on MSN or QQ and then chat with friends or my family. I like chatting online in two reasons; one is that I can keep in touch with my Chinese friends the other is that I may save amount of money in the way of talking with my family online..</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
        </div>
    
    
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Online chatting</h2>
            <p className="lead">chatting online offers me such convenient like keeping in touch with friends and families. Then I don’t need to worry that I would be far away from them some day.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    
          </div>
        </div>
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Online chatting</h2>
            <p className="lead">Chatting is one of the most popular activities on the internet and involves people from all walks of life and just about all ages to come together in areas where they can join in on a variety of topics that they are interested in with people all around the world.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    
          </div>
        </div>
    
        {/* <hr className="featurette-divider"/> */}
    
        {/* <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
    
          </div>
        </div> */}
    
        <hr className="featurette-divider"/>
    
        
    
      </div>
    
    
      
      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    
    
    
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    
          
      
       </div>
    )
}
