function check(){
  var player = document.getElementById("mySelect").value;
  //  if(player == 0)  {
  //   document.getElementById("Play1").innerHTML = "None";
  //   document.getElementById("Play2").innerHTML = "None";
  // }
  // if (player == 1) {
  //   document.getElementById("Play1").innerHTML = "Rock!";
  //   document.getElementById('Play2').innerHTML = "Paper!";
  // }
  // if (player == 2) {
  //   document.getElementById("Play1").innerHTML = "Paper!";
  //   document.getElementById('Play2').innerHTML = "Scissors!";
  // }
  // if (player == 3) {
  //   document.getElementById("Play1").innerHTML = "Scissors!";
  //   document.getElementById('Play2').innerHTML = "Rock!";
  // }
  console.log(player);
  switch (player){
    case '0':
      document.getElementById("Play1").innerHTML = "None";
      document.getElementById("Play2").innerHTML = "None";
      document.getElementById("one").src = "img/question.png"
      document.getElementById("two").src = "img/question.png"
    break;

    case '1':
      document.getElementById("Play1").innerHTML = "Rock!";
      document.getElementById('Play2').innerHTML = "Paper!";
      document.getElementById("one").src = "img/therock.png"
      document.getElementById("two").src = "img/Paper.png"
    break;

    case '2':
      document.getElementById("Play1").innerHTML = "Paper!";
      document.getElementById('Play2').innerHTML = "Scissors!";
      document.getElementById("one").src = "img/Paper.png"
      document.getElementById("two").src = "img/sus.jpg"
    break;

    case '3':
      document.getElementById("Play1").innerHTML = "Scissors!";
      document.getElementById('Play2').innerHTML = "Rock!";
      document.getElementById("one").src = "img/sus.jpg"
      document.getElementById("two").src = "img/therock.png"
    break;

    default:
      document.getElementById("Play1").innerHTML = "None";
      document.getElementById("Play2").innerHTML = "None";
  }
}
