import React from 'react'
import go8 from "../assets/footer-assets/GO8 Azure 1.png"
import facebook from "../assets/footer-assets/Facebook.png";
import tiktok from "../assets/footer-assets/TikTok.png";
import youtube from "../assets/footer-assets/YouTube.png";
import image7 from "../assets/footer-assets/image 7.png";
import image8 from "../assets/footer-assets/image 8.png";
import image9 from "../assets/footer-assets/image 9.png";
import image10 from "../assets/footer-assets/image 10.png";
import image11 from "../assets/footer-assets/image 11.png";
import image12 from "../assets/footer-assets/image 12.png";
import image13 from "../assets/footer-assets/image 13.png";




function Footer() {
  return (
    <div className="">
        <div className="Company flex bg-black w-full items-center p-10 justify-center gap-10 mt-[-40px]">
            <img src={image7} alt="image7.png" className="w-25 h-22"/>
            <img src={image8} alt="image8.png" className="w-30 h-30"/>
            <img src={image9} alt="image9.png" className="w-30 h-34"/>
            <img src={image10} alt="image10.png" className="w-30 h-30"/>
            <img src={image11} alt="image11.png" className="w-60 h-25"/>
            <img src={image12} alt="image12.png" className="w-30 h-30"/>
            <img src={image13} alt="image13.png" className="w-30 h-30"/>
            
        </div>
        <footer className="Outer-Footer lg:h-full md:flex-row items-center flex flex-col flex justify-between p-10 gap-10">
            <div className="Logo-Name flex items-center">
                <img src={go8} alt="facebook.png"/>
                <h1 className="">GO 8 Technology Inc.</h1>
            </div>
            <div className="Call-Send flex flex-col gap-10 content-center">
                <div className="CallUs">
                    <h1>Call Us</h1>
                    <h1>09123456789</h1>
                </div>
                <div className="SendUs">
                    <h1>Send Us a Message</h1>
                    <h1>information@go8.com</h1>
                </div>
            </div>
            <div className="FollowUs">
                <h1>Follow US</h1>
                <div className="SocialMediaLogo flex">
                    <img src={facebook} alt="facebook.png"/>
                    <img src={tiktok} alt="tiktok.png" />
                    <img src={youtube} alt="youtube.png" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer