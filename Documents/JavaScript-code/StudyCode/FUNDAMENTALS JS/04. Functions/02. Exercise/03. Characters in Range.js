function charaktersInRange(charStart, charEnd) {

    let startChar = Math.min(charStart.charCodeAt(0), charEnd.charCodeAt(0));
    let endChar = Math.max(charStart.charCodeAt(0), charEnd.charCodeAt(0));
    let result = '';
    for (let i = startChar + 1; i < endChar; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result)
}
charaktersInRange('#',
':') 