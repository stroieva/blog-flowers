import React from 'react'
import 'containers/ImageGalery/ImageGalery.css'
import image1 from 'common/images/image-1.jpg'
import image2 from 'common/images/image-2.jpg'
import image3 from 'common/images/image-3.jpg'
import image4 from 'common/images/image-4.jpg'
import image5 from 'common/images/image-5.jpg'
import image6 from 'common/images/image-6.jpg'

export const ImageGalery = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="image-galery">
                                <img alt="#" src={image1} />
                                <img alt="#" src={image2} />
                                <img alt="#" src={image3} />
                                <img alt="#" src={image4} />
                                <img alt="#" src={image5} />
                                <img alt="#" src={image6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
