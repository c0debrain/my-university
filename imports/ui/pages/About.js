import React, {Component} from 'react';

export class About extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"card bg-primary text-white"}>
                        <div className={"card-header"}>
                            All about the project and the team behind MyUniversity! (Written 2016)
                        </div>
                        <div className={"card-body"}>
                            <h4 className={"card-title"}>The Team</h4>
                            <p className={"card-text"}>
                                Our Team consists mainly of 4 inspired teenagers, as you might have seen on the landing
                                page.
                                We were inspired to change the way students begin studying abroad, or in our case in the
                                US.
                                The idea came up in October 2015 and after hard work on everyone's part, we are
                                confident in saying we have achieved our goal with MyUniversity.
                                Without further ado, the people behind the project:
                            </p>
                            <h5 className={"card-title"}>NAME REDACTED</h5>
                            <div className={"row"}>
                                <div className={"col-md-4"}>
                                    <img className={"img-responsive about-img"} src={"/images/about/redacted1.jpg"}/>
                                </div>
                                <div className={"col-md-8"}>
                                    <p className={"card-text"}>Founder, Editor</p>
                                    <p className={"card-text"}>
                                        Whilst being the youngest in the team (16 years old), REDACTED was the largest
                                        influence throughout the entire project. He came up with the idea and inspired
                                        everyone.
                                        He also speaks English and French on a native level. He once won a French debate
                                        competition launched in Thessaloniki in 2014. A year after he was invited to be
                                        a member of
                                        the judges in the same competition.
                                        During the last 5 months he came to the conclusion that "no matter how music
                                        changes, we must never stop dancing", a truly inspiring analogy of life
                                        He plans to enter law school and eventually become a lawyer.
                                        A true visionary.
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <h5 className={"card-title"}>NAME REDACTED</h5>
                            <div className={"row"}>
                                <div className={"col-md-4"}>
                                    <img className={"img-responsive about-img"} src={"/images/about/redacted2.jpg"}/>
                                </div>
                                <div className={"col-md-8"}>
                                    <p className={"card-text"}>Editor</p>
                                    <p className={"card-text"}>
                                        REDACTED, born in Thessaloniki and 17 years old, is an ambitious teenager with a
                                        passion for technology and video games. He speaks English on a native level. He
                                        also was a member of a Tae-kwon-do club.
                                        He loves hardware and he realised that when he built his first computer at the
                                        age of 14.
                                        Thus when he plans to become knowledgeable in all-things-computers as well as a
                                        PC builder.
                                        He was responsible for the Graphic Design (logo, favicon and other pictures) as
                                        well as for gathering information and filling our University Database.
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <h5 className={"card-title"}>Evangelos Ch</h5>
                            <div className={"row"}>
                                <div className={"col-md-4"}>
                                    <img className={"img-responsive about-img"} src={"/images/about/redacted3.jpg"}/>
                                </div>
                                <div className={"col-md-8"}>
                                    <p className={"card-text"}>Lead Web Developer, Editor</p>
                                    <p className={"card-text"}>
                                        Evangelos (or Angel), 17 years old, born and living in Athens.
                                        Expert in Web Development, with advanced knowledge in HTML, CSS,
                                        JavaScript, React.js library, Meteor.js framework, Bootstrap 4 CSS framework and
                                        so on.
                                        He is also highly skilled in photo editing and fixed some graphical assets for
                                        use on the website.
                                        Evangelos was responsible for the main implementation of the site using above
                                        said web technologies,
                                        as well as the training of REDACTED, who greatly assisted in the creation if the
                                        website.
                                        In addition, he acted as Quality Assurance for the project, and made sure the
                                        website used proper English vocabulary and grammar, which was his editorial
                                        role.
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            <h5 className={"card-title"}>NAME REDACTED</h5>
                            <div className={"row"}>
                                <div className={"col-md-4"}>
                                    <img className={"img-responsive about-img"} src={"/images/about/redacted4.jpg"}/>
                                </div>
                                <div className={"col-md-8"}>
                                    <p className={"card-text"}>Junior Web Developer</p>
                                    <p className={"card-text"}>
                                        REDACTED was born in Thessaloniki, Greece and is currently 17 years old. From a
                                        young age, he was attracted to technology and computers. Also he's fond of math
                                        and economics.
                                        He can speak English on a native level and he's also into reading literature. He
                                        likes Basketball and he used to be a member of a basketball team (Apollon
                                        Kalamarias).
                                        When he leaves secondary education, he aims to study Information Technology as
                                        well as Economics.
                                        He's currently learning HTML, CSS and JavaScript, languages of
                                        which most of the site consists of.
                                        Trained by Evangelos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}