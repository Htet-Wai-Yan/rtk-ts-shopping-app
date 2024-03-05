import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  name: String;
  kg: number;
  price: number;
  date: Date;
  jewellaryType: String;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message: String;
}

const FormInput = () => {
  const { register, control, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  // Input component
  // const Input = ({ message, ...rest }: InputProps) => {
  //   return (
  //     <>
  //       <label className="label label-text mb-1">{rest.name}</label>
  //       <input
  //         type={rest.type}
  //         placeholder="Type here"
  //         className="input w-full max-w-xs"
  //         {...register(
  //           { name },
  //           {
  //             required: {
  //               value: true,
  //               message: { message },
  //             },
  //           }
  //         )}
  //       />
  //       <span className="label label-text-alt text-red-500">
  //         {errors.name?.message}
  //       </span>
  //     </>
  //   );
  // };

  return (
    <div className="card card-compact bg-neutral shadow-sm">
      <div className="card-body">
        <h3 className="text-lg font-medium mb-4">Add Vouchers</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label label-text mb-1">ပစ္စည်းအမျိုးအမည်</label>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "* အမျိုးအမည်ထည့်ပါ",
              },
            })}
          />
          <span className="label label-text-alt text-red-500">
            {errors.name?.message}
          </span>

          <label className="label label-text">ကျပ်သား</label>
          <input
            type="number"
            placeholder="Type here"
            className="input w-full max-w-xs mb-4"
            {...register("kg")}
          />

          <label className="label label-text">ကာလ ပေါက်ဈေး</label>
          <input
            type="number"
            placeholder="Type here"
            className="input w-full max-w-xs mb-4"
            {...register("price")}
          />

          <label className="label label-text">ဝယ်သည့် ရက်စွဲ</label>
          <input
            type="date"
            placeholder="Select date"
            className="input w-full max-w-xs mb-4"
            {...register("date")}
          />

          <label className="label label-text">အမျိုးအစား</label>
          <div className="flex gap-8 items-center mb-4">
            <div className="flex items-center gap-1">
              <input
                id="gold"
                type="radio"
                className="radio radio-primary"
                value={"Gold"}
                defaultChecked={true}
                {...register("jewellaryType")}
              />
              <label className="label label-text">ရွှေ</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                id="diamond"
                type="radio"
                className="radio radio-primary"
                value={"Diamond"}
                {...register("jewellaryType")}
              />
              <label className="label label-text">စိန်</label>
            </div>
          </div>

          <label className="label label-text">Voucher ဓာတ်ပုံထည့်ရန်</label>
          <input type="file" className="file-input w-full max-w-xs" />

          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary min-w-24 mt-8">
              Add
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default FormInput;
