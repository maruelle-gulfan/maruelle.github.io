var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
  var charIndex = 0;
  var maxCharIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML += text[charIndex];
    if (charIndex == maxCharIndex) {
      clearInterval(typeInterval);
      setTimeout(function () {
        deleting(textIndex, text);
      }, sBetweenWord * 1000);
    } else {
      charIndex += 1;
    }
  }, sPerChar * 1000);
}

function deleting(textIndex, text) {
  var minCharIndex = 0;
  var charIndex = text.length - 1;

  var typeInterval = setInterval(function () {
    span.innerHTML = text.substr(0, charIndex);
    if (charIndex == minCharIndex) {
      clearInterval(typeInterval);
      textIndex + 1 == maxTextIndex ? (textIndex = 0) : (textIndex += 1);
      setTimeout(function () {
        typing(textIndex, textArr[textIndex]);
      }, sBetweenWord * 1000);
    } else {
      charIndex -= 1;
    }
  }, sPerChar * 1000);
}

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 30) {
      document.querySelector("header").classList.add("change-color");
    } else {
      document.querySelector("header").classList.remove("change-color");
    }
  });

  document.querySelector(".html").classList.add("skill-active");

  document.getElementById("hexagon").addEventListener("click", function () {
    if (this.classList.contains("hex-html")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".html").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon2").addEventListener("click", function () {
    if (this.classList.contains("hex-css")) {
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".css").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon3").addEventListener("click", function () {
    if (this.classList.contains("hex-react")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".react").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon4").addEventListener("click", function () {
    if (this.classList.contains("hex-js")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".js").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon5").addEventListener("click", function () {
    if (this.classList.contains("hex-node")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".node").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon6").addEventListener("click", function () {
    if (this.classList.contains("hex-wp")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");
      document.querySelector(".sass").classList.remove("skill-active");

      document.querySelector(".wp").classList.add("skill-active");
    }
  });
  document.getElementById("hexagon7").addEventListener("click", function () {
    if (this.classList.contains("hex-sass")) {
      document.querySelector(".css").classList.remove("skill-active");
      document.querySelector(".react").classList.remove("skill-active");
      document.querySelector(".js").classList.remove("skill-active");
      document.querySelector(".node").classList.remove("skill-active");
      document.querySelector(".wp").classList.remove("skill-active");
      document.querySelector(".html").classList.remove("skill-active");

      document.querySelector(".sass").classList.add("skill-active");
    }
  });
};
