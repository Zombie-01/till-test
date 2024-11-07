"use client";

import { Card } from "@/components/card";
import Filter from "@/components/layout/filter";
import { Table } from "@/components/table";
import { Tabs } from "@/components/tabs";
import { AproachForm } from "@/sections/home/approach";
import { ByComingForm } from "@/sections/home/byComing";
import { useQuery } from "@tanstack/react-query";

let headers = [
  { key: "support_date", name: "Дэмжигдэгч огноо" },
  { key: "input_type", name: "Оруулах хэлбэр" },
  { key: "arrival_type", name: "Ирэх хэлбэр" },
  { key: "direction_number", name: "Чиглэлт дугаар" },
  { key: "transfer_date", name: "Дансаар дамжигдсан огноо" },
  { key: "owner_name", name: "Эзэмшигчийн нэр" },
  { key: "receiver_address", name: "Хүлээн авагчийн хаяг" },
  { key: "is_empty", name: "Хоосон / дэвсгэр эсэх" },
  { key: "is_owner_empty", name: "Эзэмшигчийн дэвсгэр эсэх" },
  { key: "order_creation_date", name: "Захиалга үүссэн огноо" },
  { key: "customer_name", name: "Захиалагчийн нэр" },
  { key: "address", name: "Байрлах хаяг" },
  { key: "payment_due_date", name: "Төлбөрийн хугацаа" },
  { key: "is_cash_payment", name: "Төлбөрийн задгай мөнгө эсэх" },
  { key: "payment_difference", name: "Төлбөрийн зөрүү" },
  { key: "announced_date", name: "Зарлагдсан огноо" },
  { key: "supervisor", name: "Супервайзер" },
  { key: "payment_amount", name: "Төлбөрийн дүн" },
  { key: "payment_period", name: "Төлбөрийн хугацаа" },
  { key: "record_arrival_date", name: "Бүртгэх ирэх огноо" },
  { key: "work_started_date", name: "Ажил эхэлсэн огноо" },
  { key: "notified_time", name: "Захиалагчид үйлчлүүлэгчид хэлсэн цаг" },
  {
    key: "handover_date_client",
    name: "Захиалагчид ажил хүлээлгэн өгсөн огноо",
  },
  {
    key: "handover_date_supervisor",
    name: "Супервайзерт ажил хүлээлгэн өгсөн огноо",
  },
  { key: "client_contact_date", name: "Захиалагчтай холбоо барьсан огноо" },
  { key: "client_feedback", name: "Захиалагчийн ирсэн хариу" },
  { key: "record_feedback", name: "Бүртгэх ирсэн хариу" },
  { key: "initial_handover_date", name: "Анхны хүлээлгэн өгсөн огноо" },
];

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/test");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Home() {
  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ["test"],
  //     queryFn: getData,
  //   });

  console.log("called home");

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <Tabs
        tabs={[
          {
            label: "Ачаа дөхөлт",
            content: (
              <>
                <div className="flex flex-row-reverse w-full justify-between items-center">
                  <div className="flex flex-row gap-4 items-center w-min">
                    <AproachForm modalType="create" />
                    <AproachForm modalType="update" />
                    <Button size="sm">Хасах</Button>
                  </div>
                  <Filter />
                </div>

                <Table headers={headers} data={[]} />
              </>
            ),
          },
          { label: "Үлдэгдэл", content: <></> },
          {
            label: "Талбайд ирснээр",
            content: (
              <>
                <div className="flex flex-row-reverse w-full justify-between items-center">
                  <div className="flex flex-row gap-4 items-center w-min">
                    <ByComingForm modalType="create" />
                    <ByComingForm modalType="update" />
                    <Button size="sm">Хасах</Button>
                  </div>
                  <Filter />
                </div>
                <Table headers={headers} data={[]} />
              </>
            ),
          },
          { label: "Замын үүд", content: <></> },
          { label: "Сүхбаатар", content: <></> },
        ]}
      />
    </div>
  );
}
