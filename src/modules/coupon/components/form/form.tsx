"use client"
import { storeOpenDialogForm } from "@/utils/storeOpenDialogForm"
import { formSchemaCoupon, initialValues, storeEditcoupon } from "../../index"
import { zodResolver } from "@hookform/resolvers/zod"
import Create from "./create"
import { Form as FormCreate } from "@/components/ui/form"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useForm } from "react-hook-form"

const Form = () => {
  const { setIsOpenDialogForm, isOpenDialogForm } = storeOpenDialogForm()
  const { setId } = storeEditcoupon()
  const form = useForm<CreateCoupon>({
    resolver: zodResolver(formSchemaCoupon),
    defaultValues: initialValues,
  })

  const handleClose = () => {
    setIsOpenDialogForm()
    setId(undefined)
  }

  return (
    <>
      <FormCreate {...form}>
        <div className="flex justify-between max-sm:flex-wrap gap-3">
          <Dialog open={isOpenDialogForm} onOpenChange={handleClose}>
            <DialogTrigger className="flex p-4 items-center h-10 gap-2  justify-center bg-primary shadow-lg rounded text-white flex-[0_1_15rem] max-sm:flex-1">
              Create Coupon
            </DialogTrigger>
            <Create form={form} handleDialogClose={handleClose} />
          </Dialog>
        </div>
      </FormCreate>
    </>
  )
}

export default Form
