import { Form } from "@/components/form";
import FormContent from "@/components/form/formContent";
import FormInput from "@/components/input/formInput";
import DynamicRadioGroup from "@/components/input/RadioGroup";
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
          <div className="flex gap-2 w-full h-full justify-between items-end">
            <div className="w-3/5 h-full justify-between flex flex-col gap-4">
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
              <Card>
                <Title size="md">Авах</Title>
                <div className="flex gap-1 items-start justify-between  ">
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
              </Card>
            </div>
            <div className="w-2/5 h-full justify-between flex flex-col gap-4">
              {" "}
              <Card>
                <Title size="md">Ачаа</Title>
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
              </Card>
              <Card>
                <Title size="md">Авах</Title>
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
              </Card>
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
          <Divider />
          <div className="flex items-center justify-end">
            <Button type="submit" className="my-4">
              {modalType === "create" ? "Үүсгэх" : "Засах"}
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AproachForm;
