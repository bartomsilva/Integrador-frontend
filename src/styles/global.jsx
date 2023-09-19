import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle` 
	
  :root {
    --color-liked: invert(56%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%);
    --color-noliked: none;
  }
   
`
export default Global;