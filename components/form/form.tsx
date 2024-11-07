"use client";
import React, {
  FormHTMLAttributes,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useValidate } from "@/utils/useValidate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "@/utils/api";
import { toast } from "react-toastify";
import { useValidateContext } from "@/context/ValidateProvider";
import ObjectUtil from "@/utils/ObjectUtil";

interface ICBaseForm extends FormHTMLAttributes<HTMLFormElement> {
  validate_schema: any;
  url: string;
  name: string;
  method: string;
}

const CBaseForm: FunctionComponent<ICBaseForm> = ({
  children,
  validate_schema,
  url,
  name,
  method,
  ...props
}) => {
  const queryClient = useQueryClient();
  const { checkValidate } = useValidate();
  const { setError } = useValidateContext();
  const [load, setLaod] = useState(false);
  const post = async (formData: FormData) => {
    setLaod(true);
    const response = await API({ url, body: formData, method })
      .catch((e: any) => toast.error(`${JSON.stringify(e)}`))
      .finally(() => {
        setLaod(false);
      });
    return response;
  };

  const mutation = useMutation({
    mutationFn: post,
    onSuccess: () => {
      if (typeof name === "string") {
        queryClient.invalidateQueries({ queryKey: [name] }); // this is for invalidation of query.
      }
    },
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("asd");
    if (event.target instanceof HTMLFormElement) {
      const formData = new FormData(event.target);

      const fileInput = event.target.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      if (fileInput?.files && fileInput?.files[0]) {
        formData.append("file", fileInput.files[0]);
      }

      const data = ObjectUtil.formDataToJson(formData);
      console.log(data);
      let errors = checkValidate({
        data: data,
        validateSchema: validate_schema,
      });

      if (Object.keys(errors).length > 0) {
        await setError(errors);
        const inputs = event.target.getElementsByClassName("ERROR");
        const my_element = inputs[0] as HTMLInputElement;
        if (inputs.length > 0 && typeof my_element.focus === "function") {
          my_element.focus();
        }
        return;
      } else {
        setError({});
      }

      mutation.mutate(formData);
    }
  };

  return (
    <>
      {" "}
      {load && (
        <div
          className={
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          }>
          loading...
        </div>
      )}
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
        {children}
      </form>
    </>
  );
};

export default CBaseForm;
