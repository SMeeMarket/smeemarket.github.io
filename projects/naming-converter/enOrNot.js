function genCharArray(charA, charZ) {
    var a = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
function converter(inputValue) {
    if (genCharArray("a", "z").includes(inputValue.toLowerCase().at(0))) {
        document.getElementById('from').innerText = 'English';
        document.getElementById('to').innerText = 'Myanmar';
        result = en2mm(inputValue);
        return result;
    } else if (genCharArray('က', 'အ').includes(inputValue.at(0))) {
        document.getElementById('from').innerText = 'Myanmar';
        document.getElementById('to').innerText = 'English';
        result = mm2en(inputValue);
        return result;
    } else {
        document.getElementById('from').innerText = 'Myanmar';
        document.getElementById('to').innerText = 'English';
        return "SAW MIN OO";
    }
}

function langChange(from) {
    if (from === 'Myanmar') {
        document.getElementById('from').innerText = 'English';
        document.getElementById('to').innerText = 'Myanmar';
        document.getElementById('input').value = '';
        document.getElementById('input').placeholder = 'SAW MIN OO';
        document.getElementById('output').innerText = 'စောမင်းဦး';
    } else {
        document.getElementById('from').innerText = 'Myanmar';
        document.getElementById('to').innerText = 'English';
        document.getElementById('input').value = '';
        document.getElementById('input').placeholder = 'စောမင်းဦး';
        document.getElementById('output').innerText = 'SAW MIN OO';
    }
}