import React from 'react';
import Banner from './Banner';
import MyCalendar from './MyCalendar';


function FrontPage() {
    return(
        <div className="bannar">
            <Banner />
            <main>
                <div className="home-page">
                    <h1>Welcome to TASO!</h1>
                    <hr /> <br />
                    <div className="content">
                        <p>TASO is a sub-association of the Tampere University of Applied Sciences (TAMK) student body (TAMKO). The majority of the club's members are electrical and automation students, but since any student at TAMK can become a member of TASO, many students from different degree programs have joined the strength of TASO.</p>
                        <p>The purpose of Tampereen sähköopiskelijat TASO ry (freely translated as the Electrical Engineering students of Tampere) is to enhance our members knowledge of the electrical engineering trade and offer them facilities, equipment and materials to carry out their own projects. In addition, we have a spacious office in the downstairs of the electrical wing of the Kuntokatu Campus (A0-18) where we offer five-star services and equipment, such as computers, a refrigerator and a coffee maker. You can find us by following the smell of smoke and the signs that start by the elevator. When possible, TASO ry aims to organize small-scale activities for its members, such as excursions to industrial plants and visits to fairs dedicated to the electrical trade. We aim to also organize more relaxed forms of entertainment, such as sauna evenings, when there is demand.</p> <br />
                        <p>Because TASO ry consists of students from different student year groups, we also offer assistance in matters related to electrical and electronics, studying and whatever else you may require. TASO ry’s membership fee is a paltry €5/academic year, and you can join through Kide.app</p>
                    </div>
                </div>
                <MyCalendar />
            </main>
        </div>
    )
}
export default FrontPage;