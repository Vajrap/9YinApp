class Resources {
    constructor(name, obtain) {
        this.name = name
        this.obtain = obtain
    }
}

const เส้นเงิน = new Resources(`เส้นเงิน`, `ซื้อจาก NPC`)
const ก้อนทองแดง = new Resources(`ก้อนทองแดง`, `ช่างเหล็ก`)
const ผ้ากวาโจว = new Resources(`ผ้ากวาโจว`, `ช่างทอผ้า; รามี่x2 + ไหมอ่อนx2`)
const ก้อนเงิน = new Resources(`ก้อนเงิน`, `ช่างเหล็ก`)
const หินนกยูง = new Resources(`หินนกยูง`, `ดรอป, แต้มพื้นที่ต้องห้าม`)
const หินกระดูกมังกร = new Resources(`หินกระดูกมังกร`, `ดรอป, แต้มบริจาคสำนัก, แต้มพื้นที่ต้องห้าม`)
const เชือกรวมเงิน = new Resources(`เชือกรวมเงิน`, `ซื้อจาก NPC`)
const หินลายเต่า = new Resources(`หินลายเต่า`, `ช่างเหล็ก`)
const หนังลิงบาง = new Resources(`หนังลิงบาง`, `ล่าสัตว์`)
const ผ้าลินิน = new Resources('ผ้าลินิน', `ดรอป`)
const แพรเก้ารุ้ง = new Resources('แพรเก้ารุ้ง', 'ช่างทอผ้า: hempx2 + clam_wormx2')
const ไหมแก้วแสงจันทร์ = new Resources('ไหมแก้วแสงจันทร์', 'ดรอป, แต้มบริจาคสำนัก, แต้มพื้นที่ต้องห้าม')