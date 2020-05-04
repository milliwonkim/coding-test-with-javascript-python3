class HashTable {
    constructor(size = 4){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let keyMapLength = this.keyMap.length;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % keyMapLength;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    //the way of handling duplicate values 1
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
                keysArr.push(this.keyMap[i][j][0])
            }}
        }}
        return keysArr;
    }

    //the way of handling duplicate values 2
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                /*
                when you do .values or whatever the equivalent is, you only get the unique values.
                you don't get all the duplicates
                because there's usually no order that's guaranteed. and it could be confusing if you have duplicate data.
                so simplest way is before we push it into the values array, we just check
                does this keyMap already or does the values array already include this item?
                */
            if(!valuesArr.includes(this.keyMap[i][j][1])){
                valuesArr.push(this.keyMap[i][j][1])
            }}
        }}
        return valuesArr;
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")
ht.set("dogs", "are cool")
ht.set("cats", "are fine")
ht.set("i love", "pizza")
// ----------------------------
ht.get("cats");
ht.get("dogs");
// ----------------------------
ht.keys().forEach(function(key) {
    ht.get(key);
})
ht.values()