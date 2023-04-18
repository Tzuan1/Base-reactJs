import React, { useState } from "react"
import { DatePicker } from "antd"

const RangePicker = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleStartDateChange = date => {
        setStartDate(date)
    }

    const handleEndDateChange = date => {
        setEndDate(date)
    }

    const disabledEndDate = current => {
        if (!startDate) {
            return current && current < Date.now()
        }
        return current && current < startDate
    }

    return (
        <div>
            <DatePicker
                value={startDate}
                onChange={handleStartDateChange}
                placeholder="Start Date"
            />
            <DatePicker
                value={endDate}
                onChange={handleEndDateChange}
                placeholder="End Date"
                disabledDate={disabledEndDate}
            />
        </div>
    )
}

export default RangePicker
