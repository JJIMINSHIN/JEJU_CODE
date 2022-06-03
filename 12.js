const Wizard = class Wizard {
    cunstructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
    
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();



//constructor : 클래스의 인스턴스 객체를 생성하고 초기화하는 메서드