import React from 'react';
import City from './City';
import {render, screen} from "@testing-library/react";
import API_Example from '../../API/API_Example.json'

//using the locally saved example for London 2021-11-13
//additional cases could be tested by more data sets
//e2e testing can check direct from API response

describe('Current Location Attributes', () => {
    it('should have the city name as a title', () => {
        //setForecastData is a hook only required to update the API response
        const {container} = render(<City setForecastData={undefined} forecastData={API_Example}/>);
        const title = container.getElementsByTagName('h4')[0]
        expect(title).toHaveTextContent(API_Example.location.name);
    })

    it('should have the city Region and Country as the subtitle', () => {
        const {container} = render(<City setForecastData={undefined} forecastData={API_Example}/>);
        const subtitle = container.getElementsByTagName('h6')[0]
        expect(subtitle).toHaveTextContent(API_Example.location.region + ', ' + API_Example.location.country);
    })
})

describe('User Input', () => {
    //identify field by label, as user would
    it('should have an input field for the user to enter a city name ', () => {
        render(<City setForecastData={undefined} forecastData={API_Example}/>);
        const input = screen.getByLabelText('Select a new city...');
        expect(input).toBeInTheDocument()
        //TODO: should additionally check the identified component has a <input>
        //unsure how to test this with Jest now
    })
})