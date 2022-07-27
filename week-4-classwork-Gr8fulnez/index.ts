import * as https from "https";


let url: string = "https://dhq.sh/ages.json";
console.log(url)
let result: string = "",

    
    arr: string | number[],
    total: number = 0;
https.get(url, (res) => {
    res.on("data", (data) => {
        result += data;
    });
    
    //manipulate data 
    res.on("end", () => {
        result = JSON.parse(result);
        result = result.data.split(",").map((element) => element.trim());

        arr = result.filter((el, i) => i % 2 !== 0);
        console.log(arr)
        
        //spliting the age with "=" separator 
        for (let el of arr) {
            el = el.split("=");
          console.log(el)
            //convert string to integer 
            if (parseInt(el[1]) > 25) {
                total += parseInt(el[1]);
            }
          
        }
      
        console.log(result);
        console.log(arr);
        console.log(total);
    });
});