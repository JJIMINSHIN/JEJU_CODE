function plants(plant){
    let plant1 = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    let plant2 = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

    plant1.forEach(function(item){
        if(plant2[item] == plant){
            console.log(plant1);
        }
    })

}

plants('지구')