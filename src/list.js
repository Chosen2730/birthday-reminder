import React from 'react'

const List =({people})=>{
    return<>
    {people.map((person)=>{
        const{id, age, name, image} = person;
        return (
            <div key={id} className='birth'>
        <div className='birth_cont image'>
            <img src={image} alt={name} />
        </div>
        <div className='birth_cont'>
            <h4 className='name'>{name}</h4>
            <h4 className='age'>{age} years</h4>
        </div>
    </div>
        )
    })}
    </>
}
export default List