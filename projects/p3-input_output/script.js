//Hide user information
function transition() {
  document.getElementById("dateEnter").style.display = "none";//document.body.style.backgroundImage = "url('https://tse1.mm.bing.net/th?&id=OIP.M9be147e0c6c7a777bb34fc8926908bbfH0&w=300&h=199&c=0&pid=1.9&rs=0&p=0&r=0')";
  document.getElementById("footerText").style.color = "#666";
}

//Display zodiac sign
function showSign() {
  //users input gets stored as variable
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  //check to see which month and day, then displays appripriate
  //horoscope
  transition()
  if (month == 1) {
    if (day <= 19) {

      document.getElementById("capricorn").style.display = "block";
      document.body.className = "test";
       //ocument.body.style.backgroundImage = url("https://images.wallpaperscraft.com/image/space_universe_stars_galaxy_127329_2560x1080.jpg");
      //body will have a class named type 1
    } else if (day > 19) {
      document.getElementById("aquarius").style.display = "block"
       document.body.className = "test2";
       //body will have a class named type 2
    }
  } else if (month == 2) {
    if (day <= 18) {
      document.getElementById("aquarius").style.display = "block"
      document.body.className = "test2";
    } else if (day > 18) {
      document.getElementById("pisces").style.display = "block"
      document.body.className = "test3";
    }
  } else if (month == 3) {
    if (day <= 20) {
      document.getElementById("pisces").style.display = "block"
      document.body.className = "test3";
    } else if (day > 20) {
      document.getElementById("aries").style.display = "block"
      document.body.className = "test4";
    }
  } else if (month == 4) {
    if (day <= 19) {
      document.getElementById("aries").style.display = "block"
      document.body.className = "test4";
    } else if (day > 19) {
      document.getElementById("taurus").style.display = "block"
      document.body.className = "test5";

    }
  } else if (month == 5) {
    if (day <= 20) {
      document.getElementById("taurus").style.display = "block"
      document.body.className = "test5";
    } else if (day > 20) {
      document.getElementById("gemini").style.display = "block"
      document.body.className = "test6";
    }
  } else if (month == 6) {
    if (day <= 20) {
      document.getElementById("gemini").style.display = "block"
      document.body.className = "test6";
    } else if (day > 20) {
      document.getElementById("cancer").style.display = "block"
      document.body.className = "test7";
    }
  } else if (month == 7) {
    if (day <= 22) {
      document.getElementById("cancer").style.display = "block"
      document.body.className = "test7";
    } else if (day > 22) {
      document.getElementById("leo").style.display = "block"
      document.body.className = "test8";
    }
  } else if (month == 8) {
    if (day <= 22) {
      document.getElementById("leo").style.display = "block"
      document.body.className = "test8";
    } else if (day > 22) {
      document.getElementById("virgo").style.display = "block"
      document.body.className = "test9";
    }
  } else if (month == 9) {
    if (day <= 22) {
      document.getElementById("virgo").style.display = "block"
      document.body.className = "test9";
    } else if (day > 22) {
      document.getElementById("libra").style.display = "block"
      document.body.className = "test10";
    }
  } else if (month == 10) {
    if (day <= 22) {
      document.getElementById("libra").style.display = "block"
      document.body.className = "test10";
    } else if (day > 22) {
      document.getElementById("scorpio").style.display = "block"
      document.body.className = "test11";
    }
  } else if (month == 11) {
    if (day <= 21) {
      document.getElementById("scorpio").style.display = "block"
      document.body.className = "test11";
    } else if (day > 21) {
      document.getElementById("sagittarius").style.display = "block"
      document.body.className = "test12";
    }
  } else if (month == 12) {
    if (day <= 22) {
      document.getElementById("sagittarius").style.display = "block"
      document.body.className = "test12";
    } else if (day > 22) {
      document.getElementById("capricorn").style.display = "block"
      document.body.className = "test";
    }
  }
  
}