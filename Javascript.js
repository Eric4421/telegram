const person = {
    name : '홍길동',
    age : 30,
    greet: function(){
        console.log(`안녕하세요, ${this.name}입니다`);
    }
};
console.log(person.name);
person.greet();