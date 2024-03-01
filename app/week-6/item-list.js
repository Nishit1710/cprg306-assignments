"use client";
import { useState } from 'react';
import Item from "./item.js";

const ItemList = ({items}) => {
    const [sortBy, setSortBy] = useState('name');

    const sortItems = () => {
        const sortedItems = [...items];
            return sortedItems.sort((a,b) => {
                if(sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'category') {
                    return a.category.localeCompare(b.category);
                } 
                return 0;
            });
        };
        const handleSortChange = (newSortBy) => {
            setSortBy (newSortBy);
        };
        return (
            <div>
                <div>
                    <button onClick = {() => handleSortChange('name')}
                    style ={{ marginLeft:'20px',  marginBottom:'20px', backgroundColor: sortBy === 'name' ? 'lightgreen':'cyan', padding: '10px', fontSize:'20px', fontWeight: 'bold', borderRadius: '8px'}}> Name
                    </button>
                    <button onClick ={()=>handleSortChange ('category')} 
                    style={{display:'content',  marginBottom:'20px', marginLeft:'20px', backgroundColor: sortBy==='category'? 'red': 'blue', padding: '10px', fontSize:'20px', fontWeight: 'bold', borderRadius: '8px'}} > Category </button>

                </div>
                <ul>
                    {sortItems().map( item => (
                        <Item  key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        );
    };
export default ItemList;