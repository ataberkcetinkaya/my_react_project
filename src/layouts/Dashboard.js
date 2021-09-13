import React from 'react'
import CarList from '../pages/CarList'
import Categories from './Categories'
import { Grid, GridColumn, Image } from 'semantic-ui-react'
import { Route } from 'react-router'
import CarDetail from '../pages/CarDetail'
import RentDetail from '../pages/RentDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Route exact path="/" component={CarList}/>
                        <Route exact path="/cars" component={CarList}/>
                        <Route path="/cars/:name" component={CarDetail}/>
                        <Route path="/rent" component={RentDetail}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
