import dayLabel from "./DayLabel";

test('dayLabel index 0 is today', () => {
    expect(dayLabel('2021-11-13', 0)).toEqual('Today');
    expect(dayLabel('2021-11-15', 0)).toEqual('Today');
});

test('index 1 is tomorrow', () => {
    expect(dayLabel('2021-11-13', 1)).toEqual('Tomorrow');
    expect(dayLabel('2021-11-15', 1)).toEqual('Tomorrow');
});

test('index 2 is a weekday', () => {
    expect(dayLabel('2021-11-13', 2)).toEqual('Saturday');
    expect(dayLabel('2021-11-15', 2)).toEqual('Monday');
    expect(dayLabel('2021-11-17', 2)).toEqual('Wednesday');

    expect(dayLabel('2020-11-17', 2)).toEqual('Tuesday');
    expect(dayLabel('2022-11-17', 2)).toEqual('Thursday');
});

test('index 2 but invalid date is an error', () => {
    expect(dayLabel('2022-13-01', 2)).toEqual('Error');
    expect(dayLabel('2022-11-40', 2)).toEqual('Error');
});