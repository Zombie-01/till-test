import { useTranslations } from "next-intl";
import { Flex, TableColumnsType } from "antd";
import { useWindowSize } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { Datatable } from "@/components";

/**
 * Customers datatable
 */
export const CustomersTable = ({
	onEdit,
}: {
	onEdit: (listItem: any) => void;
}) => {
	// Window size
	const size = useWindowSize();

	// Translation
	const t = useTranslations("common");
	const tc = useTranslations("customer");

	// Columns
	const columns: TableColumnsType<DataType> = [
		{
			title: t("seq_no"),
			width: 70,
			dataIndex: "seq_no",
			key: "seq_no",
			render: (text) => <Flex justify="center">{text}</Flex>,
			sorter: (a, b) => a.seq_no - b.seq_no,
			fixed: size.width < 768 ? false : "left",
		},
		{
			title: t("operator"),
			width: 150,
			dataIndex: "operator",
			key: "operator",
			render: (text) => <a>{text}</a>,
			sorter: (a, b) => a.operator.localeCompare(b.operator),
			fixed: size.width < 768 ? false : "left",
		},
		{
			title: tc("customer_phone"),
			width: 200,
			dataIndex: "customer_no",
			key: "customer_no",
		},
		{
			title: t("name"),
			width: 150,
			dataIndex: "name",
			key: "name",
		},
		{
			title: tc("rd"),
			dataIndex: "rd",
			key: "rd",
			width: 150,
		},
		{
			title: "Нас",
			dataIndex: "age",
			key: "age",
			width: 80,
		},
		{
			title: "Хүйс",
			dataIndex: "gender",
			key: "gender",
			width: 80,
		},
		{
			title: "Утасны дугаар",
			dataIndex: "phone",
			key: "phone",
			width: 150,
		},
		{
			title: "Төлөлт хийсэн",
			dataIndex: "paid",
			key: "paid",
			width: 150,
		},
		{
			title: "И-мэйл",
			dataIndex: "email",
			key: "email",
			width: 200,
		},
		{
			title: "Цэвэр орлого",
			dataIndex: "income",
			key: "income",
			width: 150,
		},
		{
			title: "Сарын зардал",
			dataIndex: "cost",
			key: "cost",
			width: 150,
		},
	];

	// Columns
	const columns1: TableColumnsType<DataType1> = [
		{
			title: t("seq_no"),
			width: 70,
			dataIndex: "seq_no",
			key: "seq_no",
			render: (text) => <Flex justify="center">{text}</Flex>,
			sorter: (a, b) => a.seq_no - b.seq_no,
			fixed: size.width < 768 ? false : "left",
		},
		{
			title: t("operator"),
			width: 150,
			dataIndex: "operator",
			key: "operator",
			render: (text) => <a>{text}</a>,
			sorter: (a, b) => a.operator.localeCompare(b.operator),
			fixed: size.width < 768 ? false : "left",
		},
		{
			title: "Холбогдсон огноо",
			width: 200,
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Хүлээн авагч",
			width: 150,
			dataIndex: "reciever",
			key: "reciever",
		},
		{
			title: "Хариу үйлдэл",
			dataIndex: "response",
			key: "response",
			width: 150,
		},
		{
			title: "Нөхцөл байдал",
			dataIndex: "situation",
			key: "situation",
			width: 150,
		},
		{
			title: "Тайлбар",
			dataIndex: "note",
			key: "note",
			width: 80,
		},
		{
			title: "Тохирсон огноо",
			dataIndex: "cdate",
			key: "cdate",
			width: 150,
		},
		{
			title: "Эргэн төлөгдөх хэмжээ",
			dataIndex: "paid",
			key: "paid",
			width: 250,
		},
	];

	// const queryClient = useQueryClient()
	// const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ["repoData"],
		queryFn: async () => {
			const response = await fetch(`/api/v1/customer/list?page=0&size=50`, {
				method: "POST",
			});
			return await response.json();
		},
	});

	if (isPending) return "Loading...";

	if (error) return "An error has occurred: " + error.message;

	// Render
	return (
		<Datatable
			columns={columns}
			dataSource={data.data.content}
			onEdit={(record: any) => onEdit(record)}
			expandable={{
				expandedRowRender: (/*record*/) => (
					<Datatable
						columns={columns1}
						dataSource={[]}
						hideDeleteButton
						hideEditButton
					/>
				),
			}}
		/>
	);
};

interface DataType {
	key: React.Key;
	seq_no: number;
	operator: string;
	age: number;
	customer_no: string;
	name: string;
	rd: string;
	gender?: string;
	phone?: string;
	paid?: string;
	email?: string;
	income?: string;
	cost?: string;
}

interface DataType1 {
	key: React.Key;
	seq_no: number;
	operator: string;
	date: string;
	reciever: string;
	response: string;
	sitation: string;
	note: string;
	cdate: string;
	paid: string;
}
