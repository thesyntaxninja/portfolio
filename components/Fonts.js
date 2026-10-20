import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: "GT Sectra Display"; 
        src: url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.eot"); 
        src: url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.eot?#iefix") 
        format("embedded-opentype"), url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.woff2") 
        format("woff2"), url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.woff") 
        format("woff"), url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.ttf") 
        format("truetype"), url("https://db.onlinewebfonts.com/t/ed147ffc0c22f110b20a665b27adfc1b.svg#GT Sectra Display") format("svg"); 
        }
      `}
    />
)

export default Fonts