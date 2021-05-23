const fontSizeChange = document.getElementById('font-size-control');
const textChange = document.getElementById('text');

function onChangeSlider (event) {
    textChange.style.fontSize = event.currentTarget.value + "px";
}

fontSizeChange.addEventListener('input', onChangeSlider)