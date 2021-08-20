import React from 'react';
import Header from '../components/header/header';
import './Home.css';
import image from '../images/resume.jpg';
import res from '../images/my_resume.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState, useRef } from 'react';

function Home() {
  const [displayClose, setDisplayClose] = useState('visible');
  const closeit = useRef();
  const resume = useRef();
  const closeBtn = () => {
    closeit.current.style.display = 'none';
  };
  const openresume = () => {
    closeit.current.style.display = 'flex';
  };

  const openBigresume = () => {
    resume.current.style.display = 'flex';
  };
  const closeBigresume = () => {
    resume.current.style.display = 'none';
  };
  return (
    <>
      <div className='home-page-container'>
        <div className='large-resume' ref={resume} style={{ display: 'none' }}>
          <div
            onClick={() => {
              closeBigresume();
            }}
          >
            <CloseIcon></CloseIcon>
          </div>
          <di className='big-res-container'>
            <img className='my-big-resume' src={res}></img>
          </di>
        </div>
        <div className='home-first-division'>
          {/* <Header></Header>*/}
          <div className='port-picture'>
            <img className='port-pic' src={image} alt='' />
          </div>
          <div
            className='home-resume'
            onClick={(e) => {
              openresume();
            }}
          >
            <WorkIcon></WorkIcon>
          </div>

          <a className='post-box' href='https://github.com/asteve12'>
            <GitHubIcon></GitHubIcon>
          </a>

          <div className='icons-box'>
            <a className='facebook-icon' href='https://web.facebook.com'>
              <FacebookIcon></FacebookIcon>
            </a>
            <a
              className='facebook-icon'
              href='https://twitter.com/AkinfolarinSte4'
            >
              <TwitterIcon></TwitterIcon>
            </a>
            <a
              className='facebook-icon'
              href='https://www.linkedin.com/in/akinfolarin-stephen-62b264162/'
            >
              <LinkedInIcon></LinkedInIcon>
            </a>
            <a href='' className='facebook-icon'>
              <InstagramIcon></InstagramIcon>
            </a>

            <WorkIcon></WorkIcon>
          </div>
        </div>

        {/*header */}
        <div className='home-body'>
          <div className='home-second-division'>
            <div className='responsive-header'>
              <div className='responsive-menu-detail'>
                <div className='image-box'>
                  <img className='resp-pics' src={image}></img>
                </div>
                <div className='profile-text'>
                  <div></div>
                </div>
              </div>
              <div
                className='responsive-menu'
                style={{ fontSize: '0.5em' }}
                onClick={(e) => {
                  openBigresume();
                }}
              >
                <WorkIcon></WorkIcon>
              </div>
            </div>
            <div className='home-second-division-header-1'>
              <div>
                <div
                  style={{
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  ORB
                </div>
                <div></div>
                <div></div>

                <div>My Portfolio</div>
              </div>
              <div>
                <div
                  style={{
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Phone Number
                </div>
                <div>08087764422</div>
              </div>
              <div>
                <div
                  style={{
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Email
                </div>
                <div>akinfolarinstepen8@gmail.com</div>
              </div>
              <div>
                <div
                  style={{
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    paddingBottom: '5px',
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Address
                </div>
                <div>steve brown street</div>
              </div>
            </div>
            <div className='home-second-division-header-2'>
              <MenuIcon></MenuIcon>
            </div>
          </div>
          <div className='body-container' style={{ color: 'white' }}>
            <div className='body-responsive-header'></div>
            <div
              className='resume-holder'
              ref={closeit}
              style={{ display: 'none' }}
            >
              <div className='image-container'>
                <div className='resume-container'>
                  <img className='resume-img' src={res}></img>
                  <div
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={(e) => {
                      closeBtn();
                    }}
                  >
                    <CloseIcon></CloseIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className='role'>
              <h1
                style={{ lineHeigt: 0.1, paddingBottom: '5%', height: 'auto' }}
              >
                Hello, I'm
                <br></br>
                Akinfolarin Stephen
                <br></br>
                <div style={{ fontSize: '15px' }}>FrontEnd Developer</div>
              </h1>

              <br></br>
              <div
                className='about-2'
                style={{
                  width: '80%',
                  backgroundColor: 'white',
                  display: 'none',
                }}
              ></div>
              <div className='bt-3' style={{ color: 'white', display: 'none' }}>
                A LITTLE ABOUT ME
              </div>
              <p
                className='bt-4'
                style={{
                  paddingLeft: '10%',
                  paddingRight: '10%',
                  display: 'none',
                }}
              >
                I am a passionate front end developer always willing to learn
                and acquire new skill that will enhance my career,and grace with
                the ability to work with people to achieve a common goal Am
                passionate about impacting my society positively with my skill
                to make the society a better place to live in . And am also an
                hackathon winner
              </p>
            </div>

            <div className='my-pics'>
              <img className='my-pics-img' src={image} alt='' />
            </div>

            <div className='home-about'>
              <div className='abt'>
                <div className='abt-child'>
                  <h1 style={{ fontSize: '25px' }}>
                    A LITTLE<br></br>
                    ABOUT ME
                  </h1>
                  <div
                    style={{
                      width: '100px',
                      height: '50px',
                      backgroundColor: 'orange',
                    }}
                  ></div>
                </div>
              </div>

              <div className='info-me'>
                <div className='info-child'>
                  <p>
                    I am a passionate front end developer always willing to
                    learn and acquire new skill that will enhance my career,and
                    grace with the ability to work with people to achieve a
                    common goal Am passionate about impacting my society
                    positively with my skill to make the society a better place
                    to live in . And am also an hackathon winner
                  </p>
                  <p>
                    I am a passionate front end developer always willing to
                    learn and acquire new skill that will enhance my career,and
                    grace with the ability to work with people to achieve a
                    common goal Am passionate about impacting my society
                    positively with my skill to make the society a better place
                    to live in . And am also an hackathon winner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-first-division-1' style={{ display: 'none' }}>
        {/* <Header></Header>*/}

        <a
          className='post-box'
          href='https://github.com/asteve12'
          style={{ padding: '2%' }}
        >
          <GitHubIcon></GitHubIcon>
        </a>
        <a
          className='post-box'
          href='https://web.facebook.com'
          style={{ padding: '2%' }}
        >
          <FacebookIcon></FacebookIcon>
        </a>
        <a
          className='post-box'
          href='https://twitter.com/AkinfolarinSte4'
          style={{ padding: '2%' }}
        >
          <TwitterIcon></TwitterIcon>
        </a>
        <a
          className='post-box'
          style={{ padding: '2%' }}
          href='https://www.linkedin.com/in/akinfolarin-stephen-62b264162/'
        >
          <LinkedInIcon></LinkedInIcon>
        </a>
        <a
          className='post-box'
          style={{ padding: '2%' }}
          href='https://www.instagram.com/direct/inbox/'
        >
          <InstagramIcon></InstagramIcon>
        </a>
        <a className='post-box' style={{ padding: '2%' }} href=''>
          <WorkIcon></WorkIcon>
        </a>
      </div>
    </>
  );
}

export default Home;
