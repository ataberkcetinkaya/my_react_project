import React from 'react'
import CarList from '../pages/CarList'
import Categories from './Categories'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            <Categories></Categories>
            <CarList></CarList>
        </div>
    )
}
