document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(MotionPathPlugin)
});

const easeRun = 'power1.inOut';
const easeThrow = 'power1.out';

var letters = ['A', 'C', 'D', 'D', 'B', 'B']

//let tl = gsap.timeline()
// let tl = gsap.timeline({ repeat: -1 });
let tl = gsap.timeline({ onComplete: () => {
    console.log('test');
    //return;
    rotatePlayers();
    tl.restart();
} });

function rotatePlayers() {
  const ids = ['pA', 'pB', 'pC', 'pD', 'pE', 'pF'];
  const letters = ids.map(id => document.getElementById(id).textContent);
  letters.unshift(letters.pop());
  ids.forEach((id, i) => {
    document.getElementById(id).textContent = letters[i];
  });
}

// F runs 
tl.to("#pF", { left: 100, top: -50, duration: 1, ease: easeRun }, 0);
// A throws X
tl.to("#bX", { left: 100, top: -50, duration: 1, ease: easeThrow }, 0);
// C throws Y
tl.to("#bY", { left: 420, top: 420, duration: 1, ease: easeThrow }, 0);
// E throws Z
tl.to("#bZ", { left: 20, top: 700, duration: 1, ease: easeThrow }, 0);

// F runs to 1
tl.to("#pF", { left: 720, top: -50, duration: 2, ease: easeRun }, 1);
tl.to("#bX", { left: 720, top: -50, duration: 2, ease: easeRun }, 1);
tl.to("#pF", { left: 720, top: 20, duration: .25, ease: easeRun }, 3);
tl.to("#bX", { left: 720, top: 20, duration: .25, ease: easeRun }, 3);
tl.to("#pF", { left: 700, top: 20, duration: .25, ease: easeRun }, 3.25);
tl.to("#bX", { left: 700, top: 20, duration: .25, ease: easeRun }, 3.25);

// E runs to 6
tl.to("#pE", { left: -50, top: 20, duration: 2, ease: easeRun }, .25);
tl.to("#pE", { left: -50, top: -50, duration: .25, ease: easeRun }, 2.25);
tl.to("#pE", { left: 0, top: -50, duration: .25, ease: easeRun }, 2.5);

// A Runs to 2
tl.to("#pA", { left: 420, top: 420, duration: 2, ease: easeRun }, .25);

// B runs to 3
tl.to("#pB", { left: 380, top: 380, duration: .25, ease: easeRun }, 1);
tl.to("#bY", { left: 380, top: 380, duration: .25, ease: easeRun }, 1);
tl.to("#pB", { left: 340, top: 420, duration: .25, ease: easeRun }, 1.25);
tl.to("#bY", { left: 340, top: 420, duration: .25, ease: easeRun }, 1.25);
tl.to("#pB", { left: 340, top: 470, duration: .25, ease: easeRun }, 1.5);
tl.to("#bY", { left: 340, top: 470, duration: .25, ease: easeRun }, 1.5);
tl.to("#pB", { left: 720, top: 650, duration: 2, ease: easeRun }, 1.75);
tl.to("#bY", { left: 720, top: 650, duration: 2, ease: easeRun }, 1.75);
tl.to("#pB", { left: 720, top: 700, duration: .25, ease: easeRun }, 3.75);
tl.to("#bY", { left: 720, top: 700, duration: .25, ease: easeRun }, 3.75);
tl.to("#pB", { left: 630, top: 700, duration: .25, ease: easeRun }, 4);
tl.to("#bY", { left: 630, top: 700, duration: .25, ease: easeRun }, 4);

// D runs to 5
tl.to("#pD", { left: -50, top: 700, duration: .25, ease: easeRun }, 1);
tl.to("#bZ", { left: -50, top: 700, duration: .25, ease: easeRun }, 1);
tl.to("#pD", { left: -50, top: 620, duration: .25, ease: easeRun }, 1.25);
tl.to("#bZ", { left: -50, top: 620, duration: .25, ease: easeRun }, 1.25);
tl.to("#pD", { left: 350, top: 210, duration: 2, ease: easeRun }, 1.5);
tl.to("#bZ", { left: 350, top: 210, duration: 2, ease: easeRun }, 1.5);
tl.to("#pD", { left: 300, top: 180, duration: .25, ease: easeRun }, 3.5);
tl.to("#bZ", { left: 300, top: 180, duration: .25, ease: easeRun }, 3.5);
tl.to("#pD", { left: 250, top: 200, duration: .25, ease: easeRun }, 3.75);
tl.to("#bZ", { left: 250, top: 200, duration: .25, ease: easeRun }, 3.75);
tl.to("#pD", { left: 250, top: 220, duration: .25, ease: easeRun }, 4);
tl.to("#bZ", { left: 250, top: 220, duration: .25, ease: easeRun }, 4);

// C runs to 4
tl.to("#pC", { left: 20, top: 700, duration: 2, ease: easeRun }, .25);