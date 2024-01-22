
import Img from '../../assets/Image/guy_on_globe.1786b9db.svg'
import '../OnlineEnglish/OnlineEnglish.scss'
import Joshuo from '../../assets/Image/photo_2024-01-20_21-10-55.jpg'
import whitney from '../../assets/Image/photo_2024-01-20_21-11-40.jpg'
import nikola from '../../assets/Image/photo_2024-01-20_21-12-33.jpg'
import alana from '../../assets/Image/photo_2024-01-20_21-13-13.jpg'




export default function OnlineEnglish() {
  return (
    <div>
        <div className="OnlineEnglish">
            <div className="container">
                <div className="hero-left">
                    <h1>
                    Online English classes with native speakers
                    </h1>
                    <button>
                        Get startet <i className='bx bx-right-arrow-alt' ></i>
                    </button>
                </div>
                <div className="hero-right">
                    <img src={Img}alt="" />
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <button className="vedio">
                      <img src={Joshuo} alt="" />
                    </button>
                    <div className="abaut">
                        <div className="name">
                          <h2>Joshua</h2>
                        </div>
                        <div className="star">
                        <i className='bx bxs-star'></i>
                        <p>4.90</p>
                        </div>
                    </div>
                    <div className="countres">
                        <p>United States</p>
                    </div>
                </div>
                <div className="card">
                <button className="vedio">
                    <img src={whitney} alt="" />
                </button>
                    <div className="abaut">
                         <div className="name">
                             <h2>Whithey</h2>
                        </div>
                        <div className="star">
                        <i className='bx bxs-star'></i>
                        <p>4.90</p>
                        </div>
                    </div>
                    <div className="countres">
                    <p>United States</p>
                    </div>
                </div>
                <div className="card">
                <button className="vedio">
                    <img src={nikola} alt="" />
                </button>
                    <div className="abaut">
                         <div className="name">
                            <h2>Nikola</h2>
                        </div>
                        <div className="star">
                        <i className='bx bxs-star'></i>
                        <p>4.90</p> 
                        </div>
                    </div>
                    <div className="countres">
                    <p>United States</p>
                    </div>
                </div>
                <div className="card">
                <button className="vedio">
                    <img src={alana} alt="" />
                </button>
                    <div className="abaut">
                         <div className="name">
                             <h2>Alana</h2>
                        </div>
                        <div className="star">
                        <i className='bx bxs-star'></i>
                        <p>4.90</p>
                        </div>
                    </div>
                    <div className="countres">
                    <p>United States</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
