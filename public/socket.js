// const status = document.getElementById('status');

// const form = document.getElementById('form');


const socket = io('http://localhost:3000');

socket.on('showOptions', options => showOptions(options));
socket.on('test', finalMock => drawMockInTable(finalMock));
function drawMockInTable(finalMock) {
  console.log(finalMock)
  const tbody = document.querySelector('#tbody');
  tbody.innerHTML = ''
  let lengthArray = finalMock.length
  for (var i = 0; i < lengthArray; i++) {
    let tr = document.createElement('tr'); 
    tr.innerHTML = `
    <tr>
    <td>${finalMock[i].name}</td>
    <td>${finalMock[i].date}</td>
    <td>${finalMock[i].id}</td>
    </tr>
    `;
    tbody.appendChild(tr)
  }
//   finalMock.forEach(element => {
//       let tr = document.createElement('tr'); // is a node
//       tr.innerHTML = `
// <tr>
// <td>${element.name}</td>
// <td>${element.date}</td>
// <td>${element.id}</td>
// </tr>
// `;
//       tbody.appendChild(tr)
//   });
}

function showOptions(options){
    let obj_count = document.querySelector('#obj-count');
    let obj_speed = document.querySelector('#obj-speed');
    obj_count.innerHTML = options.mockCounter;
    obj_speed.innerHTML = options.speed;
    console.log(options)
}

