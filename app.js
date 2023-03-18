// Object

class Obj {
    constructor(name = "atom"){
        this.name = name
    }
    setEmoji(emoji) {
        this.emoji = emoji
    }
}

class Char extends Obj {
    constructor(emoji, name = "홍길동"){
        super(name)
        this.emoji = emoji
    }
}

class Item extends Obj {


}

// Table...

class Cell {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.obj = new Obj('space')
        this.obj.setEmoji('🟦')
    }
}

class Table {
    constructor(xx,yy) {
        this.xx = xx
        this.yy = yy

        this.cells = []
        for(let i=0; i<yy; i++) {
            let row =[]
            for(let j=0; j<xx; j++) {
                row.push(new Cell(i,j))
            }
            
            this.cells.push(row)
        }
    }
}

let hunter = new Table(5,5)
console.log(hunter.cells)

let stone = new Char('🪨', "Rock")
let junio = new Char('👨‍🔧', 'Junio')

let tbStr = ''

hunter.cells[2][2].obj = stone
hunter.cells[3][3].obj = junio


hunter.cells.forEach((v,i,a)=>{
    v.forEach((vv,ii,aa)=>{
        tbStr+=vv.obj.emoji
    })
    tbStr+="<br>"
})

document.querySelector('#st1').innerHTML = tbStr