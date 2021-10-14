import React from 'react';
import Helmet from "react-helmet";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {formatDate, parseDate} from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import "./DayPicker.css"

function convert(str) {
    let date = new Date(str),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), month, day].join("/");
}

export function getFromDate() {
    return convert(dates.from.toString());
}

export function getToDate() {
    return convert(dates.to.toString());
}

let dates = {
    from: undefined,
    to: undefined,
};

export default class DayPicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.setFromDate = props.setFromDate;
        this.setToDate = props.setToDate;
    }

    handleFromChange(from) {
        dates.from = from;
        this.setFromDate(getFromDate());
    }

    async handleToChange(to) {
        dates.to = to;
        this.setToDate(getToDate());
    }


    render() {
        const from = dates.from;
        const to = dates.to;
        const modifiers = {start: from, end: to};
        return (
            <div className="InputFromTo">
                <DayPickerInput
                    value={from}
                    placeholder="From"
                    formatDate={formatDate}
                    parseDate={parseDate}
                    dayPickerProps={{
                        selectedDays: [from, {from, to}],
                        disabledDays: {after: to},
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 2,
                        onDayClick: () => this.to.getInput().focus(),
                    }}
                    onDayChange={this.handleFromChange}
                />
                {' '}—{' '}
                <span className="InputFromTo-to">
                      <DayPickerInput
                          ref={el => (this.to = el)}
                          value={to}
                          placeholder="To"
                          formatDate={formatDate}
                          parseDate={parseDate}
                          dayPickerProps={{
                              selectedDays: [from, {from, to}],
                              disabledDays: {before: from},
                              modifiers,
                              month: from,
                              fromMonth: from,
                              numberOfMonths: 2,
                          }}
                          onDayChange={this.handleToChange}
                      />
                </span>
                <Helmet>
                    <style>{`
                          .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                          }
                          .InputFromTo .DayPicker-Day {
                            border-radius: 0 !important;
                          }
                          .InputFromTo .DayPicker-Day--start {
                            border-top-left-radius: 50% !important;
                            border-bottom-left-radius: 50% !important;
                          }
                          .InputFromTo .DayPicker-Day--end {
                            border-top-right-radius: 50% !important;
                            border-bottom-right-radius: 50% !important;
                          }
                          .InputFromTo .DayPickerInput-Overlay {
                            width: 550px;
                          }
                          .InputFromTo-to .DayPickerInput-Overlay {
                            margin-left: -198px;
                          }
                        `}
                    </style>
                </Helmet>
            </div>
        );
    }
}