const elementBaseValues = {
  "1t": 0.4,
  "1s": 0.4,
  "1lo": 0.5,
  "1eu": 0.5,
  "1f": 0.5,
  "1lz": 0.6,
  "1tq": 0.4,
  "1sq": 0.4,
  "1loq": 0.5,
  "1fq": 0.5,
  "1lzq": 0.6,
  "1t<": 0.32,
  "1s<": 0.32,
  "1lo<": 0.4,
  "1f<": 0.4,
  "1lz<": 0.48,
  "1t<<": 0.0,
  "1s<<": 0.0,
  "1lo<<": 0.0,
  "1eu<<": 0.0,
  "1f<<": 0.0,
  "1lz<<": 0.0,
  "1fe": 0.4,
  "1feq": 0.4,
  "1fe<": 0.3,
  "1fe<<": 0.0,
  "1lze": 0.48,
  "1lzeq": 0.48,
  "1lze<": 0.36,
  "1lze<<": 0.0,
  "1f!": 0.5,
  "1f!q": 0.5,
  "1f!<": 0.4,
  "1f!<<": 0.0,
  "1lz!": 0.6,
  "1lz!q": 0.6,
  "1lz!<": 0.48,
  "1lz!<<": 0.0,
  "1a": 1.1,
  "2t": 1.3,
  "2s": 1.3,
  "2lo": 1.7,
  "2f": 1.8,
  "2lz": 2.1,
  "1aq": 1.1,
  "2tq": 1.3,
  "2sq": 1.3,
  "2loq": 1.7,
  "2fq": 1.8,
  "2lzq": 2.1,
  "1a<": 0.88,
  "2t<": 1.04,
  "2s<": 1.04,
  "2lo<": 1.36,
  "2f<": 1.44,
  "2lz<": 1.68,
  "1a<<": 0.0,
  "2t<<": 0.4,
  "2s<<": 0.4,
  "2lo<<": 0.5,
  "2f<<": 0.5,
  "2lz<<": 0.6,
  "2fe": 1.44,
  "2feq": 1.44,
  "2fe<": 1.08,
  "2fe<<": 0.4,
  "2lze": 1.68,
  "2lzeq": 1.68,
  "2lze<": 1.26,
  "2lze<<": 0.48,
  "2f!": 1.8,
  "2f!q": 1.8,
  "2f!<": 1.44,
  "2f!<<": 0.5,
  "2lz!": 2.1,
  "2lz!q": 2.1,
  "2lz!<": 1.68,
  "2lz!<<": 0.6,
  "2a": 3.3,
  "3t": 4.2,
  "3s": 4.3,
  "3lo": 4.9,
  "3f": 5.3,
  "3lz": 5.9,
  "2ab": 3.3,
  "3tb": 4.2,
  "3sb": 4.3,
  "3lob": 4.9,
  "3fb": 5.3,
  "3lzb": 5.9,
  "2aq": 3.3,
  "3tq": 4.2,
  "3sq": 4.3,
  "3loq": 4.9,
  "3fq": 5.3,
  "3lzq": 5.9,
  "2aqb": 3.3,
  "3tqb": 4.2,
  "3sqb": 4.3,
  "3loqb": 4.9,
  "3fqb": 5.3,
  "3lzqb": 5.9,
  "2a<": 2.64,
  "3t<": 3.36,
  "3s<": 3.44,
  "3lo<": 3.92,
  "3f<": 4.24,
  "3lz<": 4.72,
  "2a<<": 1.1,
  "3t<<": 1.3,
  "3s<<": 1.3,
  "3lo<<": 1.7,
  "3f<<": 1.8,
  "3lz<<": 2.1,
  "3fe": 4.24,
  "3feq": 4.24,
  "3fe<": 3.18,
  "3fe<<": 1.44,
  "3lze": 4.72,
  "3lzeq": 4.72,
  "3lze<": 3.54,
  "3lze<<": 1.68,
  "3f!": 5.3,
  "3f!b": 5.3,
  "3f!q": 5.3,
  "3f!qb": 5.3,
  "3f!<": 4.24,
  "3f!<<": 1.8,
  "3lz!": 5.9,
  "3lz!b": 5.9,
  "3lz!q": 5.9,
  "3lz!qb": 5.9,
  "3lz!<": 4.72,
  "3lz!<<": 2.1,
  "3a": 8.0,
  "3ab": 8.0,
  "4t": 9.5,
  "4s": 9.7,
  "4lo": 10.5,
  "4f": 11.0,
  "4lz": 11.5,
  "4a": 12.5,
  "3aq": 8.0,
  "3aqb": 8.0,
  "4tq": 9.5,
  "4sq": 9.7,
  "4loq": 10.5,
  "4fq": 11.0,
  "4lzq": 11.5,
  "4aq": 12.5,
  "3a<": 6.4,
  "4t<": 7.6,
  "4s<": 7.76,
  "4lo<": 8.4,
  "4f<": 8.8,
  "4lz<": 9.2,
  "3a<<": 3.3,
  "4t<<": 4.2,
  "4s<<": 4.3,
  "4lo<<": 4.9,
  "4f<<": 5.3,
  "4lz<<": 5.9,
  "4fe": 8.8,
  "4feq": 8.8,
  "4fe<": 6.6,
  "4fe<<": 4.24,
  "4lze": 9.2,
  "4lzeq": 9.2,
  "4lze<": 6.9,
  "4lze<<": 4.72,
  "4f!": 11.0,
  "4f!q": 11.0,
  "4f!<": 8.8,
  "4f!<<": 5.3,
  "4lz!": 11.5,
  "4lz!q": 11.5,
  "4lz!<": 9.2,
  "4lz!<<": 5.9,
  "4a<": 10.0,
  "4a<<": 8.0,
  "5t": 14.0,
  "5s": 14.0,
  "5lo": 14.0,
  "5f": 14.0,
  "5lz": 14.0,
  "5tq": 14.0,
  "5sq": 14.0,
  "5loq": 14.0,
  "5fq": 14.0,
  "5lzq": 14.0,
  "5t<": 11.2,
  "5s<": 11.2,
  "5lo<": 11.2,
  "5f<": 11.2,
  "5lz<": 11.2,
  "5t<<": 9.5,
  "5s<<": 9.5,
  "5lo<<": 9.5,
  "5f<<": 9.5,
  "5lz<<": 9.5,
  "5fe": 11.2,
  "5feq": 11.2,
  "5fe<": 8.4,
  "5fe<<": 7.6,
  "5lze": 11.2,
  "5lzeq": 11.2,
  "5lze<": 8.4,
  "5lze<<": 7.6,
  "5f!": 14.0,
  "5f!q": 14.0,
  "5f!<": 11.2,
  "5f!<<": 9.5,
  "5lz!": 14.0,
  "5lz!q": 14.0,
  "5lz!<": 11.2,
  "5lz!<<": 9.5,
  "uspb": 1.0,
  "usp1": 1.2,
  "usp2": 1.5,
  "usp3": 1.9,
  "usp4": 2.4,
  "lspb": 1.2,
  "lsp1": 1.5,
  "lsp2": 1.9,
  "lsp3": 2.4,
  "lsp4": 2.7,
  "cspb": 1.1,
  "csp1": 1.4,
  "csp2": 1.8,
  "csp3": 2.3,
  "csp4": 2.6,
  "sspb": 1.1,
  "ssp1": 1.3,
  "ssp2": 1.6,
  "ssp3": 2.1,
  "ssp4": 2.5,
  "fuspb": 1.5,
  "fusp1": 1.7,
  "fusp2": 2.0,
  "fusp3": 2.4,
  "fusp4": 2.9,
  "fuspbv": 1.13,
  "fusp1v": 1.28,
  "fusp2v": 1.5,
  "fusp3v": 1.8,
  "fusp4v": 2.18,
  "flspb": 1.7,
  "flsp1": 2.0,
  "flsp2": 2.4,
  "flsp3": 2.9,
  "flsp4": 3.2,
  "flspbv": 1.28,
  "flsp1v": 1.5,
  "flsp2v": 1.8,
  "flsp3v": 2.18,
  "flsp4v": 2.4,
  "fcspb": 1.6,
  "fcsp1": 1.9,
  "fcsp2": 2.3,
  "fcsp3": 2.8,
  "fcsp4": 3.2,
  "fcspbv": 1.2,
  "fcsp1v": 1.43,
  "fcsp2v": 1.73,
  "fcsp3v": 2.1,
  "fcsp4v": 2.4,
  "fsspb": 1.7,
  "fssp1": 2.0,
  "fssp2": 2.3,
  "fssp3": 2.6,
  "fssp4": 3.0,
  "fsspbv": 1.28,
  "fssp1v": 1.5,
  "fssp2v": 1.73,
  "fssp3v": 1.95,
  "fssp4v": 2.25,
  "cuspb": 1.5,
  "cusp1": 1.7,
  "cusp2": 2.0,
  "cusp3": 2.4,
  "cusp4": 2.9,
  "cuspbv": 1.13,
  "cusp1v": 1.28,
  "cusp2v": 1.5,
  "cusp3v": 1.8,
  "cusp4v": 2.18,
  "fcuspb": 1.5,
  "fcusp1": 1.7,
  "fcusp2": 2.0,
  "fcusp3": 2.4,
  "fcusp4": 2.9,
  "fcuspbv": 1.13,
  "fcusp1v": 1.28,
  "fcusp2v": 1.5,
  "fcusp3v": 1.8,
  "fcusp4v": 2.18,
  "clspb": 1.7,
  "clsp1": 2.0,
  "clsp2": 2.4,
  "clsp3": 2.9,
  "clsp4": 3.2,
  "clspbv": 1.28,
  "clsp1v": 1.5,
  "clsp2v": 1.8,
  "clsp3v": 2.18,
  "clsp4v": 2.4,
  "fclspb": 1.7,
  "fclsp1": 2.0,
  "fclsp2": 2.4,
  "fclsp3": 2.9,
  "fclsp4": 3.2,
  "fclspbv": 1.28,
  "fclsp1v": 1.5,
  "fclsp2v": 1.8,
  "fclsp3v": 2.18,
  "fclsp4v": 2.4,
  "ccspb": 1.7,
  "ccsp1": 2.0,
  "ccsp2": 2.3,
  "ccsp3": 2.8,
  "ccsp4": 3.2,
  "ccspbv": 1.28,
  "ccsp1v": 1.5,
  "ccsp2v": 1.73,
  "ccsp3v": 2.1,
  "ccsp4v": 2.4,
  "fccspb": 1.7,
  "fccsp1": 2.0,
  "fccsp2": 2.3,
  "fccsp3": 2.8,
  "fccsp4": 3.2,
  "fccspbv": 1.28,
  "fccsp1v": 1.5,
  "fccsp2v": 1.73,
  "fccsp3v": 2.1,
  "fccsp4v": 2.4,
  "csspb": 1.6,
  "cssp1": 1.9,
  "cssp2": 2.3,
  "cssp3": 2.6,
  "cssp4": 3.0,
  "csspbv": 1.2,
  "cssp1v": 1.43,
  "cssp2v": 1.73,
  "cssp3v": 1.95,
  "cssp4v": 2.25,
  "fcsspb": 1.6,
  "fcssp1": 1.9,
  "fcssp2": 2.3,
  "fcssp3": 2.6,
  "fcssp4": 3.0,
  "fcsspbv": 1.2,
  "fcssp1v": 1.43,
  "fcssp2v": 1.73,
  "fcssp3v": 1.95,
  "fcssp4v": 2.25,
  "cospb": 1.5,
  "cosp1": 1.7,
  "cosp2": 2.0,
  "cosp3": 2.5,
  "cosp4": 3.0,
  "cospbv": 1.13,
  "cosp1v": 1.28,
  "cosp2v": 1.5,
  "cosp3v": 1.88,
  "cosp4v": 2.25,
  "fcospb": 1.5,
  "fcosp1": 1.7,
  "fcosp2": 2.0,
  "fcosp3": 2.5,
  "fcosp4": 3.0,
  "fcospbv": 1.13,
  "fcosp1v": 1.28,
  "fcosp2v": 1.5,
  "fcosp3v": 1.88,
  "fcosp4v": 2.25,
  "ccospb": 1.7,
  "ccosp1": 2.0,
  "ccosp2": 2.5,
  "ccosp3": 3.0,
  "ccosp4": 3.5,
  "ccospbv": 1.28,
  "ccosp1v": 1.5,
  "ccosp2v": 1.88,
  "ccosp3v": 2.25,
  "ccosp4v": 2.63,
  "fccospb": 1.7,
  "fccosp1": 2.0,
  "fccosp2": 2.5,
  "fccosp3": 3.0,
  "fccosp4": 3.5,
  "fccospbv": 1.28,
  "fccosp1v": 1.5,
  "fccosp2v": 1.88,
  "fccosp3v": 2.25,
  "fccosp4v": 2.63,
  "stsqb": 1.5,
  "stsq1": 1.8,
  "stsq2": 2.6,
  "stsq3": 3.3,
  "stsq4": 3.9,
  "1lib": 1.4,
  "1li1": 1.5,
  "1li2": 1.7,
  "1li3": 1.9,
  "1li4": 2.1,
  "2lib": 1.5,
  "2li1": 1.9,
  "2li2": 2.3,
  "2li3": 2.7,
  "2li4": 3.1,
  "3lib": 3.5,
  "3li1": 3.9,
  "3li2": 4.3,
  "3li3": 4.7,
  "3li4": 5.1,
  "4lib": 3.5,
  "4li1": 3.9,
  "4li2": 4.3,
  "4li3": 4.7,
  "4li4": 5.1,
  "5slib": 4.6,
  "5sli1": 5.0,
  "5sli2": 5.4,
  "5sli3": 5.8,
  "5sli4": 6.2,
  "5tlib": 4.6,
  "5tli1": 5.0,
  "5tli2": 5.4,
  "5tli3": 5.8,
  "5tli4": 6.2,
  "5blib": 5.0,
  "5bli1": 5.4,
  "5bli2": 5.8,
  "5bli3": 6.2,
  "5bli4": 6.5,
  "5alib": 5.4,
  "5ali1": 5.8,
  "5ali2": 6.2,
  "5ali3": 6.6,
  "5ali4": 7.0,
  "5rlib": 5.4,
  "5rli1": 5.8,
  "5rli2": 6.2,
  "5rli3": 6.6,
  "5rli4": 7.0,
  "1twb": 0.9,
  "1tw1": 1.1,
  "1tw2": 1.3,
  "1tw3": 1.5,
  "1tw4": 1.7,
  "1twb<<": 0.0,
  "1tw1<<": 0.0,
  "1tw2<<": 0.0,
  "1tw3<<": 0.0,
  "1tw4<<": 0.0,
  "2twb": 2.6,
  "2tw1": 2.8,
  "2tw2": 3.0,
  "2tw3": 3.2,
  "2tw4": 3.4,
  "2twb<<": 0.9,
  "2tw1<<": 1.1,
  "2tw2<<": 1.3,
  "2tw3<<": 1.5,
  "2tw4<<": 1.7,
  "3twb": 4.8,
  "3tw1": 5.1,
  "3tw2": 5.4,
  "3tw3": 5.7,
  "3tw4": 6.0,
  "3twb<<": 2.6,
  "3tw1<<": 2.8,
  "3tw2<<": 3.0,
  "3tw3<<": 3.2,
  "3tw4<<": 3.4,
  "4twb": 6.4,
  "4tw1": 6.8,
  "4tw2": 7.2,
  "4tw3": 7.6,
  "4tw4": 8.0,
  "4twb<<": 4.8,
  "4tw1<<": 5.1,
  "4tw2<<": 5.4,
  "4tw3<<": 5.7,
  "4tw4<<": 6.0,
  "1tth": 1.1,
  "1sth": 1.1,
  "1loth": 1.4,
  "1fth": 1.4,
  "1lzth": 1.4,
  "1tthq": 1.1,
  "1sthq": 1.1,
  "1lothq": 1.4,
  "1fthq": 1.4,
  "1lzthq": 1.4,
  "1tth<": 0.83,
  "1sth<": 0.83,
  "1loth<": 1.05,
  "1fth<": 1.05,
  "1lzth<": 1.05,
  "1tth<<": 0.0,
  "1sth<<": 0.0,
  "1loth<<": 0.0,
  "1fth<<": 0.0,
  "1lzth<<": 0.0,
  "1ath": 2.2,
  "2tth": 2.5,
  "2sth": 2.5,
  "2loth": 2.8,
  "2fth": 3.0,
  "2lzth": 3.0,
  "1athq": 2.2,
  "2tthq": 2.5,
  "2sthq": 2.5,
  "2lothq": 2.8,
  "2fthq": 3.0,
  "2lzthq": 3.0,
  "1ath<": 1.65,
  "2tth<": 1.88,
  "2sth<": 1.88,
  "2loth<": 2.1,
  "2fth<": 2.25,
  "2lzth<": 2.25,
  "1ath<<": 0.0,
  "2tth<<": 1.1,
  "2sth<<": 1.1,
  "2loth<<": 1.4,
  "2fth<<": 1.4,
  "2lzth<<": 1.4,
  "2ath": 4.0,
  "3tth": 4.4,
  "3sth": 4.4,
  "3loth": 5.0,
  "3fth": 5.3,
  "3lzth": 5.3,
  "2athq": 4.0,
  "3tthq": 4.4,
  "3sthq": 4.4,
  "3lothq": 5.0,
  "3fthq": 5.3,
  "3lzthq": 5.3,
  "2ath<": 3.0,
  "3tth<": 3.3,
  "3sth<": 3.3,
  "3loth<": 3.75,
  "3fth<": 3.98,
  "3lzth<": 3.98,
  "2ath<<": 2.2,
  "3tth<<": 2.5,
  "3sth<<": 2.5,
  "3loth<<": 2.8,
  "3fth<<": 3.0,
  "3lzth<<": 3.0,
  "3ath": 6.0,
  "4tth": 6.5,
  "4sth": 6.5,
  "4loth": 7.0,
  "4fth": 7.5,
  "4lzth": 7.5,
  "3athq": 6.0,
  "4tthq": 6.5,
  "4sthq": 6.5,
  "4lothq": 7.0,
  "4fthq": 7.5,
  "4lzthq": 7.5,
  "3ath<": 4.5,
  "4tth<": 4.88,
  "4sth<": 4.88,
  "4loth<": 5.25,
  "4fth<": 5.63,
  "4lzth<": 5.63,
  "3ath<<": 4.0,
  "4tth<<": 4.4,
  "4sth<<": 4.4,
  "4loth<<": 5.0,
  "4fth<<": 5.3,
  "4lzth<<": 5.3,
  "bidsb": 2.8,
  "bi0s1": 3.1,
  "bi0s2": 3.4,
  "bi0s3": 3.7,
  "bi0s4": 4.0,
  "fidsb": 2.6,
  "fi0s1": 2.9,
  "fi0s2": 3.2,
  "fi0s3": 3.5,
  "fi0s4": 3.8,
  "bodsb": 3.2,
  "bo0s1": 3.6,
  "bo0s2": 4.0,
  "bo0s3": 4.4,
  "bo0s4": 4.8,
  "fodsb": 3.5,
  "foos1": 3.9,
  "foos2": 4.3,
  "foos3": 4.7,
  "foos4": 5.1,
  "pif1": 2.2,
  "pspb": 1.7,
  "psp1": 2.0,
  "psp2": 2.5,
  "psp3": 3.0,
  "psp4": 3.5,
  "pcospb": 2.5,
  "pcosp1": 3.0,
  "pcosp2": 3.5,
  "pcosp3": 4.0,
  "pcosp4": 4.5,
  "pcospbv": 1.88,
  "pcosp1v": 2.25,
  "pcosp2v": 2.63,
  "pcosp3v": 3.0,
  "pcosp4v": 3.38,
}

function isJump(code) {
  return /^\d/.test(code);
}

function calculateTechScore() {
  let totals = document.querySelectorAll(".final-row")
  totals.forEach(total => {
    total.remove();
  })

  const rows = document.querySelectorAll(".element-row");
  let totalBaseValue = 0;
  let totalGOE = 0;
  let totalScore = 0;

  rows.forEach(row => {
    let codeInput = row.querySelector('input.element-code');
    let goeInput = row.querySelector('.goe')
    let checkbox = row.querySelector('input.second-half');

    let code = codeInput.value.trim().toLowerCase();
    let codeArray = code.split("+");

    let baseValue = 0;
    let maxValue = 0;
    codeArray.forEach(element => {
      baseValue += elementBaseValues[element] || 0;
      if (elementBaseValues[element] > maxValue) {
        maxValue = elementBaseValues[element];
      }
    })

    let goe = parseFloat(goeInput.value) || 0;
    let goeScaled = maxValue * 0.1 * goe;

    if (codeArray.includes("rep")) {
      baseValue *= 0.7;
    }

    if (checkbox && checkbox.checked && isJump(code)) {
      baseValue *= 1.1;
    }

    let score = baseValue + goeScaled;

    totalBaseValue += baseValue;
    totalGOE += goeScaled;
    totalScore += score

    let baseValueOutput = row.querySelector('output[name="base-value"]') || 0;
    let goeScaledOutput = row.querySelector('output[name="goe-scaled"]') || 0;
    let scoreOutput = row.querySelector('output[name="score"]') || 0;
    baseValueOutput.textContent = baseValue.toFixed(2);
    scoreOutput.textContent = score.toFixed(2);
    goeScaledOutput.textContent = goeScaled.toFixed(2);
  });

  totalBaseValue = totalBaseValue.toFixed(2);
  totalGOE = totalGOE.toFixed(2);
  totalScore = totalScore.toFixed(2);

  let table = document.getElementById("calculatorTable");
  var row = table.insertRow();
  row.setAttribute('class', 'final-row');
  row.setAttribute('id', 'last');

  const numberCell = row.insertCell(0);
  numberCell.innerHTML = ''

  const elementCell = row.insertCell(1);
  elementCell.innerHTML = ''

  const baseValueCell = row.insertCell(2);
  baseValueCell.innerHTML = totalBaseValue;

  const secondHalfCell = row.insertCell(3);
  secondHalfCell.innerHTML = '';

  const rawGoeCell = row.insertCell(4);
  rawGoeCell.innerHTML = '';

  const goeScaledCell = row.insertCell(5);
  goeScaledCell.innerHTML = totalGOE;

  const scoreCell = row.insertCell(6);
  scoreCell.innerHTML = totalScore;
}

function calculateComponentScore() {
  let totals = document.querySelectorAll(".final-row")
  totals.forEach(total => {
    total.remove();
  })

  const rows = document.querySelectorAll('tr.component');
  let totalScore = 0;

  rows.forEach(row => {
    let componentInput = row.querySelector('td input.component');
    let factorInput = row.querySelector('td input.factor')

    let component = parseFloat(componentInput.value) || 0;
    let factor = parseFloat(factorInput.value) || 0;

    let componentScore = component * factor

    totalScore += componentScore

    let componentScoreOutput = row.querySelector('output[name="score"]') || 0;
    componentScoreOutput.textContent = componentScore.toFixed(2);
  })

  let numberScore = parseFloat(totalScore);
  numberScore = numberScore.toFixed(2);

  let table = document.getElementById("componentsTable");
  var row = table.insertRow();
  row.setAttribute('class', 'final-row');
  row.setAttribute('id', 'last');

  const componentCell = row.insertCell(0);
  componentCell.innerHTML = ''

  const scoreCell = row.insertCell(1);
  scoreCell.innerHTML = ''

  const factorCell = row.insertCell(2);
  factorCell.innerHTML = ''

  const totalScoreCell = row.insertCell(3);
  totalScoreCell.innerHTML = numberScore;
}

function calculateScore() {
  calculateComponentScore();
  calculateTechScore();
}

function addRow() {
  let totals = document.querySelectorAll(".final-row")
  totals.forEach(total => {
    total.remove();
  })

  let table = document.getElementById("calculatorTable");
  var row = table.insertRow();
  row.setAttribute('class', 'element-row');

  const numberCell = row.insertCell(0);
  numberCell.innerHTML = table.rows.length - 1 + ".";

  const elementCell = row.insertCell(1);
  elementCell.innerHTML = '<input class="element-code" placeholder="" type="text">';

  const baseValueCell = row.insertCell(2);
  baseValueCell.innerHTML = '<output name="base-value"> </output>';

  const secondHalfCell = row.insertCell(3);
  secondHalfCell.innerHTML = '<input type="checkbox" class="second-half" name="second-half" value="second-half">';

  const rawGoeCell = row.insertCell(4);
  rawGoeCell.innerHTML = '<input class="goe" name="e1" type="text">';

  const goeScaledCell = row.insertCell(5);
  goeScaledCell.innerHTML = '<output name="goe-scaled"> </output>';

  const scoreCell = row.insertCell(6);
  scoreCell.innerHTML = '<output name="score"> </output>';
}

function deleteRow() {
  let totals = document.querySelectorAll(".final-row")
  totals.forEach(total => {
    total.remove();
  })

  let table = document.getElementById("calculatorTable");
  if (table.rows.length <= 2) {
    return;
  }
  table.deleteRow(-1);
}

function clearTable() {
  let table = document.getElementById("calculatorTable");
  var row = table.insertRow();
  row.setAttribute('class', 'element-row');

  const numberCell = row.insertCell(0);
  numberCell.innerHTML = "1.";

  const elementCell = row.insertCell(1);
  elementCell.innerHTML = '<input class="element-code" placeholder="" type="text">';

  const baseValueCell = row.insertCell(2);
  baseValueCell.innerHTML = '<output name="base-value"> </output>';

  const secondHalfCell = row.insertCell(3);
  secondHalfCell.innerHTML = '<input type="checkbox" class="second-half" name="second-half" value="second-half">';

  const rawGoeCell = row.insertCell(4);
  rawGoeCell.innerHTML = '<input class="goe" name="e1" type="text">';

  const goeScaledCell = row.insertCell(5);
  goeScaledCell.innerHTML = '<output name="goe-scaled"> </output>';

  const scoreCell = row.insertCell(6);
  scoreCell.innerHTML = '<output name="score"> </output>';

  while (table.rows.length > 2) {
    table.deleteRow(1);
  }
}