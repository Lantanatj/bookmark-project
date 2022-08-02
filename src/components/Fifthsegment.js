import React from 'react'
import ShowMore from './ShowMore'


const Fifthsegment = () => {

    return (
        <div className='container-fluid text-center'>
            <h1>Frequently Asked Question</h1>
            <p >Here are some of our FAQS.if you have any questions<br />
                you'd like answered,please feel free to email us </p>

            <div className="accordion w-50 m-auto" id="accordionExample">
                <div className="accordion-item ">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Bookmark
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, molestias quidem repellat perspiciatis aperiam voluptates,
                                qui minima dolore ducimus, ipsum illo perferendis eligendi ipsam deleniti iste corporis ratione sapiente.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, molestias quidem repellat perspiciatis aperiam voluptates,
                                qui minima dolore ducimus, ipsum illo perferendis eligendi ipsam deleniti iste corporis ratione sapienteLorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi, molestias quidem repellat perspiciatis aperiam voluptates, qui minima dolore ducimus, ipsum illo perferendis eligendi ipsam deleniti iste corporis ratione sapiente
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How can i request a new browser?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <> It is hidden by default, until the collapse plugin adds
                                the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                You can modify any of this with custom CSS or overriding our default variables.
                                It's also worth noting that just about any HTML can go within. though the transition does limit overflow.
                            </></div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What about other Chromium browsers?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                             It is hidden by default, until the collapse plugin adds
                                the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                You can modify any of this with custom CSS or overriding our default variables.
                                It's also worth noting that just about any HTML can go within. though the transition does limit overflow.
                            </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Is there a mobile app?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                             It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                    </div>
                </div>
            </div>
            <br />
            
        </div>


    )

}
export default Fifthsegment