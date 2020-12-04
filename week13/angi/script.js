const sqaure = {
    area(num) {
        return num * num
    },  
    perimeter(num) {
        return num * 4       
    }   
}
console.log(sqaure.area(10))
console.log(sqaure.perimeter(10))

const pp = {
    tom_bolgoh(nani)  {
        nani = nani.split(" ");
        for (let i = 0, x = nani.length; i < x; i++) {
            nani[i] = nani[i][0].toUpperCase() + nani[i].substr(1);
        }
        return nani.join(" ");
    }
}
console.log(pp.tom_bolgoh('bi bol burhan'))

const oo = {
    urt(nani)  {
        nani = nani.split(" ");
        let urt = 0;
        let kk
        for (let i = 0; i < nani.length; i++) {
            if(nani[i].length > urt) {
                urt = nani[i].length
                kk = nani[i];
            }
        }
        return kk;
    }
}
console.log(oo.urt('bi bol burhan'))

const ff = {
    check(nani)  {
        let nani1 = "";
        for (let i = nani.length - 1; i >= 0; i--) {
            nani1 += nani[i];
        }
        for (let i = 0; i < nani.length; i++) {
            if(nani1[i] !== nani[i]) {
                return 'This is not palindrome'
            }
        }
        return 'This is palindrome';
    }
}
console.log(ff.check('madam'))