let fs=require('fs')
const superagent=require('superagent')


// const a1 = (fileName, encoding) => {
//     return new Promise((resolve, reject) => {
//                     fs.readFile(fileName, encoding, (err, data) => {
//                 if (err) {
//                     return reject(err);
//                 }
    
//                 resolve(data);
//             });
             
//     });
// }
// a1('./text.txt','utf8')
//     .then(data => {
//         // console.log(data);
//         return superagent.get(`https://api.nationalize.io?name=${data}`).then((d)=>
//         {
//            var res=d.body.country[0].country_id;
//                 return a2('text1.txt',res).then(()=>
//                 {
//                 //    console.log"Done")
//                 })
                 
//         })

//     })
//     .catch(err => {
//         console.log(err);
//     });

//     const a2 = (fileName, res) => {
//         return new Promise((resolve, reject) => {
//             fs.writeFile(fileName,res,(err)=>
//                     {
//                         if(err)console.log(err)
                       
//                     })
    
//                 resolve(res);  
              
//             });
//         };

   
      
        // Promise.all([a1,a2])
       
          
// fs.readFile('text.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err)
//     console.log(data)
//     superagent.get(`https://api.nationalize.io?name=${data}`,(err,data)=>
//     {
//         if(err)console.log(err)
//         // console.log(data1)
//         var res=data._body.country[0].country_id;
//         fs.writeFile('text1.txt',`${res}`,(err)=>
//         {
//             if(err)console.log(err)
//             console.log("DONE")
//         })
//     })
     
//   })

// async function a()
// {
//     try
//     {
//         let content=await a1("text.txt",'utf-8')
//         console.log(content);
//         let data1=await superagent.get(`https://api.nationalize.io?name=${content}`)
//         var d1=data1.body.country[0].country_id;
//         a2("text2.txt",d1);
//         console.log("sucess");
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// a();


// const writeFile = (fileName,data)

async function readFile(){
try{
let p1=await fs.promises.readFile('text.txt','utf8');
console.log(p1);

let p=await superagent.get(`https://api.nationalize.io?name=${p1}`);
let p2=p.body.country[1].country_id;
console.log(p2);
fs.promises.writeFile("file3.txt",p2)
console.log("data transfered sucessfully");
}
catch(e){
console.log(e);
}
}
readFile();

