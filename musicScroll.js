// fartscroll.js v0.1
"use strict";

var fartscroll = (function () {
  var mp3 = {
    prefix: "data:audio/mp3;base64,",
    sound: [
        "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"
      ]
  };

  var ogg = {
    prefix: "data:audio/ogg;base64,",
    sound: [
        "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1lqtoZTWSiqxlZJabK3V2FqMNZTSYikptZBKbK21WFtsNaaWYmyx1VhSizHGWHNLtdWUWouttVhLKzXGGGtuNeVSAADAgAMAQIAJZaDQkJUAQBQAAGAMY4xBaBRyzDkpjVLOOSclcw5CCCllzkEIIaXOOQiltNQ5B6GUlEIpKaUUWyglpdZaLAAAoMABACDABk2JxQEKDVkJAEQBACDGKMUYhMYgpRiD0BijFGMQKqUYcw5CpRRjzkHIGHPOQSkZY85BJyWEEEIppYQQQiillAIAAAocAAACbNCUWByg0JAVAUAUAABgDGIMMYYgdFI6KRGETEonpZESWgspZZZKiiXGzFqJrcTYSAmthdYyayXG0mJGrcRYYioAAOzAAQDswEIoNGQlAJAHAEAYoxRjzjlnEGLMOQghNAgx5hyEECrGnHMOQggVY845ByGEzjnnIIQQQueccxBCCKGDEEIIpZTSQQghhFJK6SCEEEIppXQQQgihlFIKAAAqcAAACLBRZHOCkaBCQ1YCAHkAAIAxSjknJaVGKcYgpBRboxRjEFJqrWIMQkqtxVgxBiGl1mLsIKTUWoy1dhBSai3GWkNKrcVYa84hpdZirDXX1FqMtebce2otxlpzzrkAANwFBwCwAxtFNicYCSo0ZCUAkAcAQCCkFGOMOYeUYowx55xDSjHGmHPOKcYYc8455xRjjDnnnHOMMeecc845xphzzjnnnHPOOeegg5A555xz0EHonHPOOQghdM455xyEEAoAACpwAAAIsFFkc4KRoEJDVgIA4QAAgDGUUkoppZRSSqijlFJKKaWUUgIhpZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimlACDfCgcA/wcbZ1hJOiscDS40ZCUAEA4AABjDGISMOSclpYYxCKV0TkpJJTWMQSilcxJSSimD0FpqpaTSUkoZhJRiCyGVlFoKpbRWaymptZRSKCnFGktKqaXWMuckpJJaS622mDkHpaTWWmqtxRBCSrG11lJrsXVSUkmttdZabS2klFprLcbWYmwlpZZaa6nF1lpMqbUWW0stxtZiS63F2GKLMcYa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"
      ]
  };

  return function (trigger_distance) {
    trigger_distance = trigger_distance || 400;
    var lastOffset;

    var scrollFart = function() {
      var scrollOffset = Math.floor(window.scrollY / trigger_distance);
      if (lastOffset !== scrollOffset) {
        playAudio();
        lastOffset = scrollOffset;
      }
    };

    var timer;
    function resizeFart() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function(){ playAudio(); }, 200);
    };

    window.addEventListener('scroll', scrollFart, false);
    window.addEventListener('resize', resizeFart, false);
  };

  function playAudio(position){
    var player = getPlayer()
      , audio = getAudioFor(player)
      , rand = Math.floor(Math.random() * audio.sound.length);

    player.src = audio.prefix + audio.sound[position || rand];
    player.play();
  };

  function getAudioFor(player){
    if(player.canPlayType("audio/mp3")) {
      return mp3;
    } else if(player.canPlayType("audio/ogg")) {
      return ogg;
    }
  }

  function getPlayer() {
    var container = getContainer(), player
      , players = container.getElementsByTagName("audio");

    for (player in  players) {
      if (player.currentTime === 0 || player.ended) {
        return player;
      }
    }

    player = document.createElement("audio");
    container.appendChild(player);
    return player;
  };

  function getContainer() {
    var container = document.getElementById("fartscroll");

    if (container === null) {
      container = document.createElement("div");
      container.id = "fartscroll";
      document.getElementsByTagName('body')[0].appendChild(container);
    }

    return container;
  }
})();
