document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      console.log('Checked');
    } else {
      // do that
      console.log('Not checked');
    }
  });
});

//* tema

const toggleDark = document.getElementById('dark')

toggleDark.addEventListener('click', () => {
  const container = document.getElementById('container')
  container.className = "container dark"
  localStorage.setItem('tema', "dark")
})

const toggleLight = document.getElementById('light')

toggleLight.addEventListener('click', () => {
  const container = document.getElementById('container')
  container.className = "container light"
  localStorage.setItem('tema', "light")
})

// funcion
const temaEnStorage = () => {
  const temaGuardado = localStorage.getItem('tema')

  if (temaGuardado == "dark") {
    document.getElementById('container').classList.add('dark')
  } else if (temaGuardado == "dark") {
    document.getElementById('container').container.className = "container"
  }
}

let x = []
let y = []

function b1() {

  if (x[0] == null) {
    $("#letras").val("A")
    x[0] = "A";
  }
  else {
    alert('Continua con los numeros')
  }
  if (x[9] == 'J' && y[0] == null) {
    $("#numeros").val("1")
    y[0] = "1";
  }
  else {
    alert('pesiona la primer tecla')
  }
}

function b2() {
  if (x[0] == 'A' && x[1] == null) {
    $("#letras").val("A" + " " + "B")
    x[1] = "B";
  }
  else {
    alert('la tecla ingresada no es correcta')
  }
  if (x[9] == 'J' && y[0] == '1' && y[1] == null) {
    $("#numeros").val("1" + " " + "2")
    y[1] = "2";
  }
  else{
    alert('la tecla ingresada no es correcta')
  }
}

function b3() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == null) {
    $("#letras").val("A" + " " + "B" +" " + "C")
    x[2] = "C";
  }
  else {
    alert('')
  }
  if (x[9] == 'J' && y[0] == '1' && y[1] == '2' && y[2] == null) {
     $("#numeros").val("1" + " " + "2" + " " + "3")
     y[2] = "3";
  } else{
    alert('la tecla ingresada no es correcta')
  }
}

function b4() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D") 
    x[3] = "D";
  }
  else {
    alert('')
  }
  if (x[9] == 'J' && y[0] == '1' && y[1] == '2' && y[2] == '3' && y[3] == null) {
    $("#numeros").val("1" + " " + "2" + " " + "3" + " " + "4")
    y[3] = "4";
 }
 else{
  alert('la tecla ingresada no es correcta')
}
}

function b5() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E") 
    x[4] = "E";
  }
  else {
    alert('la tecla ingresada no es correcta')
  } 
  if (x[9] == 'J' && y[0] == '1' && y[1] == '2' && y[2] == '3' && y[3] == '4' && y[4] == null) {
    $("#numeros").val("1" + " " + "2" + " " + "3" + " " + "4"+ " " + "5")
    y[4] = "5";
 }
 else{
  alert('la tecla ingresada no es correcta')
}
}

function b6() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == 'E' && x[5] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E"+ " " + "F") 
    x[5] = "F";
  }
  else {
    alert('')
  } if (x[9] == 'J' && y[0] == '1' && y[1] == '2' && y[2] == '3' && y[3] == '4' && y[4] == '5' && y[5] == null) {
    $("#numeros").val("1" + " " + "2" + " " + "3" + " " + "4"+ " " + "5" + " " + "6")
    y[5] = "6";
 }
 else{
  alert('la tecla ingresada no es correcta')
}
}

function b7() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == 'E' && x[5] == 'F' && x[6] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E"+ " " + "F" + " " + "G") 
    x[6] = "G";
  }
  else {
    alert('la tecla ingresada no es correcta')
  }
}

function b8() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == 'E' && x[5] == 'F' && x[6] == 'G' && x[7] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E"+ " " + "F" + " " + "G" + " " + "H") 
    x[7] = "H";
  }
  else {
    alert('la tecla ingresada no es correcta')
  }
}

function b9() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == 'E' && x[5] == 'F' && x[6] == 'G' && x[7] == 'H'  && x[8] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E"+ " " + "F" + " " + "G" + " " + "H" + " " + "I") 
    x[8] = "I";
  }
  else {
    alert('la tecla ingresada no es correcta')
  }
}

function b11() {
  if (x[0] == 'A' && x[1] == 'B' && x[2] == 'C' && x[3] == 'D' && x[4] == 'E' && x[5] == 'F' && x[6] == 'G' && x[7] == 'H'  && x[8] == 'I' && x[9] == null) {
    $("#letras").val("A" + " " + "B" + " " + "C" + " " + "D" + " " + "E"+ " " + "F" + " " + "G" + " " + "H" + " " + "I" +" " + "J") 
    x[9] = "J";
  }
  else {
    alert('la tecla ingresada no es correcta')
  }
}







var datoss = document.querySelectorAll("button");
for (var i = 0; i < datoss.length; i++) {
  datoss[i].onclick = function () {
    window[this.id]();
  }
}
