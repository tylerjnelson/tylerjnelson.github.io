import React, { Component } from 'react';
export default class Porfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
      videos: [
        {
          url: "https://www.youtube.com/embed/maJKKSTarUU",
          category: "In-Person Event: Adventurer's Oasis",
          description: "Main MC and Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/s46WJw-Lhhk",
          category: "In-Person Event: TwitchCon",
          description: "Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/lr9byLBDVDE",
          category: "In-Person Event: Voice of Adventurers",
          description: "Speaker and Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/Va71JA2SyS0",
          category: "In-Person Event: Anime Expo",
          description: "Main Black Desert Representative",
        },

        {
          url: "https://www.youtube.com/embed/UIS3F2OmOJw",
          category: "Livestream: Cross-Play 3rd Anniversary",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ttD51hnF9Iw?start=3346",
          category: "Livestream: Seasonal Style",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ff5VqQIPRZI?start=1321",
          category: "Livestream: Arena of Arsha 2022",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ugvmPgzZH_c?start=1236",
          category: "Livestream: Inside the April Update",
          description: "Producer and Main Host",
        },

        {
          url: "https://www.youtube.com/embed/GcDopHgVo7o",
          category: "Guide: Getting Started in Black Desert",
          description: "Producer and Voiceover",
        },
        {
          url: "https://www.youtube.com/embed/M5ENz-J7fxs",
          category: "Guide: Season Tutorial",
          description: "Producer and Voiceover",
        },
      ],

      webpages: [
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=12808",
          banner: "images/website_banners/web-fashionistar.jpg",
          category: "Fashionistar Event Announcement",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13008",
          banner: "images/website_banners/web-fashionistar.jpg",
          category: "Fashionistar Winners Announcement",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13028",
          banner: "images/website_banners/web-3rd-year.jpg",
          category: "Cross-Play 3rd Anniversary Stream Recap",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13463",
          banner: "images/website_banners/web-banner.jpg",
          category: "Dont rememberlol",
          description: "Author",
        },

        {
          url: "https://news.xbox.com/en-us/2022/04/07/explore-black-deserts-new-region-of-odyllita-today/",
          banner: "images/website_banners/xwire-odyllita.jpg",
          category: "Xbox Wire: New Region O'dyllita",
          description: "Author",
        },
        {
          url: "https://news.xbox.com/en-us/2022/05/31/black-desert-new-drakania-class-revealed/",
          banner: "images/website_banners/xwire-drakania.jpg",
          category: "Xbox Wire: New Class Drakania",
          description: "Editor",
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let columns;
    if (width > height) {
      if (width / height > 16 / 9) {
        columns = 5;
      } else {
        columns = 3;
      }
    } else {
      columns = 1;
    }
    this.setState({ columns });
  };



  render() {
    return (

      

      <section id="portfolio">

      {/*<p style="width:40px;height:40px;background-color:#fff;">Portfolio Test</p>*/}
      <h1>Portfolio</h1>
      <h1>I</h1>
        
      <h1>Content I'm Involved In</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.videos.map((video, index) => (
          <div
            key={`video-${index}`}
            style={{
              margin: "10px",
              textAlign: "center",
              flexBasis: `${100 / this.state.columns}%`,
              maxWidth: `${100 / this.state.columns}%`,
            }}
          >
            <iframe
              title={`Video ${index + 1}`}
              width="100%"
              height="215"
              src={video.url}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <h2>{video.category}</h2>
            <p style={{ margin: "10px 0 0 0" }}>{video.description}</p>
          </div>
        ))}
      </div>
      
      <h1>I</h1>
      
      <h1>Webpages I've Written</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.webpages.map((webpage, index) => (
          <div
            key={`webpage-${index}`}
            style={{
              margin: "10px",
              textAlign: "center",
              flexBasis: `${100 / this.state.columns}%`,
              maxWidth: `${100 / this.state.columns}%`,
            }}
          >
            <a href={webpage.url} class="page-link" target="_blank" rel="noreferrer">
              <img src={webpage.banner} alt="Page 1"></img>
            </a>
            <h2>{webpage.category}</h2>
            <p style={{ margin: "10px 0 0 0" }}>{webpage.description}</p>
          </div>
        ))}
      </div>

      <h1>I</h1>
      
      <h1>Some things I do in my free time</h1>


      {/*
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
      */}

  </section>
        );
  }
}

