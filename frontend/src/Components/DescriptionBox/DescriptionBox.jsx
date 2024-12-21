import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is an online platform where businesses sell products or services to customers over the internet. It provides a virtual marketplace where users can browse, select, and purchase items conveniently from the comfort of their homes. E-commerce websites often offer a wide range of products, secure payment options, and streamlined shopping experiences to enhance customer satisfaction.
        </p>
        <p>
          E-Commerce Website typically display products or services along with detailed descriptions, images, prices, and any availabe variations (e.g., sizes, colors.). Each product usually has its own dedicated page with relevant information. 
        </p>
      </div>
      
    </div>
  )
}

export default DescriptionBox
