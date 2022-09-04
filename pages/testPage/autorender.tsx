import { useEffect, useRef } from "react"
import { IDateRef, RenderProps, WebApi, iScreenProps, iFormProps, InputProps, InputNumberProps, DateProps, SelectProps, RadioProps, CheckboxProps, IDataTableProps, ControllerType, ITabMainProps, ITabPanelProps } from "tomris-web-api"
const PageRender = () => {


    let viewSample: RenderProps = {
        RenderData: {
            objectName: "Screen1",
            objectType: "Screen",
            props: ({ screencode: "scr1", responsiveSize: { col: 2 } } as iScreenProps),
            child: [
                {
                    objectName: "Form1", objectType: "Form", props: ({ name: "Frm1", responsiveSize: { col: 1 } } as iFormProps),
                    child: [
                        {
                            objectName: "TabMain", objectType: "TabMain", props: ({ id: "TabMain", isWizard: true } as ITabMainProps),
                            child: [
                                {
                                    objectName: "Tab1", objectType: "TabPanel", props: ({ id: "Tab1", name: "Tab1", responsiveSize: { col: 2 } } as ITabPanelProps),
                                    child: [
                                        { objectName: "Input2", objectType: "InputNumber", props: ({ id: "Input2", label: "Label2", defaultValue: { value: 10.10, currency: "$" } } as InputNumberProps) },
                                        { objectName: "Input3", objectType: "Date", props: ({ id: "Input3", label: "date", type: "date" } as DateProps) },
                                        { objectName: "Input4", objectType: "Date", props: ({ id: "Input4", label: "datetime", type: "datetime" } as DateProps) },
                                        { objectName: "Input5", objectType: "Date", props: ({ id: "Input5", label: "time", type: "time" } as DateProps) },
                                    ]
                                },
                                {
                                    objectName: "Tab2", objectType: "TabPanel", props: ({ id: "Tab2", name: "Tab2", responsiveSize: { col: 2 }  } as ITabPanelProps),
                                    child: [
                                        { objectName: "Input3range", objectType: "Date", props: ({ id: "Input3range", label: "date", type: "date", mode: "range" } as DateProps) },
                                        { objectName: "Input4range", objectType: "Date", props: ({ id: "Input4range", label: "datetime", type: "datetime", mode: "range" } as DateProps) },
                                        { objectName: "Input5range", objectType: "Date", props: ({ id: "Input5range", label: "time", type: "time", mode: "range" } as DateProps) },
                                        { objectName: "Select", objectType: "Select", props: ({ id: "Input5", label: "Select", options: [{ value: 1, label: "1" }], defaultValue: { value: 1, label: "2" } } as SelectProps) },
                                        { objectName: "Radio", objectType: "Radio", props: ({ id: "Radio", label: "Radio", options: [{ value: 1, label: "1" }, { value: 2, label: "2" }], defaultValue: { value: 1, label: "1" } } as RadioProps) },
                                        { objectName: "Checkbox", objectType: "Checkbox", props: ({ id: "Checkbox", label: "Checkbox", defaultValue: true, responsive: { lg: 1, md: 1, sm: 12, xl: 1, xs: 12 } } as CheckboxProps) },
                                    ]
                                }
                            ] 
                        }, 
                    ]
                },
                {
                    objectName: "Form2", objectType: "Form", props: ({ name: "Frm2", responsiveSize: { col: 3 } } as iFormProps),
                    child: [
                        { objectName: "Input1", objectType: "Input", props: ({ id: "Input1", label: "Label1", defaultValue: "Label1" } as InputProps) },
                        { objectName: "Input2", objectType: "InputNumber", props: ({ id: "Input2", label: "Label2", defaultValue: { value: 10.10, currency: "$" }, spacer: true } as InputNumberProps) },
                        { objectName: "Input3", objectType: "Date", props: ({ id: "Input3", label: "date", type: "date" } as DateProps) },
                        { objectName: "Input4", objectType: "Date", props: ({ id: "Input4", label: "datetime", type: "datetime" } as DateProps) },
                        { objectName: "Input5", objectType: "Date", props: ({ id: "Input5", label: "time", type: "time" } as DateProps) },
                        { objectName: "Input3range", objectType: "Date", props: ({ id: "Input3range", label: "date", type: "date", mode: "range" } as DateProps) },
                        { objectName: "Input4range", objectType: "Date", props: ({ id: "Input4range", label: "datetime", type: "datetime", mode: "range" } as DateProps) },
                        { objectName: "Input5range", objectType: "Date", props: ({ id: "Input5range", label: "time", type: "time", mode: "range" } as DateProps) },
                        { objectName: "Select", objectType: "Select", props: ({ id: "Input5", label: "Select", options: [{ value: 1, label: "1" }], defaultValue: { value: 1, label: "2" } } as SelectProps) },
                        { objectName: "Radio", objectType: "Radio", props: ({ id: "Radio", label: "Radio", options: [{ value: 1, label: "1" }, { value: 2, label: "2" }], defaultValue: { value: 1, label: "1" } } as RadioProps) },
                        { objectName: "Checkbox", objectType: "Checkbox", props: ({ id: "Checkbox", label: "Checkbox", defaultValue: true, responsive: { lg: 1, md: 1, sm: 12, xl: 1, xs: 12 } } as CheckboxProps) },
                    ]
                },
                {
                    objectName: "DataTable", objectType: "DataTable",
                    props: (
                        {
                            name: "DataTable1",
                            data: [
                                {
                                    CheckBox: null,
                                    "name": "Burke Flowers",
                                    "phone": "(517) 236-3431",
                                    "email": "penatibus.et.magnis@yahoo.edu",
                                    "region": "Bursa",
                                    "country": "China",
                                    "text": "ut eros non enim commodo hendrerit. Donec porttitor tellus non",
                                    "numberrange": 5,
                                    "currency": 29633.39,
                                    "alphanumeric": "FYR28YBZ0EP",
                                    "postalZip": "573873",
                                    "date": "2023.07.29 10:43:05",
                                    "time": "22:18:43"
                                },
                                {
                                    CheckBox: true,

                                    "name": "Keiko Webb",
                                    "phone": "(637) 604-4678",
                                    "email": "facilisi@google.edu",
                                    "region": "Istanbul",
                                    "country": "Ukraine",
                                    "text": "eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed",
                                    "numberrange": 8,
                                    "currency": 99709.48,
                                    "alphanumeric": "DCJ17QDV6OD",
                                    "postalZip": "52659",
                                    "date": "2021.12.12 18:28:41",
                                    "time": "18:16:43"
                                },
                                {

                                    CheckBox: false,
                                    "name": "Anika Conner",
                                    "phone": "1-789-749-5197",
                                    "email": "pharetra.nam@protonmail.edu",
                                    "region": "Hatay",
                                    "country": "Vietnam",
                                    "text": "sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",
                                    "numberrange": 3,
                                    "currency": { value: 5462.04, currency: "TL" },
                                    "alphanumeric": "VOB92CFL7GL",
                                    "postalZip": "65152-271",
                                    "date": "2022.08.30 8:30:11",
                                    "time": "6:25:01"
                                },
                            ],
                            selectLoadExp: (row) => {
                                return row.numberrange?.value > 5
                            },
                            header: "SELAM DATA ",
                            selectableRows: true,
                            filterType: "multiple", eidtMode: "excel", filterTypeLabelExcelModeIsShow: true,
                            responsive: { lg: 12, md: 12, sm: 12, xl: 12, xs: 12 },
                            columns:
                                [
                                    { dataKey: "CheckBox", columnName: "CheckBox", columnControllerType: ControllerType.Checkbox, isNotEdit: true },
                                    { dataKey: "name", columnName: "name", columnControllerType: ControllerType.Input },
                                    { dataKey: "phone", columnName: "phone", columnControllerType: ControllerType.Input },
                                    { dataKey: "email", columnName: "email", columnControllerType: ControllerType.Input, isNotEdit: true },
                                    { dataKey: "region", columnName: "region", columnControllerType: ControllerType.Input },
                                    { dataKey: "country", columnName: "country", columnControllerType: ControllerType.Input },
                                    { dataKey: "numberrange", columnName: "numberrange", columnControllerType: ControllerType.Number, columnControllerProps: { type: "curreny" } },
                                    { dataKey: "currency", columnName: "currency", columnControllerType: ControllerType.Number },
                                    { dataKey: "alphanumeric", columnName: "alphanumeric", columnControllerType: ControllerType.Input },
                                    { dataKey: "date", columnName: "date", columnControllerType: ControllerType.Date, columnControllerProps: { type: "datetime" } },
                                    { dataKey: "time", columnName: "time", columnControllerType: ControllerType.Date, isNotEdit: true, columnControllerProps: { type: "time" } }
                                ]
                        } as IDataTableProps)
                }
            ]
        },
    }

    let AutoRender = WebApi.AutoRender(viewSample);



    useEffect(() => {
       console.log(AutoRender.getScreen().getValues());
    })

    return <>
        {<AutoRender.View/>}
    </>
}

export default PageRender

