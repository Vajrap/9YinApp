class AnimalSkinAndFur extends Resources  {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'animal_skin_and_fur'
    }
}
const thin_monkey_skin = new AnimalSkinAndFur(`thin_monkey_skin`, `Scholar monkey`)