const stringInterval = 24;
const stringLength = 138;
const fretHeight = 35;
const xOffset = 26;
const yOffset = 29;
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
    "Harmonic Minor #5": ["E", "F#", "G", "A", "B", "C", "D#"],
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
    "Enigmatic Major": ["E", "F#", "G#", "A", "B", "C#", "D", "D#"],
    "Auxiliary Augmented": ["E", "F#", "G#", "B", "C#", "E"],
    "Auxiliary Diminished": ["E", "F#", "G#", "A#", "B", "C#", "E"],  
    "Auxiliary Diminished Blues": ["E", "F#", "G", "A", "C", "D#", "E"],
    "Spanish Gypsy": ["E", "F#", "G", "A#", "B", "C", "D#"],
    "Neapolitan Major Pentatonic": ["E", "F", "G#", "A#", "C#", "E"],
    "Neapolitan Minor Pentatonic": ["E", "F", "G#", "A", "C#", "E"],
    "Purvi Raga": ["E", "F#", "G", "A", "B", "C#", "D"],
    "Ganamurti": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Zokuso": ["E", "F#", "G", "A", "Bb", "C#", "D"],
    "Raga Madhmad Sarang": ["E", "F#", "G", "A#", "B", "C#", "D"],
    "Raga Hameer": ["E", "F#", "G#", "A", "B", "C", "D#"],
    "Raga Pilu": ["E", "F#", "G", "A", "Bb", "C#", "D#"],
    "Leading Whole Tone": ["E", "F#", "G#", "A#", "C", "D", "E"],
    "Neapolitan Major": ["E", "F", "G#", "A", "B", "C#", "D#"],
    "Neapolitan Minor": ["E", "F", "G#", "A", "B", "C#", "D"],
    "Persian": ["E", "F", "G#", "A", "B", "C", "D"],
    "Prometheus": ["E", "F#", "G#", "B", "C#", "D#"],
    "Tritone": ["E", "G#", "A#", "C", "D", "F"],
    "Harmonic Major": ["E", "F#", "G#", "A", "B", "C", "D#"],
    "Double Harmonic Minor": ["E", "F", "G#", "A", "B", "C", "D#"],
    "Hungarian Minor": ["E", "F#", "G", "A#", "B", "C", "D#"],
    "Hungarian Major": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Ukrainian Dorian": ["E", "F#", "G", "A", "B", "C#", "D#"],
    "Byzantine": ["E", "F", "G#", "A", "B", "C#", "D#"],
    "Egyptian": ["E", "F#", "G", "B", "D"],
    "Enigmatic Minor": ["E", "F", "G#", "A#", "B", "C#", "D#"],
    "Gypsy": ["E", "F#", "G", "A#", "B", "C", "D"],
    "Arabian": ["E", "F", "G", "A", "B", "C#", "D#"],
    "Algerian": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Balinese": ["E", "F#", "A", "B", "C", "E"],
    "Chinese": ["E", "F#", "G#", "B", "C#", "E"],
    "Hirajoshi": ["E", "F", "A", "B", "E"],
    "Iwato": ["E", "F", "Bb", "B", "Eb"],
    "Kumoi": ["E", "F", "A", "Bb", "D"],
    "Pelog": ["E", "F", "G", "Bb", "C"],
    "Prometheus Neapolitan": ["E", "F", "G#", "A", "B", "D", "D#"],
    "Romanian Minor": ["E", "F#", "G", "G#", "B", "C#", "D#"],
    "Japanese": ["E", "F", "G", "A", "C"],
    "Yo": ["E", "F", "A", "B", "D"],
    "Vietnamese": ["E", "F", "G#", "A", "B", "D", "E"],
    "Ritusen": ["E", "F", "A#", "C", "D"],
    "Lydian Minor": ["E", "F#", "G#", "A#", "B", "C", "D"],
    "Lydian Augmented": ["E", "F#", "G#", "A#", "B", "C#", "D#"],
    "Acoustic": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Altered Dominant bb7": ["E", "F", "G", "A", "Bb", "C", "D"],
    "Augmented Major": ["E", "F#", "G#", "A#", "C", "D", "E"],
    "Bebop": ["E", "F#", "G#", "A", "B", "C#", "D#", "D"],
    "Bebop Dominant Locrian": ["E", "F", "G", "A", "Bb", "C", "D", "D#"],
    "Bebop Major Locrian": ["E", "F#", "G#", "A", "B", "C#", "D#", "D"],
    "Blues Minor": ["E", "G", "A", "A#", "B", "D"],
    "Blues Phrygian": ["E", "G", "A", "Bb", "B", "D"],
    "Chromatic Mixolydian": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Dorian b5": ["E", "F#", "G", "Ab", "B", "C#", "D"],
    "Dorian b9": ["E", "F", "G", "A", "Bb", "C#", "D"],
    "Dorian #11": ["E", "F#", "G", "A", "B", "C#", "D"],
    "Dorian #4": ["E", "F#", "G", "A#", "B", "C#", "D"],
    "Dorian #9": ["E", "F#", "G", "A", "B", "C#", "D"],
    "Double Harmonic": ["E", "F", "G#", "A", "B", "C", "D#"],
    "Half Diminished Whole Tone": ["E", "F#", "G", "A", "Bb", "C#", "D"],
    "Half Whole Mixolydian": ["E", "F", "G", "Ab", "Bb", "C", "D"],
    "Hungarian Gypsy": ["E", "F#", "G", "A#", "B", "C", "D#"],
    "Hungarian Major Pentatonic": ["E", "F#", "G#", "A#", "C#", "E"],
    "In": ["E", "F", "A", "Bb", "D"],
    "Ionian Augmented": ["E", "F#", "G#", "A#", "B", "C#", "D#"],
    "Ionian Augmented #2": ["E", "F#", "G#", "B", "C#", "D#", "D"],
    "Ionian b2": ["E", "F", "G#", "A", "B", "C#", "D#"],
    "Ionian b5": ["E", "F#", "G#", "A#", "B", "C", "D#"],
    "Ionian #5": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Ionian #5 #7": ["E", "F#", "G#", "A#", "B", "D", "D#"],
    "Ionian #5 b6": ["E", "F#", "G#", "A#", "B", "C", "D"],
    "Ionian #5 b6 b7": ["E", "F#", "G#", "A#", "B", "C", "D#"],
    "Ionian #5 b7": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Ionian #5 b7 #7": ["E", "F#", "G#", "A#", "B", "C#", "D#"],
    "Ionian b6": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "Ionian b7": ["E", "F#", "G#", "A", "B", "C#", "D"],
    "Japanese (Pentatonic)": ["E", "F", "A", "B", "D"],
    "Kafi": ["E", "F#", "G#", "A#", "B"],
    "Kafi (Pentatonic)": ["E", "F#", "A", "B", "D"],
    "Kumoi (Pentatonic)": ["E", "F", "A", "Bb", "D"],
    "Lydian Augmented #2": ["E", "F#", "G#", "A#", "C", "D#", "D"],
    "Lydian Augmented #9": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Lydian b3": ["E", "F#", "G#", "B", "C#", "D#", "D"],
    "Lydian b7 P5": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Lydian Diminished": ["E", "F#", "G#", "A#", "B", "C", "D"],
    "Lydian Dominant b7": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Lydian Pentatonic": ["E", "F#", "G#", "B", "C#", "E"],
    "Melodic Minor b2": ["E", "F", "G", "A", "B", "C#", "D#"],
    "Melodic Minor b4": ["E", "F#", "G", "A", "B", "C#", "D#"],
    "Melodic Minor b6": ["E", "F#", "G#", "A#", "B", "C#", "D"],
    "Melodic Minor #5": ["E", "F#", "G#", "A#", "B", "C", "D"],
    "Persian (Pentatonic)": ["E", "F", "A", "B", "D"],
    "Phrygian Diminished": ["E", "F", "G", "A", "Bb", "C", "D"],
    "Roumanian Minor": ["E", "F#", "G", "G#", "B", "C#", "D#"],
    "Scriabin": ["E", "F#", "A", "B", "C#", "E"],
    "Spanish": ["E", "F#", "G", "A", "B", "C", "D#"],
    "Todi": ["E", "F#", "G", "A#", "B", "C#", "D"],
    "Whole Tone Diminished": ["E", "F#", "G#", "Bb", "C", "D", "D#"],
    "Whole Tone Pentatonic": ["E", "F#", "G#", "Bb", "C#", "E"],
    "Yo (Pentatonic)": ["E", "F", "A", "B", "D"],
    "Yonanuki": ["E", "F", "A#", "B", "C", "E"]
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


function drawScaleName(scaleName) {
    g.setFontAlign(0, 0); // Zentriert den Text
    let scaleFontSize = 2; // Basis-Schriftgröße
    const maxScaleNameLength = 10; // Maximale Länge des Skalennamens, bevor die Schriftgröße reduziert wird
    if (scaleName.length > maxScaleNameLength) {
        scaleFontSize = Math.floor(maxScaleNameLength / scaleName.length * scaleFontSize); // Reduziert die Schriftgröße entsprechend der Länge des Skalennamens
    }
    g.setFont("6x8", scaleFontSize); // Setzt die Schriftart und -größe
    g.drawString(scaleName, g.getWidth() / 2, 15); // Zeichnet den Skalennamen oberhalb des Fretboards
    g.drawLine(0, 22, g.getWidth(), 22); // Zeichnet eine Trennlinie unter dem Skalennamen
}

function drawMarkedFretboard(markedFretboard, scaleName) {
    drawBase(); // drawBase nutzt jetzt den angepassten yOffset
    drawScaleName(scaleName); // Zeichnet den Namen der Skala
    for (let string = 0; string < markedFretboard.length; string++) {
        for (let fret = 0; fret < markedFretboard[string].length; fret++) {
            if (markedFretboard[string][fret] === "X") {
                let stringPos = xOffset + string * stringInterval;
                let yPos = yOffset + fret * fretHeight; // Benutzt den angepassten yOffset ohne zusätzliche Anpassung
                g.fillCircle(stringPos, yPos, 5); // Zeichnet den Punkt für die Skalennoten
            }
        }
    }
}

function generateMenu() {
    let menu = { "": { "title": "Guitar Scales" } };
    Object.keys(scales).forEach(scale => {
        menu[scale] = () => {
            const fretboard = createFretboardMatrix();
            const scaleNotes = scales[scale];
            const markedFretboard = markScaleNotesOnFretboard(scaleNotes, fretboard);
            drawMarkedFretboard(markedFretboard, scale); // Skalenname wird als Argument übergeben
        };
    });
    return menu;
}


function main() {
    E.showMenu(generateMenu());
}

main();
