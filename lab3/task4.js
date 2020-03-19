function User(name) {
	this.name = name;
}

const me = new User('Rex');
me.getName = function(){
    return me.name;
};


console.log(me.getName()); // Rex