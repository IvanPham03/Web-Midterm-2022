import React, { Component } from 'react'
import image1 from '../../../assets/images/stories1.jpeg';
import '../story.css'
export default class story extends Component {
    render() {
        return (
            <div className='story-container'>
                <div className='story'>
                    <div className='story-text1'>
                        <h2>Coffee for Every Occasion</h2>
                        <p>Whether brewing our Colombia light roast or signature Dominion Dark, your morning cup will always be smooth with Guide Roasting Company coffee.
                            All of our roasts are also available in 100% compostable GreenPods for Kcup brewers. Freshly made in house, you’ve never had coffee this delicious from your pod brewer!
                        </p>
                    </div>
                    <div className='story-image1'>
                        <img src={image1} alt='image1' />
                    </div>
                </div>
            </div>
        )
    }
}
