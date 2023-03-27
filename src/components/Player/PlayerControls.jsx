export const post = (func, args) => {
    document.getElementById('player')
        .contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func: func,
            args: args
        }), '*');
}

export const resume = () => {
    post('playVideo', []);
    document.getElementById('player-pause').style.display = 'inline';
    document.getElementById('player-resume').style.display = 'none';
}

export const pause = () => {
    post('pauseVideo', []);
    document.getElementById('player-pause').style.display = 'none';
    document.getElementById('player-resume').style.display = 'inline';
}

export const moveTo = (duration) => {
    const progress = document.getElementById('player-progress');
    progress.style.background = 'linear-gradient(to right, #202F61 0%, #202F61 ' + progress.value + '%, #ffffff66 '
        + progress.value + '%, #ffffff66 100%)';

    post('seekTo', [progress.value * duration / 100, true]);
}

export const changeVolume = () => {
    const progress = document.getElementById('volume-progress');
    let vol = progress.value;
    progress.style.background = 'linear-gradient(to right, #202F61 0%, #202F61 ' + vol + '%, #ffffff66 '
        + vol + '%, #ffffff66 100%)';

    if (vol >= 70) {
        document.getElementById('volume-big').style.display = 'inline';
        document.getElementById('volume-medium').style.display = 'inline';
        document.getElementById('volume-small').style.display = 'inline';
    } else if (vol < 70 && vol >= 40) {
        document.getElementById('volume-big').style.display = 'none';
        document.getElementById('volume-medium').style.display = 'inline';
        document.getElementById('volume-small').style.display = 'inline';
    } else if (vol < 40 && vol > 0) {
        document.getElementById('volume-big').style.display = 'none';
        document.getElementById('volume-medium').style.display = 'none';
        document.getElementById('volume-small').style.display = 'inline';
    } else {
        document.getElementById('volume-big').style.display = 'none';
        document.getElementById('volume-medium').style.display = 'none';
        document.getElementById('volume-small').style.display = 'none';
    }
}

export const moveToLyrics = (time) => {
    post('seekTo', [time, true]);
    resume();
}