//String Methods

let a = "forTUne";
console.log(a);
console.log(typeof (a));

let b = a.charAt(4);
console.log(b);

let c = a.charCodeAt(4);
console.log(c);

let d = a.startsWith('U');
console.log(d);

let e = a.endsWith('e');
console.log(e);

let f = a.includes('o');
console.log(f);

let g = a.indexOf('U');
console.log(g);

let h = a.toLocaleUpperCase();
console.log(h);

let i = a.toLocaleLowerCase();
console.log(i);

let j = a.concat(" cloud");
console.log(j);

let k = a.replace("forTUne", "cravita");
console.log(k);

let l = a.repeat(5);
console.log(l);

let m = a.slice(0,4);
console.log(m);

//Number Methods
let n = 567.890345;
console.log(n);
console.log(typeof(n));

let o = n.toFixed(2);
console.log(o);

let p = n.toString();
console.log(p);
console.log(typeof(p));

//Boolean
let q = true;
console.log(q);
console.log(typeof(q));

//undefined
let r;
console.log(typeof(r));

//null
let s = null;
console.log(typeof(s));