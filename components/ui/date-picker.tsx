"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { isSameMonth, isAfter, startOfMonth, endOfMonth, add, sub } from "date-fns"

interface DatePickerParams {
    date: Date;
    onDateChange: (...event: any[]) => void;
}

export function DatePicker({ date, onDateChange }: DatePickerParams) {
    const [currentMonth, setCurrentMonth] = React.useState(new Date())

    const goToPreviousYear = () => {
        setCurrentMonth(prevMonth => sub(prevMonth, { years: 1 }))
    }
    
    const goToNextYear = () => {
        setCurrentMonth(prevMonth => add(prevMonth, { years: 1 }))
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <div className="bg-white rounded-md border shadow p-2">
                    <div className="flex justify-between items-center mb-1">
                        <Button onClick={goToPreviousYear} variant="outline" size="sm">
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Previous Year
                        </Button>
                        <Button onClick={goToNextYear} variant="outline" size="sm">
                            Next Year
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={onDateChange}
                        className="rounded-md"
                        fixedWeeks
                        classNames={{
                            day_outside: "text-muted-foreground opacity-50",
                        }}
                        onMonthChange={setCurrentMonth}
                        month={currentMonth}
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
}
