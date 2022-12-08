import React, { Component } from 'react'
import image2 from '../../../assets/images/stories2.jpg';
import '../story.css'
export default class story extends Component {
    render() {
        return (
            <div className='story-container'>
                <div className='story'>
                    <div className='story-text2'>
                        <h2>Coffee for Every Occasion</h2>
                        <p>Whether brewing our Colombia light roast or signature Dominion Dark, your morning cup will always be smooth with Guide Roasting Company coffee.
                            All of our roasts are also available in 100% compostable GreenPods for Kcup brewers. Freshly made in house, you’ve never had coffee this delicious from your pod brewer!
                        </p>
                    </div>
                    <div className='story-image2'>
                        <img src={image2} alt='image2' />
                    </div>
                </div>
            </div>
        )
    }
}
