class Ornament {
    constructor(name, resourceNeeded) {
        this.name = name
        this.resourceNeeded = resourceNeeded.map(resource => ({
            resource: resource.resource instanceof Resources ? resource.resource : null,
            quantity: resource.quantity
        }))
    }
}

class Ring extends Ornament {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'ring'
    }
}

const ring_01 = new Ring(
    'แหวนหยกไหมทอง',
    'ต้องการแท่นผลิตระดับ 1',
    [
        { resource: เส้นเงิน, quantity: 6},
        { resource: ก้อนทองแดง, quantity: 9},
        { resource: ผ้ากวาโจว, quantity: 9},
        { resource: ก้อนเงิน, quantity: 3},
        { resource: หินนกยูง, quantity: 2},
        { resource: หินกระดูกมังกร, quantity: 2}
    ]
)

class Amulet extends Ornament {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'amulet'
    }
}

const amulet_01 = new Amulet(
    `สร้อยไหมทองอิงลั่ว`,
    `ต้องการแท่นผลิตระดับ 1`,
    [
        { resource: เส้นเงิน, quantity: 10},
        { resource: ก้อนทองแดง, quantity: 5},
        { resource: เชือกรวมเงิน, quantity: 1},
        { resource: ผ้ากวาโจว, quantity: 6},
        { resource: ก้อนเงิน, quantity: 3},
        { resource: หินกระดูกมังกร, quantity: 3}
    ]
)


class Earring extends Ornament {
    constructor(name, description, resourceNeeded) {
        super(name, resourceNeeded)
        this.description = description
        this.type = 'earring'
    }
}

const earring_01 = new Earring(
    `ต่างหูไหมทองแปดวิเศษ`,
    `ต้องการแท่นผลิตระดับ 1`,
    [
        { resource: เส้นเงิน, quantity: 9},
        { resource: ก้อนทองแดง, quantity: 7},
        { resource: หินลายเต่า, quantity: 3},
        { resource: ก้อนเงิน, quantity: 7},
        { resource: หินนกยูง, quantity: 3},
        { resource: หินกระดูกมังกร, quantity: 3}
    ]
)



