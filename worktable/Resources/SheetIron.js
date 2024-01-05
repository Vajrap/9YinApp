class SheetIron extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'sheet_iron'
    }
}
const xuanhe_hasp = new SheetIron(`xuanhe_hasp`, `life`)
const diren_hasp = new SheetIron(`diren_hasp`, `life`)