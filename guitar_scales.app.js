const stringInterval = 24;
const stringLength = 138;
const fretHeight = 35;
const xOffset = 26;
const yOffset = 34;

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const tuning = ["E", "B", "G", "D", "A", "E"]; 
const scales = {
    "Major": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Minor": ["E", "F#", "G", "A", "B", "C", "D"],
    "Pentatonic": ["E", "G", "A", "B", "D"],
    "Blues": ["E", "G", "A", "A#", "B", "D"],
    "Mixolydic": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Bebop Dominant": ["E", "F#", "G#", "A", "B", "C#", "D", "D#"],
    "Altered": ["E", "F", "G", "Ab", "Bb", "B", "Db"],
    "Ionian": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Dorian": ["E", "F#", "G", "A", "B", "C#", "D"],
    "Phrygian": ["E", "F", "G", "A", "B", "C", "D"],
    "Lydian": ["E", "F#", "G#", "A#", "B", "C#", "D#"],
    "Mixolydian": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Aeolian": ["E", "F#", "G", "A", "B", "C", "D"],
    "Locrian": ["E", "F", "G", "A", "Bb", "C", "D"],
    "Whole Tone": ["E", "F#", "G#", "A#", "C", "D"],
    "Chromatic": ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
    "Harmonic Minor": ["E", "F#", "G", "A", "B", "C", "D#"],
    "Melodic Minor": ["E", "F#", "G", "A", "B", "C#", "D#"],
    "Dorian b2": ["E", "F", "G", "A", "B", "C#", "D"],
    "Lydian #5": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Lydian Dominant": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Phrygian Dominant": ["E", "F", "G#", "A", "B", "C", "D"],
    "Lydian b7": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Altered Dominant": ["E", "F", "G", "A", "Bb", "Cb", "Db"],
    "Half Diminished": ["E", "F#", "G", "A", "Bb", "C", "D"],
    "Diminished": ["E", "F", "G", "Ab", "Bb", "Cb", "Db"],
    "Whole Half Diminished": ["E", "F#", "G", "A", "Bb", "C", "D"],
    "Half Whole Diminished": ["E", "F", "G", "Ab", "Bb", "B", "C#", "D#"],
    "Augmented": ["E", "F#", "G#", "Bb"],
    "Augmented Heptatonic": ["E", "F#", "G#", "B"],
    "Hexatonic": ["E", "F#", "G#", "A#", "B", "D"],
    "In Sen": ["E", "F", "A", "B", "D"],
    "Istrian": ["E", "F#", "G", "B", "C"],
    "Kafi": ["E", "F#", "G#", "A#", "B"],
    "Marva": ["E", "F#", "G", "A", "B", "C"],
    "Shivranjani": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Bhairav": ["E", "F#", "G", "A", "B", "C", "D"],
    "Bhairavi": ["E", "F", "G", "A", "B", "C", "D"],
    "Charukesi": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Kalyani": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Kharaharapriya": ["E", "F#", "G#", "A", "B", "C", "D#"],
    "Mayamalavagowla": ["E", "F#", "G", "A", "B", "C", "D"],
    "Sankarabharanam": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Bebop Locrian": ["E", "F", "G", "A", "Bb", "C", "D", "Db"],
    "Bebop Major": ["E", "F#", "G#", "A", "B", "C#", "D#", "D"],
    "Bebop Minor": ["E", "F#", "G", "A", "B", "C", "D", "D#"],
    "Blues Major": ["E", "F#", "G", "G#", "A", "B", "D"],
    "Diminished Whole Tone": ["E", "F", "G", "Ab", "A#", "C#", "D"],
    "Double Harmonic Major": ["E", "F", "G#", "A", "B", "C", "D#"],
    "Eight Tone Spanish": ["E", "F", "F#", "G#", "A", "B", "C#", "D#"],
    "Enigmatic": ["E", "F", "G#", "A#", "B", "C", "D"],
    "Leading Whole Tone": ["E", "F#", "G#", "A#", "C", "D", "E"],
    "Neapolitan Major": ["E", "F", "G#", "A", "B", "C#", "D#"],
    "Neapolitan Minor": ["E", "F", "G#", "A", "B", "C#", "D"],
    "Persian": ["E", "F", "G#", "A", "B", "C", "D"],
    "Prometheus": ["E", "F#", "G#", "B", "C#", "D#"],
    "Tritone": ["E", "G#", "A#", "C", "D", "F"],
};

function createFretboardMatrix() {
    const fretsPerString = 5;
    let matrix = [];

    for (let string = 0; string < tuning.length; string++) {
        matrix[string] = [];
        let noteIndex = notes.indexOf(tuning[string]);
        for (let fret = 0; fret <= fretsPerString; fret++) {
            matrix[string][fret] = notes[(noteIndex + fret) % notes.length];
        }
    }

    return matrix.reverse();
}

function markScaleNotesOnFretboard(scaleNotes, fretboard) {
    let markedFretboard = JSON.parse(JSON.stringify(fretboard));

    for (let string = 0; string < fretboard.length; string++) {
        for (let fret = 0; fret < fretboard[string].length; fret++) {
            markedFretboard[string][fret] = scaleNotes.includes(fretboard[string][fret]) ? "X" : " ";
        }
    }

    return markedFretboard;
}

function drawBase() {
    g.clear();
    for (let i = 0; i < 6; i++) {
        g.drawLine(xOffset + i * stringInterval, yOffset, xOffset + i * stringInterval, yOffset + stringLength);
    }
    for (let i = 0; i <= 5; i++) {
        g.drawLine(xOffset, yOffset + i * fretHeight, xOffset + 5 * stringInterval, yOffset + i * fretHeight);
    }
}

function drawMarkedFretboard(markedFretboard) {
    drawBase();
    for (let string = 0; string < markedFretboard.length; string++) {
        for (let fret = 0; fret < markedFretboard[string].length; fret++) {
            if (markedFretboard[string][fret] === "X") {
                let stringPos = xOffset + string * stringInterval;
                let yPos = yOffset + fret * fretHeight;
                g.fillCircle(stringPos, yPos, 5); // Zeichnet den Punkt für die Skalennoten
            }
        }
    }
}

function generateMenu() {
    let menu = { "": { "title": "Guitarscales" } };
    Object.keys(scales).forEach(scale => {
        menu[scale] = () => {
            const fretboard = createFretboardMatrix();
            const scaleNotes = scales[scale];
            const markedFretboard = markScaleNotesOnFretboard(scaleNotes, fretboard);
            drawMarkedFretboard(markedFretboard);
        };
    });
    return menu;
}

function main() {
    E.showMenu(generateMenu());
}

main();
