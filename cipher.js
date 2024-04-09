function caesarCipher(input) {
    var output = '';
    for (var i = 0; i < input.length; i++) {
        var ascii = input[i].charCodeAt();
        if (ascii >= 65 && ascii <= 90) { // A-Z
            output += String.fromCharCode((ascii - 65 + 3) % 26 + 65);
        } else if (ascii >= 97 && ascii <= 122) { // a-z
            output += String.fromCharCode((ascii - 97 + 3) % 26 + 97);
        } else {
            output += input[i];
        }
    }
    return output;
}

function numberKeyCipher(input) {
    var output = '';
    var key = ['C', 'W', 'M', 'F', 'J', 'O', 'R', 'D', 'G', 'L', 'Y', 'P', 'H', 'S', 'V', 'E', 'X', 'T', 'B', 'A', 'N', 'K', 'Q', 'U', 'I', 'Z'];
    for (var i = 0; i < input.length; i++) {
        var char = input[i].toUpperCase();
        var index = key.indexOf(char);
        if (index !== -1) {
            output += (index + 1).toString();
            output += ' ';
        } else {
            output += input[i];
        }
    }
    return output;
}

var obscured = document.getElementById('obscured');
var text = obscured.textContent;
var encoded = numberKeyCipher(caesarCipher(text));
obscured.textContent = encoded;


