function old_days(){
    var content = [
        {
            date: '2023年11月8日',
            text: 'test',
            image_src: '../../images/old_days/1.jpg'    
        },
        {
            date: '2023年11月8日',
            text: 'test2',
            image_src: '../../images/old_days/2.png'    
        }
    ];

    var index = parseInt(Math.random() * content.length);
    console.log(index);
    document.getElementById("old-days-date").innerHTML = content[index].date;
    document.getElementById("old-days-text").innerHTML = content[index].text;
    document.getElementById("old-days-img").src = content[index].image_src;
}