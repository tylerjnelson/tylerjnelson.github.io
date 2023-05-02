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
    let resumeData = this.props.resumeData;
    return (

      

      <section id="portfolio">
        
      <h1>Check out In-person Events, Livestreams, and Videos I've been a part of</h1>
      
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
  </section>
        );
  }
}

