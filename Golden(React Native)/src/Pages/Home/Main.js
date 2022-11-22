import React from 'react'
import img1 from '../../assets/images/nails-homepage.jpg'
import img2 from '../../assets/images/waxing-homepage.jpg'
import img3 from "../../assets/images/relaxation-main-image.jpg"

export default function Main({navigation}) {
  return (
    <main>

        <section id="services">
            <h2>What we offer</h2>

            <div className="services-flexbox">

                <div className="services-item nails">
                    <img src={img1} alt="Avatar" className="img-card"/>
                    <a onClick={() => navigation.navigate('Nails')}>
                        <h3>Nails</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>

                <div className="services-item waxing">
                    <img src={img2} alt="Avatar" className="img-card"/>
                    <a onClick={() => navigation.navigate('Waxing')}>
                        <h3>Waxing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>

                <div className="services-item relaxation">
                    <img src={img3} alt="Avatar" className="img-card"/>
                    <a onClick={() => navigation.navigate('Relaxing')}>
                        <h3>Relaxation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </a>
                </div>
            </div>
        </section>

        <section id="services" className='mtop-60'>
            <h2>Daily Feed</h2>

            <div className="services-flexbox">

                <div className="services-item nails">

                    <h3>New Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>

                <div className="services-item waxing">

                    <h3>Relaxation Benefits</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>

                <div className="services-item relaxation">

                    <h3>Famous celebrities</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


                </div>
            </div>
        </section>

        <section id="about-us">
            <h2>About Us</h2>

            <div className="about-us-box">


                <div className="client-bio">
                    <p>We take great pride in providing the most exceptional and high-quality services on the market
                        right now. We make every item with a lot of love and care, from our family to yours. We
                        sincerely hope you take pleasure in it as much as we do in presenting it to you.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit. </p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum.</p>
                    <p>Duis dignissim tellus quis tortor euismod, tincidunt euismod lacus facilisis. Maecenas lobortis
                        purus sed velit ultrices vulputate. Vestibulum non auctor ante. Fusce faucibus erat sit amet
                        scelerisque rutrum. Mauris ante sem, elementum vitae ipsum nec, semper aliquam ipsum. Nam rutrum
                        dui vitae magna tincidunt hendrerit.
                    </p>
                </div>

            </div>
        </section>
    </main>
  )
}
