import React,{ useState } from 'react';
import './Search.css';

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRangePicker } from "react-date-range";


 function Search() {
     const [startDate, setStartDate] =  useState 
     (new Date());
     const [endDate, setEndDate] = useState(new Date());
     
     const selectionRange = {
         startDate: startDate,
         endDate: endDate,
         key:"selection",
     };

     function handleSelect(ranges) {
         setStartDate(ranges.selection.startDate);
         setEndDate(ranges.selection.endDate);
     }
     return (
        <div
            classname='search'
        >
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect} />
                <h2>
                    Number of Foods
                 
                </h2>
                <input min={0}
                defaultValue={2}
                type="number" />
                <button>Search your Dish</button>
            
        </div>
    )
}
export default Search