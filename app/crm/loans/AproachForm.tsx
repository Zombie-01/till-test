import { Form } from "@/components/form";
import FormContent from "@/components/form/formContent";
import FormInput from "@/components/input/formInput";
import DynamicRadioGroup from "@/components/input/RadioGroup";
import FormSelect from "@/components/select/FormSelect";
import { Button, Card, Divider } from "antd";
import Title from "antd/es/typography/Title";
import { FunctionComponent, useState } from "react";

interface AproachProps {
  modalType: "create" | "update";
}

const AproachForm: FunctionComponent<AproachProps> = ({ modalType }) => {
  return (
    <>
      <Form
        url=""
        modalType={modalType}
        name={"Ачаа дөхөлт " + (modalType === "create" ? "үүсгэх" : "засах")}>
        {" "}
        <div className="flex flex-col w-full gap-2 justify-between">
          <h4>Ачаа чингэлэг тээврийн бүртгэл</h4>
          <div
            style={{ gridTemplateColumns: "55% 45%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full justify-between items-end">
            <div className="">
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Чиглэлийн дугаар" className="w-5/12">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Чиглэлийн дугаар"
                  />
                </FormContent>
                <FormContent header="Даац" className="w-[3/12]">
                  <FormSelect
                    options={[
                      {
                        value: "500",
                        label: "Даац",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                    name="number"
                    inputtype="string"
                    label="Даац"
                  />
                </FormContent>
                <FormContent header="Зуучын нэр" className="w-[4/12]">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Зуучын нэр"
                  />
                </FormContent>
              </div>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Тээврийн чиглэл" className="w-5/12">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Чиглэлийн дугаар"
                  />
                </FormContent>
                <FormContent header="Чиглэл" className="w-[3/12]">
                  <DynamicRadioGroup
                    name="number"
                    label="Чиглэлийн дугаар"
                    options={[
                      {
                        value: "Урд",
                        label: "Урд",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                      {
                        value: "Хойн",
                        label: "Хойн",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                  />
                </FormContent>
                <FormContent
                  header="Дөхөлтийн мэдээний огноо"
                  className="w-[4/12]">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Зуучын нэр"
                  />
                </FormContent>
              </div>
            </div>
            <div className="h-full p-4 border rounded-lg ">
              <h2 className="text-[28px]">Ачаа</h2>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Ачааны нэр төрөл" className="w-[4/12]">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Ачааны нэр төрөл"
                  />
                </FormContent>
              </div>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Хүлээн авагч" className="w-full">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Хүлээн авагч"
                  />
                </FormContent>
                <FormContent header="Утас" className="w-full">
                  <FormInput name="number" inputtype="string" label="Утас" />
                </FormContent>
              </div>
            </div>
            <div className="h-full p-4 border rounded-lg ">
              <h2 className="text-[28px]">Авах</h2>
              <div className="flex gap-1 h-min items-start justify-between  ">
                <FormContent header="Тээврийн хөлс" className="w-[4/12]">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Тээврийн хөлс"
                  />
                </FormContent>
                <FormContent header="Валют" className="w-[3/12]">
                  <FormSelect
                    options={[
                      {
                        value: "500",
                        label: "Валют",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                    name="number"
                    inputtype="string"
                    label="Валют"
                  />
                </FormContent>
                <FormContent header="Харилцагч" className=" w-5/12 ">
                  <FormSelect
                    options={[
                      {
                        value: "500",
                        label: "Харилцагч",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                    name="number"
                    inputtype="string"
                    label="Харилцагч"
                  />
                </FormContent>
              </div>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Төлөх арга" className="w-full">
                  <FormSelect
                    options={[
                      {
                        value: "500",
                        label: "Төлөх арга",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                    name="number"
                    inputtype="string"
                    label="Төлөх арга"
                  />
                </FormContent>
                <FormContent header="Э/Хураамж санамж" className="w-full">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Э/Хураамж санамж"
                  />
                </FormContent>
              </div>
            </div>{" "}
            <div className="h-full p-4 border rounded-lg ">
              <h2 className="text-[28px]">Авах</h2>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent
                  header="Шилжүүлэгчийн тээврийн хөлс"
                  className="w-[4/12]">
                  <FormInput
                    name="number"
                    inputtype="string"
                    label="Шилжүүлэгчийн тээврийн хөлс"
                  />
                </FormContent>
              </div>
              <div className="flex gap-1 items-start justify-between  ">
                <FormContent header="Гадаад тээвэр зууч" className="w-full">
                  <FormSelect
                    options={[
                      {
                        value: "500",
                        label: "Гадаад тээвэр зууч",
                        errorMessage: "Заавал бөглөнө",
                        isInvalid: true,
                      },
                    ]}
                    name="number"
                    inputtype="string"
                    label="Гадаад тээвэр зууч"
                  />
                </FormContent>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <div className="w-[50%]">
              <FormContent header="Төлбөр хариуцагчийн нэр" className="w-full">
                <FormInput
                  name="number"
                  inputtype="string"
                  label="Төлбөр хариуцагчийн нэр"
                />
              </FormContent>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button htmlType="submit" className="my-4">
              {modalType === "create" ? "Үүсгэх" : "Засах"}
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AproachForm;
