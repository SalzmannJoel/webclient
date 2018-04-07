
class Cube extends PrintableInterface {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    print(area, x, y) {
        area.rect(x, y, this.width, this.height);
    }
}