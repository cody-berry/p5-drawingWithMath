/**
 *  @author
 *  @date 2022.04.
 *
 *
 */
let font
let instructions


function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)
    background(234, 34, 24)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)

    translate(width/2, 3*height/4)
    drawMxNgrid(4, 8, 20)

    noLoop()
}

// s is the side length of the squares, m is how many squares to the right
// we will draw, n is how many squares to the top we will draw
function drawMxNgrid(m, n, s) {
    stroke(0, 0, 100, 20)
    noFill()
    for (let i = 0; i <= m; i++) {
        line(i*s, 0, i*s, -n*s)
    }
    for (let j = 0; j <= n; j++) {
        line(0, -j*s, m*s, -j*s)
    }
}

function draw() {
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}