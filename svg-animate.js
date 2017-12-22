
var tree = document.querySelectorAll('.cls-1');
console.log(tree);


for (var i = 0; i <= tree.length; i++) {
    var strokeLength = tree[i].getTotalLength();
    console.log(strokeLength);
}
