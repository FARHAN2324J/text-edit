const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');
const textInput = document.getElementById('text');
const font = document.getElementById('font');



colorInput.addEventListener('input', updateOutPut);
sizeInput.addEventListener('input', updateOutPut);
textInput.addEventListener('input', updateOutPut);
font.addEventListener('input', updateOutPut);
boxShadow.addEventListener('input', updateOutPut);



function updateOutPut() { 
    const color = colorInput.value;
    const fontSize = sizeInput.value;
    const text = textInput.value;
    const fontFamily = font.value;
    textInput.value = text;
    
    textInput.style.color = color;
    textInput.style.fontFamily = fontFamily;

    //default 16px
    textInput.style.fontSize = fontSize ? `${fontSize}px` : '16px'; 
}