function sumNumber1(){
    let like = document.querySelector("#like1");
    let likeText = like.innerHTML;
    likeText = parseInt(likeText.substring(0, likeText.indexOf(" ")));
    like.innerHTML = `${likeText + 1} like(s)`
  }
  function sumNumber2(){
      let like = document.querySelector("#like2");  
      let likeText = like.innerHTML;
      likeText = parseInt(likeText.substring(0, likeText.indexOf(" ")));
      like.innerHTML = `${likeText + 1} like(s)`
  }
  function sumNumber3(){
      let like = document.querySelector("#like3");  
      let likeText = like.innerHTML;
      likeText = parseInt(likeText.substring(0, likeText.indexOf(" ")));
      like.innerHTML = `${likeText + 1} like(s)`
    }
  