class Cloth extends Resources {
    constructor(name, obtain) {
        super(name)
        this.obtain = obtain
        this.type = 'Cloth'
    }
}
const linen = new Cloth('linen', null)
const guazhou = new Cloth('guazhou_green', '2*ramie + 2*newly_hatched_silk')
const nine_clouds_satin = new Cloth('nine_clouds_satin', '2*hemp + 2*clam_worm')
const moon_light_brocade = new Cloth('moonlight_brocade', 'Forbiden Instance, School Points, etc.')