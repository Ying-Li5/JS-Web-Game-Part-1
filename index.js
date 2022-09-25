function newImage(left, bottom, src) {
    let images = document.createElement('img')
    images.src = src
    images.style.position = 'fixed'
    images.style.left = left
    images.style.bottom = bottom
    document.body.append(images)

    return images
}

newImage('450px', '200px', 'assets/pine-tree.png')
newImage('100px', '100px', 'assets/green-character.gif')
newImage('200px', '300px', 'assets/tree.png')
newImage('350px', '100px', 'assets/pillar.png')
newImage('150px', '200px', 'assets/crate.png')
newImage('500px', '425px', 'assets/well.png')

function newItem(left, bottom, src) {
    let item = newImage(left, bottom, src)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('500px', '405px', 'assets/sword.png')
newItem('165px', '185px', 'assets/sheild.png')
newItem('600px', '100px', 'assets/staff.png')