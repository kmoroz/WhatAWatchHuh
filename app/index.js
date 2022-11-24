import clock from "clock";
import { preferences } from "user-settings";
import { FitFont } from './fitfont.js'

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const today = weekDays[new Date().getDay()]

const captainBubbleTime = new FitFont({
  id: 'time',
  font: 'Marker_Felt_23',
  halign: 'middle',
  letterspacing: 1
})

clock.granularity = "minutes";
clock.ontick = (evt) => {
   captainBubbleTime.text = evt.date.toTimeString()
}

const captainBubbleLine = new FitFont({
  id: 'line',
  font: 'Marker_Felt_20',
  halign: 'middle',
  letterspacing: 1
})

captainBubbleLine.text = "What a week, huh?";

const tintinBubble = new FitFont({ 
  id:'tintinBubble',
  font:'Marker_Felt_20',
  halign: 'middle',
  letterspacing: 1
})

// if (today == 'Wednesday')
//   tintinBubble.letterspacing = 0.5

tintinBubble.text = "Captain, it's " + today