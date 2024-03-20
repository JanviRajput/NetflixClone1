import React from 'react'



export default function Homepage() {
  return (
    <>
    {/* <div class="container"> */}

   <div className='homepage' >
  
    <div className='navbar'>
<li className='logo'>
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</li>
<li className='buttons'>
Sign up
</li>


      </div>
      <div className='main'>
        <div className='area'>
          <h1>Unlimited movies, TV shows and more</h1>
          <br/><br/>
          <h3>Watch anywhere. Cancel anytime.</h3><br/><br/>
          <h4>Ready to watch? Enter your email to create or restart your membership.
          </h4><br/><br/>


<div className='search'>
  <input type='email'className='box' placeholder='Email Address'/>

  <button className='try'>Get Started</button> 
</div>
<br></br>
<br></br>
<br></br><br></br><br></br>
    </div>

      </div>

<div className='container1'>
  <div className='text'>
    <h1>Enjoy on your TV</h1>
    <p>Watch on smart TVs, PlayStation, Xbox, <br/>Chromecast, Apple TV, Blu-ray players and<br/> more.

</p>
  </div>


  <div className='image'>
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
    <video style={{position:"absolute",marginBottom:"20px",height:"25vh",width:"18%"}} autoPlay loop playsInline muted src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
  </div>
</div>
<hr></hr>

<div className='container1'>
  <div className='image'>
  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
  </div>

  <div className='text'>
    <h1>Download your shows to watch offline
</h1>
    <p>Save your favourites easily and always have something to watch.
</p>
  </div>
</div>
<hr></hr>

<div className='container1'>
  <div className='text'>
    <h1>Watch everywhere
</h1>
    <p>Stream unlimited movies and TV shows on <br/>your phone, tablet, laptop, and TV.


</p>
  </div>


  <div className='image'>
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
    <video style={{position:"absolute",marginBottom:"10px",height:"20vh",marginRight:"7px", marginTop:"2px"}} autoPlay loop playsInline muted src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
  </div>
</div>

<hr></hr>
<div className='container1'>
  <div className='image'>
  <img src="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"/>
  </div>

  <div className='text'>
    <h1>Create profiles for kids</h1>
    <p>Send children on adventures with their favourite<br/> characters in a space made just for them—free with<br/> your membership.

</p>
  </div>
</div>

<hr></hr>
<div className='questions'>
  <h1>Frequently Aksed Questions</h1>
  <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>

      <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>
      <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>
      <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>
      <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>
      <div className='ques'>
    <div className='textbox'>What is Netflix</div>
      </div>



      </div>
      
      </div> 
      {/* </div> */}
    </>


   
  )
}
