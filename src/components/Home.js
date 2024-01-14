import logo from '../images/logox.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Changed faX to faTimes
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Home = () => {
  return (
    <>
      <div className='container' style={{ marginLeft: 80, marginTop: 10 }}>
        <div className='row'>
          <div className='col-3'>
            <img src={logo} style={{ height: 30 }} alt="Logo" />
            <br /><br />
            <FontAwesomeIcon icon={faHouse} /> &nbsp;&nbsp;<span>Home</span><br /><br />
            <FontAwesomeIcon icon={faMagnifyingGlass} /> &nbsp;&nbsp;<span>Explore</span><br /><br />
            <FontAwesomeIcon icon={faBell} /> &nbsp;&nbsp;<span>Notifications</span><br /><br />
            <FontAwesomeIcon icon={faMessage} /> &nbsp;&nbsp;<span>Messages</span><br /><br />
            <FontAwesomeIcon icon={faList} /> &nbsp;&nbsp;<span>Lists</span><br /><br />
            <FontAwesomeIcon icon={faUserPlus} /> &nbsp;&nbsp;<span>Communities</span><br /><br />
            <FontAwesomeIcon icon={faTimes} /> &nbsp;&nbsp;<span>Verified</span><br /><br /> {/* Changed faX to faTimes */}
            <FontAwesomeIcon icon={faUser} /> &nbsp;&nbsp;<span><b>Profile</b></span><br /><br />
            <FontAwesomeIcon icon={faCaretDown} /> &nbsp;&nbsp;<span>More</span><br /><br />
            <button style={{ background: "aqua", paddingleft: 80, paddingRight: 50, borderRadius: 20, color: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Post</button>
            <div className='loginfo'>
            <div className='row'>
                    <div className='col-2'>
                      <img src='https://pbs.twimg.com/profile_images/1698680630534651904/n_HNXiUO_400x400.png' height={40} width={40} style={{ borderRadius: "50%" }} />
                      </div>
                      <div className='col-8'><b>Sakshi Sinhg</b><br/><small>@SakshiSingh63160</small></div>
                      <div className='col-2'><FontAwesomeIcon icon={faCaretDown} /></div>
                  </div>  
            </div>
          </div>
          <div className='col-6'>
            <div className="card" style={{ width: "40rem" }}>
              <h4> &nbsp;&nbsp;Sakshi Singh</h4>
              <small> &nbsp;&nbsp; &nbsp;&nbsp;0 posts</small>
              <div className="card-body">
                <div className="card" style={{ paddingLeft: "none" }}>
                  <img height={150} className='bgImg' src="https://imgs.search.brave.com/JrR2JiBIMjpL7zEl9eAcD5h6aE5JrrxFWPg0AZPA8CQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDY1ODczNDgtZDEy/NjYwYzMwYzUwP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGJt/RjBkWEpoYkh4bGJu/d3dmSHd3Zkh4OE1B/PT0mdz0xMDAwJnE9/ODA" alt="..." />
                  <div className='row'>
                    <div className='col-2'><img src='https://pbs.twimg.com/profile_images/1698680630534651904/n_HNXiUO_400x400.png' height={100} width={80} style={{ borderRadius: "50%" }} /></div>
                    <div className='col-7'></div>
                    <div className=' btn col-3'><button style={{ marginTop: 20, backgroundColor: "white", borderRadius: 20, borderBox: " rgb(72, 70, 70)" }}><b>Edit profile</b></button></div>
                  </div>

                </div>
              </div>
              <div className='info'>
                <h5><b> &nbsp;&nbsp;Sakshi Singh</b></h5>
                <span className='info' > &nbsp;&nbsp;@SakshiSing63160</span><br />
                <span> &nbsp;&nbsp;<FontAwesomeIcon icon={faCalendar} /> Joined September 2023</span><br />
                &nbsp;&nbsp;<b>1</b><small>Following</small> &nbsp;&nbsp;&nbsp;&nbsp;<b>0</b><small>Follower</small>
              </div>
              <br /><br />
              <div>
                <button className='btnn pbtn'><b>Posts</b></button>
                <button className='btnn'>Replies</button>
                <button className='btnn'>Highlight</button>
                <button className='btnn'>Media</button>
                <button className='btnn'>Likes</button>
              </div>
              <hr />
              <h4><b>
                Let’s get you set up</b></h4>
              <br /><br />
              <div className='row'>
                <div className='col-4'>
                  <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://media.istockphoto.com/id/1250060339/photo/dog-shelter.jpg?s=612x612&w=0&k=20&c=-YBjeCarIKcvzONuxHdYAr1N64DjiiDOa56QOArlvY4=" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://media.istockphoto.com/id/1324099927/photo/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-drops-of-warm-rain.jpg?s=612x612&w=0&k=20&c=ZQiqn4SPj_7WhjhbahGJ1UwaJMrwuuSkJRjYAi9YYx0=" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div class="card" style={{ width: "18rem;" }}>
                    <img src="https://media.istockphoto.com/id/1064136288/photo/she-bear-and-cubs.jpg?s=612x612&w=0&k=20&c=yawood030on-Gw0fAnEPO6JyrHw8Fflr7-S_ZOmPwJU=" class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='searchInput'><FontAwesomeIcon style={{ color: 'blue' }} icon={faMagnifyingGlass} />&nbsp;&nbsp;&nbsp;<input style={{ border: "none" }} placeholder='Search' type='search' /></div>
            <br />
            <div className='box'>
              <h5><b>You might like</b></h5>
              <br/>
              <div className='row'>
                <div className='col-2'>
                  <img height={40} style={{borderRadius:"50%"}} src='https://imgs.search.brave.com/pq-n-tiswnyHtTRWNafdt14BZuA2DCHYJDPli5mzFOg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC84MC85Ni94/LXRoZS1uZXctdHdp/dHRlci1sb2dvdHlw/ZS1yZWRlc2lnbi12/ZWN0b3ItNDc5NTgw/OTYuanBn'></img>
                </div>
                <div className='col-8'>
                  <b>Elon Musk</b><br/>
                  <small>@elonmusk</small>
                </div>
                <div className='col-2'>
                    <button style={{backgroundColor: "black", color:"white", borderRadius:"25px"}}>Follow</button>
                </div>
              </div>

              <div className='row'>
                <div className='col-2'>
                <img height={35} width={40} style={{borderRadius:"50%"}} src='https://imgs.search.brave.com/qUhGULfTDJPirVXpAm_jpxOygoH5oYAAD4BE3Yma-tw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNDcvMTg4NzQ3/LTA1MC0xRDM0RTc0/My9CaWxsLUdhdGVz/LTIwMTEuanBnP3c9/NDAwJmg9MzAwJmM9/Y3JvcA'></img>
                </div>
                <div className='col-8'>
                <b>Bill Gates</b><br/>
                  <small>@billgates</small>
                </div>
                <div className='col-2'>
                <button style={{backgroundColor: "black", color:"white", borderRadius:"25px"}}>Follow</button>
                </div>
              </div>

              <div className='row'>
                <div className='col-2'>
                <img height={40} width={40} style={{borderRadius:"50%"}} src='https://imgs.search.brave.com/YdqTMM5i6upZjQvyIIVixrTPLhc71DW-XMaGDzeVZIU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVlYzcw/MzcyYzk2MjU4NDcz/Zjg5MTk2NC8zOjIv/d18xMjgwLGNfbGlt/aXQvQml6LXBpY2hh/aS1oXzE1MTUxNzk3/LmpwZw'></img>
                </div>
                <div className='col-8'>
                <b>Sundar Pichai</b><br/>
                  <small>@pichaisundar</small>
                </div>
                <div className='col-2'>
                <button style={{backgroundColor: "black", color:"white", borderRadius:"25px"}}>Follow</button>
                </div>
              </div>
              <div style={{color:"rgb(82, 168, 185)"}} className='row'>
                &nbsp;&nbsp;Show more
              </div>
            </div>
            <br/><br/>
            <div className='box'>
              <h5><b>What's happening</b></h5>
              <br/>

                <div className='row'>
                  <div className='col-8'>
                    <small>US Open .Live</small>
                    <h6><b>US Open Tennis 2023</b></h6>
                  </div>
                  <div className='col-4'>
                  <img style={{borderRadius:10}} src='https://imgs.search.brave.com/1dQeW-a6byWE1ahF263vYs3FohYtIUh9nOWJ267jhl8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy90ZW5u/aXMtZmFucy10YWtl/LWEtYnJlYWstaW4t/dGhlLWZvb2QtY291/cnQtZHVyaW5nLXRo/ZS0yMDE4LW5ld3Mt/cGhvdG8tMTY5MTUx/MzI0NS5qcGc_Y3Jv/cD0wLjY2OHh3OjEu/MDB4aDswLjI5M3h3/LDAmcmVzaXplPTM2/MDoq' height={50}/>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-8'>
                  <small>US Open .Live</small>
                    <h6><b>US Open Tennis 2023</b></h6>
                  </div>
                  <div className='col-4'><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
                <div className='row'>
                  <div className='col-8'>
                  <small>US Open .Live</small>
                    <h6><b>US Open Tennis 2023</b></h6>
                  </div>
                  <div className='col-4'><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
                <div className='row'>
                  <div className='col-8'>
                  <small>US Open .Live</small>
                    <h6><b>US Open Tennis 2023</b></h6>
                  </div>
                  <div className='col-4'><FontAwesomeIcon icon={faCaretDown} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
