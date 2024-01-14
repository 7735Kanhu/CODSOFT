

let nav = document.getElementById("nav");
      let sticky = nav.offsetTop;
      window.onscroll = function() {sticker()};
      function sticker() {
          if (window.scrollY > sticky) {
              nav.classList.add("sticky")
              console.log("scroll add");
         } else {
            nav.classList.remove("sticky");
         }
      }