import React, { Component } from 'react';
import {Howl} from "howler";

var audio=
    {sound:"https://gaana.com/song/at-the-end-of-the-day-with-birdsongs-for-well-being-and-relaxing-sleep-1.mp3",label:"relax"}

class Sound extends Component{

    soundhandler=(src)=>{
        var sound=new Howl({
           src,
            html5:true
        })

        sound.play();
    }

    Buttonsound=()=>{
        return audio.map((soundobj,index)=>{
            return(
                <button key={index} onClick={()=>this.soundhandler(soundobj.sound)}>
                    {soundobj.label}
                </button>
            )
        })
    }
    render(){
        return(
            <div>
              <h4>Play Music</h4>  
              {this.Buttonsound}
            </div>
        )
    }
}
export default Sound