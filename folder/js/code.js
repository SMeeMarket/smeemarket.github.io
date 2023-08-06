function code(x) {
    const output = document.getElementById('output');
    if (x.value[0] == 'h') {
        tagName = x.value[0];
        output.innerText = `${tagName}1~6`;
        for (let i = 1; i <= 6; i++) {
            if (x.value[1] == i) {
                output.innerText = `<${tagName}${i}></${tagName}${i}> Type 's' for style attribute.`;
                tagName += i;
                if (x.value[2] == 's') {
                    attrs = `style=`;
                    output.innerText = `<${tagName} ${attrs}""></${tagName}> Type 'b' or 'c' for background-color and color property with value green`;
                    if (x.value[3] == 'b') {
                        attrs += '"background-color:green;"';
                        output.innerText = `<${tagName} ${attrs}></${tagName}>`;
                        x.value = '';
                    }
                    if (x.value[3] == 'c') {
                        attrs += '"color:green;"';
                        output.innerText = `<${tagName} ${attrs}></${tagName}>`;
                        x.value = '';
                    }

                }
            }
        }
    } else if (x.value.at(0) == 'p') {
        tagName = x.value.at(0);
        attrs = `style=`;
        output.innerText = `<${tagName}></${tagName}> Type 's' for style attribute.`;
        if (x.value[1] == 's') {
            attrs = `style=`;
            output.innerText = `<${tagName} ${attrs}""></${tagName}> Type 'b' or 'c' for background-color and color property with value red`;
            if (x.value[2] == 'b') {
                attrs += '"background-color:red;"';
                x.value = '';
            }
            if (x.value[2] == 'c') {
                attrs += '"color:red;"';
                x.value = '';
            }

        }
    } else {
        output.innerHTML = `<${tagName} ${attrs}>${x.value}</${tagName}>`;
    }
}