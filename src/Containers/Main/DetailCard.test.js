import React from 'react';
import DetailCard from './DetailCard';
import {render, screen} from "@testing-library/react";
import API_Example from '../../API/API_Example.json'

//using the locally saved example for London 2021-11-13

describe('Condition', () => {
    it('should have a condition image', () => {
        //setForecastData is a hook only required to update the API response
        render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const image = screen.getByAltText('weather condition icon')
        expect(image).toBeInstanceOf(Image)
    })

    it('should have a corresponding condition description', () => {
        const {container} = render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const text = container.getElementsByTagName('h4')[0]
        expect(text).toHaveTextContent(API_Example.forecast.forecastday[0].day.condition.text);
    })
})

describe('Temperature', () => {
    it('should show a larger max temperature', () => {
        const {container} = render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const max = container.getElementsByTagName('h5')[0]
        expect(max).toHaveTextContent(API_Example.forecast.forecastday[0].day.maxtemp_c);
    })

    it('should show a smaller low temperature', () => {
        const {container} = render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const low = container.getElementsByTagName('h6')[0]
        expect(low).toHaveTextContent(API_Example.forecast.forecastday[0].day.mintemp_c);
    })
})

describe('AttributeChips', () => {
    it('should have 6 attribute chips for the day', () => {
        const {container} = render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const low = container.getElementsByClassName('MuiChip-root')
        //as each chip is created using 2, expect double
        expect(low.length).toEqual(12)
    })

    test('each of the 6 chips should have a caption and a value', () => {
        const {container} = render(<DetailCard day={API_Example.forecast.forecastday[0]}/>);
        const low = container.getElementsByClassName('MuiTypography-body1')
        //expect 2 body1 elements for each chip
        expect(low.length).toEqual(12)
    })
})