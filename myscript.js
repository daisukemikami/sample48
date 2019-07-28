// myscript.js

// 色
//
// n:
  // グレースケール 0-255
// n1,n2,n3:
  // RGB
  // HSG
// css

// width height

// rectMode(CORNER)
// rect(x, y, w, h)

// rectMode(CORNERS)
// rect(x1, y1, x2, y2)

// rectMode(CENTER)
// rect(cx, cy, w, h)

// rectMode(RADIUS)
// rect(cx, cy, w/2, h/2)

// ellipse(CENTER);
// ellipse(cx, cy, w, h);

// ellipse(RADIUS);
// ellipse(CORNER);
// ellipse(CORNERS);

// line(x1, y1, x2, y2);

// point
// arc
// triangle

// var x = 0;

// 塗りと線

// テキスト

// textAlign
// text(s, x, y, w, h);

// 変形

// mouse
// mouseX, mouseY
// mouseIsPressed
// mousePressed()

// キー入力
// keyIsPressed
//
// keyTtped():特殊キーを無視
// keyPressed():大文字小文字を区別しない
// key: 通常キー
// keyCode: 特殊キー ALT ENTER TAB

// 乱数
//
// random() 0-1
// random(n) 0-n
// random(n,m) n-m

// sin, cos

// p5.dom

// var r = 50;
// var x, y, r;

var angle = 0;
var r = 30;

var slider;
var button;
// var x, y;

function setup() {
// 最初に1回だけ実行される処理
  createCanvas(480, 240);
  // background(127);
  // background(255, 0, 0);
  // colorMode(HSB, 100);
  // background(50, 100, 80, 20);
  // background('red');
  // background('#ff0000');
  // background('rgba(255, 0, 0, 0.8)');
  // background('skyblue');

  // ellipse(width/2, height/2, 200, 100);
  // line(0, 0, width/2, height/2);

  // rect(50, 50, 150, 100);
  // rect(width/2, height/2, 150, 100);
  // rectMode(CENTER);
  // rect(width/2, height/2, 150, 100);

  // var c = color('pink');
  // fill(c);

  // fill('pink');

  // noFill();
  //
  // stroke(c);
  // strokeWeight(5);
  // noStroke();
  //
  // ellipse(width/2, height/2, 200, 100);

  // textAlign(LEFT, TOP);
  // textSize(32);
  // textFont('Impact');
  // textStyle(BOLD);
  //
  // fill('pink');
  // strokeWeight(5);
  // stroke('gray');
  // text("hello world", 100, 100);
  //
  // ellipse(100, 100, 10, 10);

  // noStroke();
  //
  // fill(255, 0, 0, 127);
  // rect(0, 0, 100, 100);
  //
  // push();
  // // translate(10, 10);
  // // rotate(PI/4);
  // // rotate(radians(30));
  // scale(2, 0.5);
  // fill(0, 0, 255, 127);
  // rect(0, 0, 100, 100);
  // pop();

  noStroke();
  background('skyblue');

  slider = createSlider(0, 100, 30);
  slider.position(10, 20);

  button = createButton("clear!");
  button.position(10, 40);
  button.mousePressed(function() {
    background('skyblue');
  });
}

// function draw() {
//   // そのあと繰り返し実行される処理
//   background(0);
//   // rect(0, 40, 50, 50);
//   rect(x, 40, 50, 50);
//   x++;
// }

function draw() {
  r = slider.value();
  // noStroke();
  // background('skyblue');

  // if (mouseIsPressed === true) {
  //   fill('pink');
  // } else {
  //   fill('white');
  // }
  // if (keyIsPressed === true) {
  //   fill('pink');
  // } else {
  //   fill('white');
  // }

  // ellipse(mouseX, mouseY, 50, 50);
  // ellipse(mouseX, mouseY, r, r);
  // x = random(width);
  // y = random(height);
  // if (random() > 0.9) {
  //   r = random(50, 80);
  // } else {
  //   r = random(10, 30);
  // }
  // fill(255, 255, 255, random(30, 250));
  // ellipse(x, y, r, r);

  push();
  translate(width/2, height/2);
  x = cos(radians(angle)) * r;
  y = sin(radians(angle)) * r;
  ellipse(x, y, 10, 10);
  pop();
  angle += 2;
  r += 0.1;
}

// function mousePressed() {
//   r += 10;
//   return false;
// }
// function keyTyped() {
//   if (key === 'u') {
//     r += 10;
//   }
//   return false;
// }
// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     r += 10;
//   }
//   return false;
// }
