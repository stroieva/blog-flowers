import React from 'react'
import './Social.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

export const Social = () => {
    return (
        <div className="col-md-2">
            <div className="social-media">
                <a href="#top">
                    <InstagramIcon className="social" />
                </a>

                <a href="#top">
                    <FacebookIcon className="social" />
                </a>

                <a href="#top">
                    <TwitterIcon className="social" />
                </a>

                <a href="#top">
                    <YouTubeIcon className="social" />
                </a>
            </div>
        </div>
    )
}
