"use client";
import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import CBaseForm from "./form";
import { CForm } from "./baseForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "../modal";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import API from "@/utils/api";
import { Button } from "@nextui-org/react";

interface ValidateProps {
  label: string;
  name: string;
  type: string;
  inputtype: string;
  required: boolean;
}
interface DynamicFormProps {
  name: string;
  url: string;
  modalType: "create" | "update";
  action_id?: string;
  children: ReactNode;
  ValidateSchema?: ValidateProps | [];
}

const CustomForm: FunctionComponent<DynamicFormProps> = ({
  name,
  url,
  action_id,
  children,
  modalType,
  ValidateSchema = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  async function post() {
    try {
      const response = await API({
        url: action_id ? `${name.toLowerCase()}/${action_id}` : url,
        method: "GET",
      });
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message || "An error occurred");
    }
  }
  const mutation = useMutation({ mutationFn: post });
  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    // Call mutation when action_id is provided
    if (action_id && isOpen) {
      mutation.mutate();
    }
  }, [action_id, isOpen]);
  return (
    <>
      <Button size="sm" onPress={() => setIsOpen(true)}>
        {modalType === "create" ? "Шинэ" : "Засах"}
      </Button>
      <Modal
        title={name}
        isOpen={isOpen}
        onClose={closeModal}
        content={
          <>
            <CForm
              url={url}
              name={name}
              validate_schema={ValidateSchema}
              method={modalType === "create" ? "POST" : "PUT"}>
              {children}
            </CForm>
          </>
        }
      />
    </>
  );
};

export default CustomForm;
