(function () {

  function changeTitle () {
    let titles = [
                  'Sister of Dini and Yuanyuan',
                  'Digital Whimsy Advocate',
                  'Electric Big Sister',
                  'Cat Experience Designer',
                  'Robot Friend'];

    //document.title = titles[Math.floor(Math.random() * titles.length)];
    document.title = 'Jordanne Chan' + ' | ' + titles[Math.floor(Math.random() * titles.length)];
    
  }

  changeTitle();

})();

    function play(){
      var audio = document.getElementById("audio");
      audio.play();
    }
