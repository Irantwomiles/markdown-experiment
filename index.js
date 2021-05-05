const DEFAULT_TEXT = `# Marked in the browser

Rendered by **marked**.

# Hello Everyone

- **Item 1**: Hello everyone
- **Item 2**: Hello everyone
- **Item 3**: Hello everyone
- **Item 4**: Hello everyone
- **Item 5**: Hello everyone

![FernLeaf](https://www.fernleafinteractive.com/images/fernleaf_logo.png "Fern Leaf Logo")`;

let content = document.getElementsByClassName('content')[0];
content.innerHTML = marked(DEFAULT_TEXT);

let textArea = document.getElementById('text');
textArea.value = DEFAULT_TEXT;

function update() {
    let content = document.getElementsByClassName('content')[0];
    content.innerHTML = marked(textArea.value);
}