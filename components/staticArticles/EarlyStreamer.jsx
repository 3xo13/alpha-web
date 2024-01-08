import React from 'react'

const EarlyStreamer = () => {
    return (
        <div className='w-60ll 60fit lg:px-20 px-5'>
            <h1 className='articleTitle1'>Protection against lightning Early streamer
                emission lightning protection systems
            </h1>
            <h2 className='articleTitle2'>
                1 Definitions:
            </h2>
            <ol>
                <li>
                    <h3 className='articleTitle3'>1.1 early streamer emission lightning protection system (ESESystem)</h3>
                    <p className='articleText'>complete system based on one or more ESEAT and all
                        elements to safely conduct lightning to earth in order to protect a structure,
                        facility or open area against direct lightning impact.</p>
                </li>
                <li>
                    <h3 className='articleTitle3'>
                        1.2 early streamer emission air terminal (ESEAT)
                    </h3>
                    <p className='articleText'>air terminal generating a streamer earlier than a
                        simple rod air terminal when compared in the same conditions NOTE - An early
                        streamer emission air terminal is made up of a striking point, an emission
                        device, a fixing element and a connection to the down conductors.
                    </p>
                </li>
                <li>
                    <h3 className='articleTitle3'>
                        1.3 ESEAT efficiency (ΔT)
                    </h3>
                    <p className='articleText'>
                        difference expressed in micro-seconds between the emission time of an ESEAT and
                        an SRAT measured in a laboratory under the conditions defined in this standard.

                    </p>
                </li>
                <li>
                    <h3 className='articleTitle3'>1.4 external ESE System isolated from the structure to be protected</h3>
                    <p className='articleText'>LPS with an air-termination system and down-conductor
                        system positioned in such a way that the path of the lightning current has no
                        contact with the structure to be protected NOTE: In an isolated LPS, dangerous
                        sparks between the LPS and the structure are avoided
                    </p>
                </li>
                <li>
                    <h3 className='articleTitle3 '>1.5 failure of electrical and electronic systems</h3>
                    <p className='articleText'>permanent damage of electrical and electronic systems due to LEMP</p>
                </li>
                <li>
                    <h3 className='articleTitle3'>1.6 failure current (Ia)</h3>
                    <p className='articleText'>minimum peak value of lightning current that will cause damages</p>
                </li>

            </ol>
            <div className='w-fll flex-center'>
                <img
                    src="/assets/images/articlesResource/newStramer/1.png"
                    alt="lightning mast"
                    className='lg:w-80 lg:h-80 w-64 h-64'/>

            </div>
            <h2 className='articleTitle2'>
                2. Lightning protection system with Early Streamer Emission Air Terminal
            </h2>
            <ol>
                <li>
                    <h3 className='articleTitle3'>2.1 Need of protection</h3>
                    <p className='articleText'>The need for protection is determined according to
                        many parameters including the lightning flash density of the considered area. A
                        risk analysis method is proposed in Annex A. The lightning flash density is
                        given in annex B or by local data including for example detection network, maps
                        and statistics. NOTE 1: Other considerations may lead to take the decision to
                        adopt protection measures for reasons other than statistical ones. For example,
                        compulsory regulations or personal considerations since some factors cannot be
                        estimated: the wish to avoid risk to life or to provide safety to the occupants
                        of a building may require the use of protection, even though the calculated risk
                        is under the tolerable level.
                        <br/>
                        NOTE 2 Different normative documents give some risk analysis methods that can be
                        used.
                    </p>
                </li>
                <li>
                    <h3 className='articleTitle3'>2.2 Components of the lightning protection system</h3>
                    <p className='articleText'>The installation may be composed of the following elements:</p>
                    <div className='my-10 flex-center'>

                        <img
                            src="/assets/images/articlesResource/newStramer/2.png"
                            alt="lightning mast"
                            className='lg:w-80 lg:h-80 w-64 h-64'/>
                    </div>
                    <h5 className='text-lg '>Key:</h5>
                    <ol>
                        <li>1- One or more ESEAT</li>
                        <li>2- Connection component</li>
                        <li>3- One or more specific down-conductors</li>
                        <li>4- A test joint for each down-conductor</li>
                        <li>5- One earth termination for each specific down-conductor</li>
                        <li>6- Foundation earth electrode (earthing of the structure)</li>
                        <li>7- Electric power cable</li>
                        <li>8- Main electric power distribution box with SPD</li>
                        <li>9- Main telecom distribution box with SPD</li>
                        <li>10- Telecom cable with SPD</li>
                        <li>11- One or more equipotential bonding bars</li>
                        <li>12- One or more equipotential bondings between earth terminations</li>
                        <li>13- Disconnectable bonding device</li>
                        <li>14- One or more equipotential bondings (direct or via an Isolating Spark Gap).</li>
                        <li>15- Main earthing bar</li>
                        <li>16- Electric equipment</li>
                        <li>17- Metallic pipe</li>
                        <li>18- One or more equipotential bondings through a spark gap or flexible braids</li>
                    </ol>
                    <h5 className='my-5 font-bold '>Figure 1 - Components of the lightning protection system</h5>
                </li>
                <li>
                    <h3 className='articleTitle3'>2.3 Protection Radius</h3>
                    <p className='articleText'>ESE lightning rods use active ionization system that
                        allows to have a larger protection radius when compared to conventional
                        lightning rod systems. The installation of an ESE lightning rod should follow a
                        different criteria from Faraday Cage method.</p>
                    <div className='flex flex-col lg:flex-row flex-center gap-20 my-10'><img
                        src="/assets/images/articlesResource/newStramer/3.png"
                        alt="lightning mast"
                        className='lg:w-80 w-64 h-64 lg:h-80 w-64 h-64'/><img
                        src="/assets/images/articlesResource/newStramer/4.png"
                        alt="lightning mast"
                        className='lg:w-80 w-64 h-64 lg:h-80 w-64 h-64'/></div>
                    <p className='articleText'>The protection radius of an ESEAT is related to its
                        height (h) relative to the surface to be protected, to its efficiency and to the
                        selected protection level
                    </p>
                    <div className='flex-center my-10'>
                        <img
                            src="/assets/images/articlesResource/newStramer/5.png"
                            alt="lightning mast"
                            className='lg:w-[70%] lg:h-40 h-auto w-full'/>

                    </div>
                    <p className='text-xs mb-10'>Calculation is based on standards NFC17.102:2011 and UNE
                        <br/>
                        21.186: 2011. Please view the norms for complete technical details
                    </p>

                </li>
                <li>
                    <h3 className='articleTitle3'>2.3 Choosing The ESEAT Model
                    </h3>
                    <ol>
                        <li>
                            <p className='articleText'>1.1 After specifying the protection level, you can
                                choose the appropriate model of ESE lightning rod using the following protection
                                radius (Rp) table:</p>
                            <div className='flex-center'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/6.png"
                                    alt="lightning mast"
                                    className='w-auto lg:h-80 h-auto'/>

                            </div>
                            <p className='text-xs my-5 max-w-[70%]'>INDEX ΔT: Early streamer emission of an
                                ESE lightning rod, determined by laboratory tests.
                                <br/>
                                LEVEL: Level of protection required by a particular building, depending on the
                                operations carried out and various other factors.
                                <br/>
                                h (m): Distance between the lightning rod and the roof level, optimal:6 meters.
                                <br/>
                                STANDARDS
                                <br/>
                                NFC17.102:2011
                                <br/>
                                UNE21.186:2011
                                <br/>
                                TS EN62305

                            </p>
                        </li>
                        <li>
                            <p className='articleText'>1.2 The first column of the table Rp(m) indicates the
                                elevation of the ESE lightning rod above the highest point of the structure
                                within the protection zone.</p>

                        </li>
                        <li>
                            <p className='articleText'>1.3 To obtain elevation, a mast, pole, tower, or part
                                of the structure (such as chimney, antenna, etc.) must be used.</p>

                        </li>
                        <li>
                            <p className='articleText'>1.4 The minimum elevation should be 2 meters. The
                                optimal level of elevation is5 or 6 meters, because below that level the radius
                                of protection decreases rapidly and above that level, the increase is very
                                limited.</p>

                        </li>
                        <li>
                            <p className='articleText'>1.5 It is recommended to install the ESE lightning
                                rod at one point to cover the maximum area. To specify the installation point,
                                the top plane of the building roof can be used.</p>
                        </li>
                    </ol>
                    <h4 className='articleTitle3'>
                        2.2. Advantages of ESE lightning rods
                    </h4>
                    <ul>
                        <li>
                            <p>• Cost-effective solution</p>
                        </li>
                        <li>
                            <p>• Provides an active protection to the whole building</p>
                        </li>
                        <li>
                            <p>• Protects surrounding areas</p>
                        </li>
                        <li>
                            <p>• Requires less conductors and earthing accessories</p>
                        </li>
                        <li>
                            <p>• Easy to install and maintain, requiring less workforce</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className='articleTitle2 '>3. ESE System Installation & Accessories</h2>
                    <ol>
                        <li>
                            <h3 className='articleTitle3'>3.1 lightning event counter</h3>
                            <p className='articleText'>A lightning strike counter is used to count the
                                number of strikes. It should be installed on the mast or wall, directly on down
                                conductor and above the test clamp and, in any case, at height about 2 meters
                                above the ground level. It shall comply with EN 62561-6.
                            </p>
                            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/7.png"
                                    alt="lightning mast"
                                    className='w-96 h-60'/>
                                <img
                                    src="/assets/images/articlesResource/newStramer/8.png"
                                    alt="lightning mast"
                                    className='w-60 h-72'/>
                            </div>
                        </li>
                        <li>
                            <h3 className='articleTitle3'>3.2 ESE Tester
                            </h3>
                            <div className='flex-center my-10'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/9.png"
                                    alt="lightning mast"
                                    className='lg:w-60 lg:h-60 w-44 h-44'/>

                            </div>
                            <p className='articleText'>
                                Tester lets you check the status of your ESE lightning conductor. With TESTER,
                                you are able to check if there is a short circuit or a fault in the ion
                                generator immediately by simply connecting the cable to the ESE conductor and
                                pressing the button on the testing device.
                                <br/>
                                <br/>
                                When pressing the button, the
                                <span className='text-green-500'>
                                    &nbsp;GREEN&nbsp;
                                </span>
                                LED indicates full
                                <br/>
                                functionality, the
                                <span className='text-red-500'>
                                    &nbsp;RED&nbsp;
                                </span>
                                LED indicates the device is not
                                <br/>
                                properly connected and the
                                <span className='text-yellow-500'>
                                    &nbsp;YELLOW&nbsp;
                                </span>
                                LED indicates there is a short circuit

                            </p>
                        </li>
                        <li>
                            <h3 className='articleTitle3'>3.3 ESE Solar Tester
                            </h3>
                            <p className='articleText'>Solar Tester let you test E.S.E. terminals remotely.
                                The testing device stores energy to operate for 24 hours by a daily exposition
                                of 5-7 hours of sun light</p>
                            <div className='flex-center my-10'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/10.png"
                                    alt="lightning mast"
                                    className='lg:w-60 lg:h-96 w-48 h-64'/>

                            </div>
                        </li>
                        <li>
                            <h3 className='articleTitle3'>3.4 Roof Conductor Holder:</h3>
                            <p className='articleText'>Available in plastic or other materials, this
                                accessory serves to keep the cable suspended on a flat surface and avoid contact
                                with unwanted objects.</p>
                            <div className='flex-center my-10'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/11.png"
                                    alt="lightning mast"
                                    className='lg:w-96 lg:h-96 w-72 h-72'/>

                            </div>
                        </li>
                        <li>
                            <h3 className='articleTitle3'>3.5 Test Joints:
                            </h3>
                            <p className='articleText'>Each down-conductor should be provided with a test
                                joint in order to disconnect the earth termination system for enabling
                                measurements.
                            </p>
                            <div className='flex-center my-10'>
                                <img
                                    src="/assets/images/articlesResource/newStramer/12.png"
                                    alt="lightning mast"
                                    className='lg:w-96 lg:h-72 w-72 h-56'/>

                            </div>
                            <p className='articleText'>Test joints are usually installed at the bottom of the down-conductors.</p>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

export default EarlyStreamer