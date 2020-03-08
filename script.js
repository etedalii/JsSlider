const track = document.querySelector('.volume-slider');
const volume_value_el = document.querySelector('.volume-value');
const changeBgTo = color => (track.style.background = color);

track.addEventListener('input', () => {
    const value = track.value;

    if (value <= 15)
        changeBgTo('#2e86c1 ');
    else if (value > 15 && value <= 30)
        changeBgTo('#2874a6 ');
    else if (value > 30 && value <= 50)
        changeBgTo(' #1b4f72 ');
    else if (value > 50 && value <= 65)
        changeBgTo('#C6FF2C');
    else if (value > 65 && value <= 80)
        changeBgTo('#FFAE2C');
    else
        changeBgTo('#641e16');

    volume_value_el.innerText = value;
    volume_value_el.style.opacity = 1;
    track.style.boxShadow = '0 5px 15px rgba(255,255,255,0.15)';
});

track.addEventListener('change', () => {
    setTimeout(() => {
        volume_value_el.style.opacity = 0;
        track.style.boxShadow = '0 5px 15px rgba(255,255,255,0)';
    }, 1000);
});