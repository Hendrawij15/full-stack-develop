//MENGHITUNG INDEKS ARRAY//
/*var scores = [100,50,75];
console.log(scores[0]) //menghitung nilai indeks array, Outputnya =100//
console.log(scores) //MENGHITUNG NILAI ARRAY//
*/

//MENGHITUNG PANJANG ARRAY//
/*var scores = [100,50,75];
console.log(scores.length)*///menghitung panjang array, Output=3//

//MENAMBAH DAN MENGHAPUS ARRAY//
/*var scores = [100,50,75];
console.log(scores[0]);
scores.push(40); //Menambahkan ke array//
scores.pop(4);//menghapus indeks array//
console.log(scores);*/

//ARRAY 2 DIMENSI//
/*var scores = [[10,20,30],[15,25,35],[5,7,9]];
console.log(scores[0][2]); //MEMANGGIL ISI LARIK DIDALAM LARIK//
*/

//CARA 1//
/*var murid = [[1,"vincent",3.5],[2,"udin",3.0],[3,"mamang",2.1]];
for(i=0; i<murid.length;i++){
    console.log(murid[i][1]+",IPK = "+ murid[i][2]+ ((murid[i][2]>3)? "LULUS":"GAGAL"));
}*/

//CARA 2//
/* var murid = [[1,"vincent",3.5],[2,"udin",3.0],[3,"mamang",2.1]]; //array 2 dimensi//
for (i=0; i<murid.length; i++) //PENGULANGAN//
if (murid[i][2]>=3){
    console.log((i+1)+"."+murid[i][1] + ", IPK="+ murid[i][2]+", Lulus");
}else{
    console.log((i+1)+"."+murid[i][1]+", IPK="+murid[i][2]+", Gagal");
}*/

