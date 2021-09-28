import React from 'react'

function About() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2019/04/03/09/59/chat-4099913_960_720.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5> */}
              <p>chatting online offers me such convenient like keeping in touch with friends and families</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2017/10/09/22/51/adult-2835281_960_720.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/09/11/05/34/whatsapp-interface-1660652_960_720.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p> */}
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
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Chat app</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            On the Internet, chatting is talking to other people who are using the Internet at the same time you are. Usually, this "talking" is the exchange of typed-in messages requiring one site as the repository for the messages (or "chat site") and a group of users who take part from anywhere on the Internet. In some cases, a private chat can be arranged between two parties who meet initially in a group chat. Chats can be ongoing or scheduled for a particular time and duration. Most chats are focused on a particular topic of interest and some involve guest experts or famous people who "talk" to anyone joining the chat. (Transcripts of a chat can be archived for later reference.
            
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
