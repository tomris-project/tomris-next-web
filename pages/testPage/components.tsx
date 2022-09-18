import { useRef, useState } from "react"
import { IInputRef, IButtonRef, WebApi, FormRef, IInputNumberRef } from "tomris-web-api"
const PageComponents = () => {
  let form = useRef<FormRef>(null);
  let number1 = useRef<IInputNumberRef>(null);
  let data = WebApi.PageContext.get("key1");
  console.log(data);
  let useForm = WebApi.Form.useForm();
  const options = [
    { value: 'chocolate', label: 'Chocolate', data: { a: "baba" } },
    // { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    // { value: 'vanilla2', label: 'Vanilla 2' },
    // { value: 'vanilla3', label: 'Vanilla 3' } 
  ]

  return <>
    <useForm.View name="Form1"  responsiveSize={{ col: 4 }}  >
      <WebApi.Button id="btn1" label="btn1 HIDE" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(useForm.getValue())
          return
          form.current?.getBaseController?.("name1").setHide();
          form.current?.getBaseController?.("name2").setHide();
        }} />
      <WebApi.Button id="btn2" label="GETDATA" icon={{ iconName: WebApi.IconName.AlignJustify }}
        onClick={() => {
          console.log(form.current?.getValue());
        }} />
      <WebApi.Button id="btn3" label="isValid" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
        onClick={() => {
          console.log(useForm.isValid?.());
        }} />
      <WebApi.Button id="btn4" label="setNumber Value" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
        onClick={() => {
          useForm.getBaseController?.("InputNumber").setValue({ value: 934324230.91, currency: "TL" })
          useForm.getNumberInputController?.("InputNumber").setCurrencyOptions(["AR", 'TL', 'USD']);
        }} />
      <WebApi.Controller.Select id="select1" isMulti isClearable isSearchable label="selam 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options} onValid={[(e) => { return { IsValid: e.getValue() != null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]} />
      <WebApi.Controller.Input id="input1" label="input1" type="textarea" />

      <WebApi.Controller.Date id="time" type={"time"} label="time" placeholder="time" enableSeconds onValid={(e) => { return { IsValid: false, ValidText: "selam1" } }} />
      <WebApi.Controller.Date id="daterenage" type={"date"} mode={"range"} label="daterenage" disabled />
      <WebApi.Controller.Date id="date" type={"date"} label="date" />
      <WebApi.Controller.Date id="datetime" type={"datetime"} enableSeconds label="datetime" />
      <WebApi.Controller.Date id="datetimerange" type={"datetime"} mode={"range"} enableSeconds label="datetimerange" />
      <WebApi.Controller.Radio position="horizontal" id="Radio1" label="Radio 1" defaultValue={{ value: 'vanilla', label: 'Vanilla' }} options={options} onValid={[(e) => { return { IsValid: e.getValue() != null && e.getValue().value == "chocolate", ValidText: "chocolate select" } }]} />
      <WebApi.Controller.InputNumber id={"InputNumber"} defaultValue={{ value: 50, currency: "TL" }} label="Sayi Giriniz" currencyOptions={['TL']} onValid={(e) => { return { IsValid: (e.getValue().value ?? 0) > 10 || e.getValue().value == null, ValidText: "10dan buyuk gir" } }} />


      <WebApi.Controller.InputNumber id={"InputNumber"} ref={number1} defaultValue={{ Start: 50, Stop: 51, currency: "TL" }} label="Range Sayi Giriniz" mode="range" />
      <WebApi.Controller.InputNumber id={"InputNumber"} ref={number1} defaultValue={{value: 34  }} currencyOptions={["USD","TRY","EUR"]} label=" Sayi Giriniz Only"  />
      {/* <WebApi.Controller.InputNumber id={"InputNumber"} ref={number1} defaultValue={{ value: 2032434.34, currency: "TL" }} label="Range Sayi Giriniz" /> */}

      <WebApi.Button id="btn4" label="setNumber Value" icon={{ iconName: WebApi.IconName.AlignJustify }} spacer
        onClick={() => {
           console.log(number1.current?.setValue({ Start: 10.2, Stop: 2123230.4, currency: "TL" }))
          // console.log(number1.current?.setValue({ value: 34, currency: "USD" }))

          console.log(number1.current?.getValue())
        }} />

      <WebApi.Controller.Checkbox id="Checkbox" label="input1" defaultValue={null} indeterminate
        onValid={[(e) => { return { IsValid: e.getValue() == true, ValidText: "SEC select" } }]}
      />
    </useForm.View>
  </>
}

export default PageComponents
