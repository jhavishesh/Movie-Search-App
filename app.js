const form=$('form');
const result=$('#result');

function getshows(searchtext)
{
    let already=$('#result img:first-child')

    if(already){
        $('img').remove();
    }

let url=`https://api.tvmaze.com/search/shows?q=${searchtext}`;
    
    axios.get(url)
    .then((res)=>{

        for(let item of res.data){
            if(item.show.image)
            {
            
                const img=$('<img/>');
            img.attr('src',`${item.show.image.medium}`)
            img.css('margin','10px')
            result.append(img);
            
            }
            
        }
        
    })

}

form.on('submit',function(e){
    e.preventDefault();

    let searchtext=$('#inp').val();
    
    console.log(searchtext);

    $('#inp').val("");
    getshows(searchtext);
})