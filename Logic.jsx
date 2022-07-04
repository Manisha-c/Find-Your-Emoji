import React, { useState } from "react";
function Logic(){
  const [emoji,setEmoji]=useState("none");
  const play=()=>{
    var array=["https://www.pngmart.com/files/12/Red-Eyes-Sticker-Emoji-PNG-Photos.png",
              "https://www.pngmart.com/files/12/WhatsApp-Sticker-Emoji-Background-PNG.png","https://www.pngmart.com/files/12/WhatsApp-Sticker-Emoji-PNG-Background-Image.png","https://www.pngmart.com/files/12/Sticker-Emoji-PNG-Photo.png","https://www.pngmart.com/files/12/Funny-Sticker-Emoji-PNG-File.png","https://www.pngmart.com/files/12/WhatsApp-Sticker-Emoji-PNG-Transparent-HD-Photo.png","https://www.pngmart.com/files/12/WhatsApp-Shocked-Emoji-Transparent-Background.png","https://www.pngmart.com/files/12/WhatsApp-Heart-Eyes-Emoji-PNG-Clipart.png","https://www.pngmart.com/files/12/WhatsApp-Sticker-Emoji-Download-PNG-Image.png"];
    setEmoji(array[Math.floor(Math.random()*array.length)])
  }
return(
  <play>
  <button onClick={play}>Play</button>
  <img src={emoji} alt="emoji"/>
    </play>
)  
}
export default Logic;