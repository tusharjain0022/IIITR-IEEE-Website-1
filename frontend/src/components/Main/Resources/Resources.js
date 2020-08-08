import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources.css';

class Resources extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center"><h2>RESOURCES</h2><hr></hr></div>
                    
  <div class="col-4 col-sm-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><b>RESEARCH</b></a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><b>CONFERENCE</b></a>
      <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><b>LINKS</b></a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><b>MORE LINKS</b></a>
    </div>
  </div>
  <div class="col-8 col-sm-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><ul>
        <li>Some random Ground breaking discovery<br/><a href="#"> research paper</a><br/><br/></li>
        <li>Binod has been found in IIITR<br/><a href="#"> research paper</a><br/><br/></li>
        <li>Somebody accidentally built JARVIS learning ML<br/><a href="#"> research paper</a><br/><br/></li>
        <li>Some random Ground breaking discovery<br/><a href="#"> research paper</a><br/><br/></li>
        <li>Binod has been found in IIITR<br/><a href="#"> research paper</a><br/><br/></li>
        <li>Somebody accidentally built JARVIS learning ML<br/><a href="#"> research paper</a><br/><br/></li>
        </ul></div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><ul>
        <li>14th annual meet at Shimla point.<br/><br/></li>
        <li>Seminar organised based on signals and systems.<br/><br/></li>
        <li>2nd Official SB meet under IEEE<br/><br/></li>
        <li>Anti AI takeover summit organised .<br/><br/></li>
        <li>14th annual meet at Shimla point.<br/><br/></li>
        <li>Seminar organised based on signals and systems.<br/><br/></li>
        <li>2nd Official SB meet under IEEE<br/><br/></li>
        <li>Anti AI takeover summit organised .</li></ul><br/><br/></div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><ul>
        <li><a href="#">Hackathon organised by IEEE SB</a><br/><br/></li>
        <li><a href="#">Coding competition organised by computer society , IEEE SB</a><br/><br/></li>
        <li><a href="#">Anti AI takeover summit organised in which AI took over us.</a><br/><br/></li>
        <li><a href="#">Some random event took place, IDK short of ideas</a><br/><br/></li>
        <li><a href="#">Hackathon organised by IEEE SB</a><br/><br/></li>
        <li><a href="#">Coding competition organised by computer society , IEEE SB</a><br/><br/></li>
        <li><a href="#">Anti AI takeover summit organised in which AI took over us.</a><br/><br/></li>
        <li><a href="#">Some random event took place, IDK short of ideas</a><br/><br/></li></ul></div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><ul>
        <li><a href="#">IEEE</a><br/><br/></li>
        <li><a href="#">IEEE SB</a><br/><br/></li>
        <li><a href="#">IEEE Xplore</a><br/><br/></li>
        <li><a href="#">IEEE link</a><br/><br/></li>
        <li><a href="#">IEEE link</a><br/><br/></li>
        <li><a href="#">IEEE link</a><br/><br/></li>
        <li><a href="#">IIIT Ranchi</a><br/><br/></li>
        <li><a href="#">Home</a><br/><br/></li></ul></div>
    </div>
  
</div>

                </div>
               
            </div>
        );
    }
}

export default Resources;
