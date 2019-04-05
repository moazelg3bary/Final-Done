/*global let, console, alert, swal, prompt, $*/
var screenVideo = document.querySelector('.screen-video'),
    videoLoad = document.getElementById('play'),
    backBlack = document.querySelector('.back-black'),
    blue = document.getElementsByClassName('blue');

window.onload = function () {
    /* Start All Varibls HTML DOM */
    'use strict';
    var asdOne = document.getElementById('aside'),
        
        toggle = document.getElementById('toggle'),
        
        asdTow = document.getElementById('aside-2'),
        
        ovr = document.getElementById('overlay'),
                
        volm = document.getElementById('action-3'),
        
        range = document.getElementById('rg'),
        
        like = document.getElementsByClassName('50K'),
        
        unLike = document.getElementsByClassName('1.2K'),
        
        blue = document.getElementsByClassName('blue'),
        
        sub = document.getElementById('sub-click'),
        
        wind = window.getComputedStyle(sub),
        
        bell = document.getElementById('bell-click'),
        
        textareaOne = document.getElementById('text-area-comment'),
        
        textareaTow = document.getElementById('text-area-comment-2'),
        
        inputBT = document.getElementById('focus-comment'),
        
        inputBTTow = document.getElementById('focus-comment-2'),
        
        inputBTThere = document.getElementById('focus-comment-3'),
        
        likeUp = document.getElementById('like-up'),
        
        likeDown = document.getElementById('like-down'),
        
        valueOne = document.getElementById('value-comment-1'),
        
        valueTow = document.getElementById('value-comment-2'),
        
        showComment = document.getElementById('show-comment'),
        
        showCommentTow = document.getElementById('show-comment-2'),
        
        showCommentSmolle = document.getElementById('show-comment-smolle'),
        
        typeCommentTow = document.getElementById('type-comment-2'),
        
        spanDate = document.getElementById('date'),
        
        clear = document.getElementById('clear'),
        
        prvus = document.getElementById('action-0'),
        
        next = document.getElementById('action-2'),
        
        muted = document.getElementById('action-3'),
        
        volumeSound = document.getElementById('action-4'),
        
        widthValue = document.getElementById('border-load'),
        
        rangeLoad = document.getElementById('range-Load'),
        
        otherAction = document.getElementById('other-action-3'),
        
        otherActionZero = document.getElementById('other-action-0'),
        
        controls = document.querySelector('.controls-tools'),
        
        controlsScreen = document.querySelector('.controls-screen'),
        
        videoHome = document.querySelector('.video-home'),
        
        currAndDurr = document.querySelector('.curr-durr'),
        
        curr = document.querySelector('.curr'),
        
        durr = document.querySelector('.durr'),
        
        creatyElemDiv = document.createElement('div'),
        
        creatyElemSpan = document.createElement('span'),
        
        creatyElemInput = document.createElement('input'),
        
        appendDiv = controls.appendChild(creatyElemDiv),
        
        appendSpan = creatyElemDiv.appendChild(creatyElemSpan),
        
        appendInput = creatyElemSpan.appendChild(creatyElemInput),
        
        appendAtt = creatyElemSpan.setAttribute('id', 'action-4'),
        
        appendAttInput = creatyElemInput.setAttribute('type', 'range'),
        
        appendAttInputTow = creatyElemInput.setAttribute('min', '0'),
        
        appendAttInputThere = creatyElemInput.setAttribute('max', '100'),
        
        appendAttInputFour = creatyElemInput.setAttribute('value', '100'),
                
        createSrcVideo = document.createElement('source'),
        
        playDone = document.getElementById('action-1'),
        
        xx = document.querySelector('.name-video'),
        x;
        
    
    /* End All Varibls HTML DOM */
                        
    blue[0].style.top = '95px';
    
    function gg() {
        
        xx.firstElementChild.textContent = screenVideo.firstElementChild.getAttribute('data-title-first');
    }
    gg();
        
    
    screenVideo.firstElementChild.play();
    
    backBlack.style.display = 'none';
    
    
    playDone.addEventListener('click', function () {
        
        
        if (screenVideo.firstElementChild.paused) {
            
            screenVideo.firstElementChild.play();
            
            this.firstElementChild.className = 'fas fa-pause';
            
        } else {
            
            screenVideo.firstElementChild.pause();
            
            this.firstElementChild.className = 'fas fa-play';
            
        }
        
    }, false);

    
    screenVideo.firstElementChild.onended = function () {
        
        
        playDone.firstElementChild.className = 'fas fa-undo-alt';
        
    };

    
    
    toggle.onclick = function () {
        
        
        asdOne.style.left = '0px';
        
        ovr.style.display = 'block';
        
        document.body.style.overflow = 'hidden';
        
    };

    
    
    asdTow.onclick = function () {
        
        
        asdOne.style.left = '-243px';
        
        ovr.style.display = 'none';
        
        document.body.style.overflow = 'auto';
        
    };
    
    
    
    like[0].addEventListener('click', function () {
        
        
        unLike[0].firstChild.firstChild.style.color = '#909090';
        
        unLike[0].lastChild.firstChild.style.color = '#909090';
        
        if (this.id === '50K') {
            
            this.id = '';
            
            blue[0].style.backgroundColor = '#909090';
            
            this.firstChild.firstChild.style.color = '#909090';
            
            this.lastChild.firstChild.style.color = '#909090';
            
        } else {
            
            this.id = '50K';
            
            blue[0].style.backgroundColor = 'blue';
            
            this.firstChild.firstChild.style.color = '#0000fec9';
            
            this.lastChild.firstChild.style.color = '#0000fec9';
            
        }
        
    }, false);
    
    

    unLike[0].addEventListener('click', function () {
        
        like[0].firstChild.firstChild.style.color = '#909090';
        
        like[0].lastChild.firstChild.style.color = '#909090';
        
        if (this.id === '50K') {
            
            this.id = '';
            
            blue[0].style.backgroundColor = '#909090';
            
            this.firstChild.firstChild.style.color = '#909090';
            
            this.lastChild.firstChild.style.color = '#909090';
            
        } else {
            
            this.id = '50K';
            
            blue[0].style.backgroundColor = '#0000fec9';
            
            this.firstChild.firstChild.style.color = '#0000fec9';
            
            this.lastChild.firstChild.style.color = '#0000fec9';
            
        }
        
    }, false);
    
    
    

    sub.addEventListener('click', function () {
        
        
        if (this.hasAttribute('src')) {
            
            this.style.backgroundColor = 'red';
            
            this.firstElementChild.style.color = '#fff';
            
            this.firstElementChild.textContent = 'Subscribe 226K';
            
            bell.style.display = 'none';
            
            this.removeAttribute('src');
            
            bell.firstElementChild.firstElementChild.firstElementChild.style.display = 'none';
            
            bell.firstElementChild.firstElementChild.lastElementChild.style.display = 'none';
            
            bell.removeAttribute('src');
            
            swal("SUBSCRIBE", "You clicked the button!", "error");
            
        } else {
            
            this.setAttribute('src', '');
            
            this.style.backgroundColor = '#d1d1d1';
            
            this.firstElementChild.style.color = '#817e7e';
            
            this.firstElementChild.textContent = 'Subscribed 226K';
            
            bell.style.display = 'flex';
            
            swal("Subscribed", "You clicked the button!", "success");
            
        }
        
    }, false);

    
    
    bell.addEventListener('click', function () {
        
        
        if (this.hasAttribute('src')) {
            
            this.firstElementChild.firstElementChild.firstElementChild.style.display = 'none';
            
            this.firstElementChild.firstElementChild.lastElementChild.style.display = 'none';
            
            this.removeAttribute('src');
            
        } else {
            
            this.setAttribute('src', '');
            
            this.firstElementChild.firstElementChild.firstElementChild.style.display = 'block';
            
            this.firstElementChild.firstElementChild.lastElementChild.style.display = 'block';
            
        }
        
    }, false);

    
    textareaOne.onkeyup = function () {
        
        
        if (textareaOne.value.length > 0) {
            
            inputBT.firstElementChild.style.backgroundColor = 'blue';
            
            inputBT.firstElementChild.style.color = '#fff';
            
        } else {
            
            inputBT.firstElementChild.style.backgroundColor = '#dedede';
            
            inputBT.firstElementChild.style.color = '#fcfcfc';
            
        }
        
    };

    
    
    textareaTow.onkeyup = function () {
        
        
        if (textareaTow.value.length > 0) {
            
            inputBTTow.firstElementChild.style.backgroundColor = 'blue';
            
            inputBTTow.firstElementChild.style.color = '#fff';
            
        } else {
            
            inputBTTow.firstElementChild.style.backgroundColor = '#dedede';
            
            inputBTTow.firstElementChild.style.color = '#fcfcfc';
            
        }
    };
    
    

    inputBT.onclick = function () {
        
        
        spanDate.textContent = new Date().constructor().slice(0, 10);
        
        swal("You are type comment!", "You clicked the button!", "success");
        
    };


    likeUp.addEventListener('click', function () {
        
        
        if (this.className === 'like') {
            
            this.className = '';
            
            this.firstChild.style.color = '#909090';
            
            this.lastChild.style.display = 'none';
            
        } else {
            
            this.className = 'like';
            
            likeDown.firstChild.style.color = '#909090';
            
            likeDown.lastChild.style.display = 'none';
            
            this.firstChild.style.color = 'blue';
            
            this.lastChild.style.display = 'inline';
            
        }
        
    }, false);

    
    
    likeDown.addEventListener('click', function () {
        
        
        if (this.className === 'like') {
            
            this.className = '';
            
            this.firstChild.style.color = '#909090';
            
            this.lastChild.style.display = 'none';
            
        } else {
            
            this.className = 'like';
            
            likeUp.lastChild.style.display = 'none';
            
            likeUp.firstChild.style.color = '#909090';
            
            this.firstChild.style.color = 'blue';
            
            this.lastChild.style.display = 'inline';
            
        }
        
    }, false);

    
    
    inputBT.firstElementChild.onclick = function () {
        
        
        showComment.style.display = 'inline-block';
        
        valueOne.textContent = textareaOne.value;
        
        textareaOne.value = '';
        
    };
    

    showCommentSmolle.onclick = function () {
        
        
        typeCommentTow.style.display = 'inline-block';
        
    };

    
    inputBTThere.onclick = function () {
        
        
        typeCommentTow.style.display = 'none';
        
    };
    
    
    
    clear.onclick = function () {
        
        
        textareaOne.value = '';
        
    };
    
    
    
    muted.style.fontSize = '24px';
    
    
    
    muted.addEventListener('click', function () {
        
        
        if (screenVideo.firstElementChild.muted === false) {
            
            screenVideo.firstElementChild.muted = true;
            
            muted.firstElementChild.classList = 'fas fa-volume-mute';
            
            creatyElemSpan.firstElementChild.value = '0';
            
        } else {
            
            screenVideo.firstElementChild.muted = false;
            
            muted.firstElementChild.classList = 'fas fa-volume';
            
            creatyElemSpan.firstElementChild.value = '100';
            
        }
        
    }, false);

    
    
    function changeVolume() {
        
        
        screenVideo.firstElementChild.volume = creatyElemInput.value / 100;
        
        if (screenVideo.firstElementChild.volume === '0') {
            
            muted.firstElementChild.classList = 'fas fa-volume-mute';
            
        } else {
            
            muted.firstElementChild.classList = 'fas fa-volume';
            
        }
    }
    
    
    
    creatyElemInput.addEventListener('change', changeVolume, true);
    

    function videoSeek() {
        
        
        var seekto = screenVideo.firstElementChild.duration * (rangeLoad.value / 100);
        
        screenVideo.firstElementChild.currentTime = seekto;
        
    }
    
    
    rangeLoad.addEventListener('change', videoSeek, false);
    
   
    function loadVD () {
        var yd = widthValue.style.width = rangeLoad.value + '%';
    }
    rangeLoad.addEventListener('change', loadVD, false);
    

    function seektimeupdate() {
        
        
        var nt = Math.floor((screenVideo.firstElementChild.currentTime * (100 / screenVideo.firstElementChild.duration))),
            
            x = widthValue.style.width = nt + '%',
            
            
            curmins = Math.floor(screenVideo.firstElementChild.currentTime / 60),
            
            cursecs = Math.floor(screenVideo.firstElementChild.currentTime - curmins * 60),
            
            durmins = Math.floor(screenVideo.firstElementChild.duration / 60),
                        
            dursecs = Math.floor(screenVideo.firstElementChild.duration - durmins * 60);
        
        rangeLoad.value = nt;
        
        if (cursecs < 10) {
            
            cursecs = "0" + cursecs;
        }

        if (dursecs < 10) {
            
            dursecs = "0" + dursecs;
        }

        if (curmins < 10) {
            
            curmins = "" + curmins;
        }

        if (durmins < 10) {
            
            durmins = "" + durmins;
        }

        curr.textContent = curmins + ":" + cursecs + ' / ';
        durr.textContent = durmins + ":" + dursecs;
        
        
        
    }
    
    screenVideo.firstElementChild.addEventListener('timeupdate', seektimeupdate, false);
    
    
    
    function fullScreen() {
        
        if (document.fullscreenElement === null) {
            
            screenVideo.requestFullscreen();
            
            otherAction.firstElementChild.className = 'fas fa-compress';
                                    
            
        } else if (document.mozFullScreen === false) {
            
            screenVideo.mozRequestFullScreen();
            
        } else if (document.webkitIsFullScreenElement === false) {
            
            screenVideo.webkitRequestFullScreen();
            
        } else {
            
            if (document.exitFullscreen) {
                
                document.exitFullscreen();
                
            } else if (document.mozCancelFullscreen) {
                
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                
                document.webkitExitFullscreen();
            }
            otherAction.firstElementChild.className = 'fas fa-expand';
        }
    }
    otherAction.addEventListener('click', fullScreen, false);
    
    
    function autoQulity() {
        swal("Auto Quality!", "You clicked the button!", "success");
    }
    otherActionZero.addEventListener('click', autoQulity, false);
    
    
    
    function slideTime() {

        currAndDurr.style.left = '280px';

    }

    volm.addEventListener('mouseover', slideTime, false);


    function slideTimeTow() {

        currAndDurr.style.left = '230px';

    }

    volm.addEventListener('mouseout', slideTimeTow, false);
    

    creatyElemSpan.addEventListener('mouseover', slideTime, false);


    creatyElemSpan.addEventListener('mouseout', slideTimeTow, false);
    
    videoHome.addEventListener('mousemove', function () {
        
        if (videoHome.classList.contains('one')) {
            videoHome.classList.remove('one');
            controlsScreen.style.bottom = '0';
        } else {
            if (x !== undefined) {
                clearTimeout(x);
            }
            x = setTimeout(function () {
                videoHome.classList.add('one');
                controlsScreen.style.bottom = '-230px';
            }, 3000);
        }
        
    }, false);
    
/* Start New Line Video Play List */
    
    var autoRange = document.querySelector('.cont-range'),
        autoplay = document.querySelectorAll('.playauto'),
        poster = document.querySelectorAll('.poster'),
        reload = document.getElementById('reload'),
        titleS = document.querySelectorAll('.title-S'),
        time,
        titleVideo = ['01. Meet the Careers Team', '01. Welcome to the Readiness Assessment', '02. Comfort Level', '02. Take a Break (Story)', '03. Drawing Turtles (Output)'],

        iconPlay = document.querySelectorAll('.play'),
        spanTitleVideo = document.getElementById('title-video'),
        createvideo = document.createElement('video'),
        imgTagSrc = document.querySelectorAll('.img-src'),
        timeVid = document.querySelectorAll('.time-vid');
        
    
    autoRange.addEventListener('click', function () {
        
        if (this.classList.contains('has')) {
            this.classList.remove('has');
            this.firstElementChild.firstElementChild.style.left = '0';
            this.firstElementChild.firstElementChild.style.backgroundColor = '#909090';
        } else {
            this.classList.add('has');
            this.firstElementChild.firstElementChild.style.left = '15px';
            this.firstElementChild.firstElementChild.style.backgroundColor = '#065fd4';
        }
        
    }, false);
    
    for (let y = 0; y < titleS.length; y++) {
        titleS[y].textContent = titleVideo[y];
    }
    
    
    for (let i = 0; i < poster.length; i++) {
        
            var durminsT = Math.floor(autoplay[i].duration / 60);
                        
            var dursecsT = Math.floor(autoplay[i].duration - durminsT * 60);
        

        if (dursecsT < 10) {
            
            dursecsT = "0" + dursecsT;
        }


        if (durminsT < 10) {
            
            durminsT = "" + durminsT;
        }
        
        timeVid[i].textContent = durminsT + ":" + dursecsT;
        
         if (isNaN(autoplay[i].duration)) {
             timeVid[i].textContent = ' ';
         }
        
        
        poster[i].addEventListener('mouseover', () => {
            'strict';
            poster[i].style.transition = 'all .8s ease-in-out';
            poster[i].style.opacity = '.0';
            autoplay[i].currentTime = 0;
            autoplay[i].currentTime = 10;
            autoplay[i].play();
            time = setTimeout(function () {
                autoplay[i].pause();
                poster[i].style.opacity = '1';
                poster[i].style.transition = 'all 0s ease-in-out';
                iconPlay[i].style.display = 'block';
            }, 3000);
        }, false);
        poster[i].addEventListener('mouseout', function () {
            poster[i].style.transition = 'all 0s ease-in-out';
            poster[i].style.opacity = '1';
            autoplay[i].pause();
            let end = clearTimeout(time);
            iconPlay[i].style.display = 'none';

        }, false);
    
        poster[i].addEventListener('click', function () {
            spanTitleVideo.textContent = autoplay[i].getAttribute('data-title');
            screenVideo.firstElementChild.remove();
            screenVideo.insertBefore(createvideo, screenVideo.childNodes[2]);
            screenVideo.firstElementChild.setAttribute('autoplay', '');
            screenVideo.firstElementChild.setAttribute('id', 'reload');
            screenVideo.firstElementChild.setAttribute('src', autoplay[i].firstElementChild.getAttribute('src'));
            spanTitleVideo.textContent = titleVideo[i];
            playDone.firstElementChild.className = 'fas fa-pause';
            backBlack.style.display = 'flex';
            window.scrollTo(0, 0);
            
        curr.textContent = '0:00';
        durr.textContent = '0:00';
            
            
    function seektimeupdateTow() {
        
        
        var nt = Math.floor((screenVideo.firstElementChild.currentTime * (100 / screenVideo.firstElementChild.duration))),
            
            x = widthValue.style.width = nt + '%',
            
            curmins = Math.floor(screenVideo.firstElementChild.currentTime / 60),
            
            cursecs = Math.floor(screenVideo.firstElementChild.currentTime - curmins * 60),
            
            durmins = Math.floor(screenVideo.firstElementChild.duration / 60),
                        
            dursecs = Math.floor(screenVideo.firstElementChild.duration - durmins * 60);
        
        rangeLoad.value = nt;
                
        
            if (screenVideo.firstElementChild.ended || screenVideo.firstElementChild.currentTime === screenVideo.firstElementChild.duration) {
                playDone.firstElementChild.className = 'fas fa-undo-alt';
            }
        if (screenVideo.firstElementChild.currentTime > 0) {
            backBlack.style.display = 'none';
        }
        
        if (cursecs < 10) {
            
            cursecs = "0" + cursecs;
        }

        if (dursecs < 10) {
            
            dursecs = "0" + dursecs;
        }

        if (curmins < 10) {
            
            curmins = "" + curmins;
        }

        if (durmins < 10) {
            
            durmins = "" + durmins;
        }

        curr.textContent = curmins + ":" + cursecs + ' / ';
        durr.textContent = durmins + ":" + dursecs;
        
        
        
    }
    
    screenVideo.firstElementChild.addEventListener('timeupdate', seektimeupdateTow, false);
        }, false);
        
    } 
    
    
};
blue[0].style.top = '51px';
