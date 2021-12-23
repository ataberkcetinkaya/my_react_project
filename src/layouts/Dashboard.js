import React from 'react'
import CarList from '../pages/CarList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import CarDetail from '../pages/CarDetail'
import RentDetail from '../pages/RentDetail'
import { ToastContainer } from 'react-toastify'
import CarAdd from '../pages/CarAdd'
import HomePage from '../pages/HomePage'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position = "bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/cars" component={CarList}/>
                        <Route path="/cars/:name" component={CarDetail}/>
                        <Route path="/rent" component={RentDetail}/>
                        <Route path="/car/add" component={CarAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
