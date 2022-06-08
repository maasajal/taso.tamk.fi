import React from 'react';
import Button from 'react-bootstrap/Button';

function Membership() {
    return (
      <main>
        <h1>Membership</h1>
        <div className="text-left">
          <p>TASO ry’s membership fee is a paltry €5/academic year, and you can join through Kide.app</p>
          <p>Membership of the Tampere Electric Students TASO Association for the academic year</p>

          By purchasing this product, you accept the rules of Tampereen Sähköopiskelijat TASO ry taso.tamk.fi/?page_id=13 and that

          <p>Tampereen Sähköopiskelijat TASO ry stores the information in the member register. The information is used to verify and inform the membership. The information will not be disclosed to third parties.</p>
          <p>
          As a member you can
          <ul>
            <li>- take part in events for members, such as sauna evenings</li>
            <li>- take part in company visits</li>
            <li>- get coffee or tea from the club room for free</li>
            <li>- take advantage of TASO's weekly exercise</li>
            <li>- take part in events organized by TASO</li>
          </ul>
          </p>
          <Button variant="outline-primary" href="https://kide.app/memberships/098dba4a-978e-4f2b-91f5-e60e0f82602a" target="_blank">Join as a Member</Button>
        </div>
      </main>
    );
  }

export default Membership;
