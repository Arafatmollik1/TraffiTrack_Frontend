import React, {useEffect, useRef} from 'react';
import flatpickr from "flatpickr";


const MyComponent: React.FC = () => {
    const dateRangeRef = useRef(null);

    useEffect(() => {
        const now = new Date();
        console.log(now.getMinutes());

        // @ts-ignore
        flatpickr(dateRangeRef.current, {
            enableTime: true,
            dateFormat: "d-m-Y H:i",
            mode: "range",
            maxDate: now,
        });
    }, []);
    const handleSubmit = () => {
        // @ts-ignore
        const dateRange =   dateRangeRef.current.value;
    };    return (
        <>
            <div
                className="mb-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Filter by time and date
                    </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Date and Time Range
                        </label>
                        <div className="relative">
                            <input
                                ref={dateRangeRef}
                                type="text" // Change type to text to properly initialize Flatpickr
                                placeholder="Select date and time range"
                                className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <button
                        className="max-w-xs rounded bg-primary py-2 px-4 text-white hover:bg-primary-dark"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyComponent;