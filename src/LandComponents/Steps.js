import React from 'react'
import './Steps.css'

const Steps = () => {
    return (
        <div class="row">
        <div class="col" style={{borderBottom: '2px solid rgb(255,0,204)'}}>
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle" style={{backgroundColor: 'pink'}}></div>
                        <p class="h6 mt-3 mb-1">Step 1</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Gather all Your Info</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle" style={{backgroundColor: 'pink'}}></div>
                        <p class="h6 mt-3 mb-1">Step 2</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Authenticate your self</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle" style={{backgroundColor: 'pink'}}></div>
                        <p class="h6 mt-3 mb-1">Step 3</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Fill the form</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle" style={{backgroundColor: 'pink'}}></div>
                        <p class="h6 mt-3 mb-1">Step 4</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Customize the Resume as per need</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle" style={{backgroundColor: 'pink'}}></div>
                        <p class="h6 mt-3 mb-1">Step 5</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Download !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Steps


