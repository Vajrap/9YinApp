class Consumption extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'Consumption_Items'
    }
}
const tailor_chalk = new Consumption(`tailor_chalk`, `NPC vendor`)