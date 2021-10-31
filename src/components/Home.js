import React from 'react'
import '../stylesheets/home.css'

export const Home = () => {
    return (
      <div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/09/11/05/34/whatsapp-interface-1660652_960_720.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2019/09/07/02/56/background-4457839_960_720.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2018/08/07/10/24/chatbot-3589528_960_720.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<hr />

<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  info button
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h2 className="offcanvas-title" id="offcanvasExampleLabel">The Basics info</h2>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    Log in first then go to the chat room....
   <h3><b>Username:</b></h3>  and Password Guidelines
Keep your account safe and secure! Do not share your username and password with anyone. Use the following guidelines for creating a secure username and password.

Username
Your username:

Must be between six and 50 characters long.
Can contain any letters from a to z and any numbers from 0 through 9.
Password
<h3><b>Your password:</b></h3>

Must be between eight and 32 characters long.
Must include at least one number or special character and one letter.
<h3><b>Password Security:</b></h3>
To help make your password more secure:

Do not include in it any personal information, such as your first name, last name, username, or birth date. Avoid regular words from a dictionary.
Replace letters with numbers. You might use the number 3 instead of an e, a 1 instead of an i, or a zero instead of an o. For example: b0st0ndud3 (bostondude) or 1mag1n3that (imaginethat).
Create a phrase instead of just one word (for example, MyGrade100).
    </div>
  </div>
</div>
<hr />

<h1 className="text-center"><b>Online chatting</b></h1>


<p className="text-start">Online chatting has become increasingly popular. Individuals are no longer hindered from communicating with each other due to physical barriers such as distance , borders or sea. The most common place for people to chat is in chat rooms. Many people , especially youngsters , use 'messenger' services like 'Facebook Messenger' and the newest is 'Whatsapp Messenger' to chat. However , there are advantages and disadvantages of online chatting.</p>
<p className="text-center">In addition , chatting with others in terms of studies helps students to understand different points of view and leads to abetter understanding of what is available in terms of online resources. Meeting with individuals from different towns , cultures , and countries on the Internet and yhe exchanging ideas and thoughts can widen a chatter's horizon. Similarly , chatting to people abroad gives a wider appreciation of global's events and deeper understanding of the impact of local and international decision making. From chatting with our Internet acquaintances, our storehpuse of knowledge of other cultures and countries will improve.</p>
<p className="text-start"> I use the internet to chat with my friends and my family. Everyone chats online for different reasons. Chatting online is a worldwide thing which everyone enjoys.The internet is a worldwide thing. Everyone uses it. Chatting online is not only for teenagers but for everyone who wants to chat. Teens chat with their friends everyday or every weekend. Sometimes people chat online with their long distance friends who live far away from them. Online chat is a common thing to anyone.
</p>
<hr />
<footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    
    
    
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    
          
      
      </div>
    )
}