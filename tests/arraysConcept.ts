     let arr1: string[] = ['2','4', '1', '4'];

     let arr2 : Array<string> = ['7', '5', '3', '2'];

     let arr3 : Array<string | number> = ['7', '5', '3', '2', 1, 4, 6];

     let arr4 : (string | number)[] = ['7', '5', '3', '2', 1, 4, 6, 1, '7'];

     let newSet = new Set(arr4);
     console.log(newSet);

        let newArr4 = [...newSet];
        console.log(newArr4);
console.log("==================================");
        for(let i = 0 ; i < newArr4.length; i++){
            console.log(`value of set is ${newArr4[i]}`);
        }

        for(let e of newSet){
            if(1 == e){
                console.log(`value found in set ${e}`);
            }
        }

        for(let e of newArr4){
            if(7 == e){
                console.log(`value found in array ${e}`);
                break;
            }

        }

        for(let j = 0; j < newArr4.length; j++){
            if(7 == newArr4[j]){
                console.log(`value found in array  using for loop ${newArr4[j]}`);
                break;
            } 
        }

