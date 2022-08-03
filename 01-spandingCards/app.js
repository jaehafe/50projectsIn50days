// 1 번

// const panels = document.querySelectorAll('.panel');

// panels.forEach(panel => {
//   panel.addEventListener('click', ()=>{
//     removeActiveClasses()
//     panel.classList.add('active')
//   })
// })

// function removeActiveClasses() {
//   panels.forEach(panel => {
//     panel.classList.remove('active')
//   })
// }

// 2번

// var currentPanel;
// var panels = document.querySelectorAll('.panel');

// function clickPanelHandler() {
//   if(currentPanel) {
//     currentPanel.classList.remove('active');
//   }
//   this.classList.add('active');
//   currentPanel = this;
// }

// for (var i = 0; i < panels.length; i++) {
//   panels[i].addEventListener('click', clickPanelHandler)
// }

// 3번
var currentPanel;
const container = document.querySelector('.container');

function clickPanelHandler(e) {
  if(currentPanel) {
    currentPanel.classList.remove('active');
  }
  e.target.classList.add('active');
  currentPanel = e.target
}

container.addEventListener('click', clickPanelHandler);