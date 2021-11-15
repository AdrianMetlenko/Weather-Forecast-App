import weekdayName from "./WeekdayName";

test('correct values for all 7 days', () => {
    expect(weekdayName(0)).toEqual('Sunday')
    expect(weekdayName(1)).toEqual('Monday')
    expect(weekdayName(2)).toEqual('Tuesday')
    expect(weekdayName(3)).toEqual('Wednesday')
    expect(weekdayName(4)).toEqual('Thursday')
    expect(weekdayName(5)).toEqual('Friday')
    expect(weekdayName(6)).toEqual('Saturday')
});

test('invalid index returns error', () => {
    expect(weekdayName(-1)).toEqual('Error')
    expect(weekdayName(7)).toEqual('Error')
    expect(weekdayName(14)).toEqual('Error')
});