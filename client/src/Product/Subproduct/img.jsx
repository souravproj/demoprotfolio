import React from 'react';

function img() {

const Images=[
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
     {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    },
    {
        img:'https://via.placeholder.com/550x550',
        title:'My Site'
    }
]

const ListOfImages=Images.map((element,index)=>{
    return(
       <>
        <img className="thumbnail" src={element.img}/>
        <h5>{element.title}</h5>
    </>
    )
})

    return (
        <>
            <div className="column">
            {ListOfImages}
          </div>
         
        </>
    );
}

export default img;