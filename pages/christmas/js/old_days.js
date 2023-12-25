function old_days(){
    var content = [
        {
            date: '2023年9月3日',
            text: '瓜呆送货上门',
            image_src: '../../images/old_days/2023-9-3.png'    
        },
        {
            date: '2020年10月4日',
            text: '武汉 · 画',
            image_src: '../../images/old_days/2020-10-4.jpg'    
        }
    ];

    var index = parseInt(Math.random() * content.length);
    console.log(index);
    document.getElementById("old-days-date").innerHTML = content[index].date;
    document.getElementById("old-days-text").innerHTML = content[index].text;
    document.getElementById("old-days-img").src = content[index].image_src;
}