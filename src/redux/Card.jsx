import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { open } from "./slice";
 import { filter } from './slice';
// import {filter2}from './slice';
// import{filter3}from './slice'
import {filter2} from './slice'



const Card = () => {

    const dispatch = useDispatch()
    const cards = useSelector((myStore) => myStore.cardsSlice.cards)
    const opencard = useSelector((myStore) => myStore.cardsSlice.opencard)

    // const style = {
    //     color: 'black',
    //     textAlign: 'center',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     width: '100%',
    //     height:'100%',
    //     backgroundColor: 'lightblue',
    //     border: 'solid,1px,black'


    // }

    const handleClick = (item) => {
        
        

        dispatch(open({ payload: item }))

        setTimeout(() => {
            {opencard===null?
       

            dispatch(filter2({ payload: item })):dispatch(filter({payload:item}))}
        

       
    }, 250);




        

    }




    return (

        <>


            <div >
                {cards.map((item) => { console.log("map2"); return item.status === true ? <div disabled={true}  style={{ backgroundColor: item.name, border: 'solid 3px black', width: '200px',hight:'3000' }} key={item.id} onClick={() => handleClick(item)}>!</div> : <div disabled={true} style={{ backgroundColor: 'red', border: 'solid 3px,black',fontSize:'xx-large',width: '200px',hight:'100%' }} key={item.id} onClick={() => handleClick(item)}>?</div> })}
            </div>
            
        </>





    )






}

export default Card
