'use client'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Code2Icon } from 'lucide-react'
import { Button as ButtonPrime } from 'primereact/button'
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from 'primereact/inputnumber'
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton'
import { Nullable } from 'primereact/ts-helpers'
import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { AiOutlineLoading } from 'react-icons/ai'
import { storeEditcoupon } from '../../store/storeEditCoupon'
import { generateCouponCode } from '../../utils/generateCodeCoupon'
import { formInputCoupon } from '../../utils/inputFormCoupon'
import SelectInputProduct from './selectInputProduct'
import { useCreateCoupon } from '../../services/mutation'
import { convertedDateISO } from '@/utils/formatDateIso8601'
type Props = {
  handleDialogClose: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<CreateCoupon, any, undefined>
}

const Create = ({ form, handleDialogClose }: Props) => {
  const { mutate: mutateCreating, isPending: isPendingCreated } =
    useCreateCoupon()
  const options: string[] = ['Yes', 'No']
  const [couponISGlobal, setCouponGlobal] = useState<boolean>(false)
  const { id } = storeEditcoupon()
  const [discount, setDiscount] = useState<Nullable<number>>(0)
  const onSubmit = (data: CreateCoupon) => {
    const { espiryDate, isGlobal } = data
    const dateIso = convertedDateISO(espiryDate)
    if (isGlobal) data.product = ''

    mutateCreating(
      { ...data, discount: Number(discount), espiryDate: dateIso },
      {
        onSuccess: () => {
          handleDialogClose()
          form.reset()
          setCouponGlobal(false)
          setDiscount(0)
        },
      }
    )
  }
  const isLoading = isPendingCreated

  const generateCode = () => {
    const code = generateCouponCode()
    form.setValue('code', code)
  }

  return (
    <>
      <DialogContent className=" max-w-screen-sm min-h-[40vh] max-h-[90vh] overflow-y-auto p-8">
        <div className=" max-h-[40vh] ">
          <DialogHeader>
            <DialogTitle className="md:text-4xl  text-2xl text-primary/90">
              {id ? 'Updated Categorie ' : 'New Coupon'}
            </DialogTitle>
            <DialogDescription className="">
              {id
                ? 'Updated give it permission'
                : 'Create a new Coupon  give it permission'}
            </DialogDescription>
          </DialogHeader>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between space-y-4 min-h-[20rem]"
        >
          {!couponISGlobal && <SelectInputProduct control={form.control} />}
          <div className="flex gap-2 items-end">
            {formInputCoupon.slice(0, 1).map((input, index) => (
              <FormField
                key={index}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem className="w-full max-sm:w-full max-sm:text-start">
                    <FormLabel className="text-primary/60">
                      {input.text}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={input.type}
                        disabled
                        value={String(field.value)}
                        className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <ButtonPrime
              tooltip="Generate Coupon Code"
              type="button"
              color="secondary"
              onClick={generateCode}
              severity="secondary"
              icon={<Code2Icon />}
              className="flex-[0_1_5rem] h-10 border bg-secondary"
            />
          </div>
          {formInputCoupon.slice(1, 2).map((input, index) => (
            <div key={index} className="flex-col flex gap-2 items-start">
              <FormLabel className="text-primary/60">{input.text}</FormLabel>

              <InputNumber
                inputId="minmax-buttons"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                value={discount}
                type={input.type}
                onValueChange={(e: InputNumberValueChangeEvent) =>
                  setDiscount(e.value)
                }
                prefix="%"
                mode="decimal"
                min={0}
                max={100}
              />
            </div>
          ))}
          {formInputCoupon.slice(2, 3).map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full max-sm:w-full max-sm:text-start">
                  <FormLabel className="text-primary/60">
                    {input.text}
                  </FormLabel>
                  <FormControl>
                    <SelectButton
                      {...field}
                      value={couponISGlobal ? 'Yes' : 'No'}
                      onChange={(e: SelectButtonChangeEvent) => {
                        const selectedValue = e.value === 'Yes'
                        setCouponGlobal(selectedValue)
                        field.onChange(selectedValue)
                      }}
                      pt={{
                        button: {
                          className: 'w-full border space-y-4 bg-primary/10',
                        },
                      }}
                      options={options}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {formInputCoupon.slice(4, 5).map((input, index) => (
            <FormField
              key={index}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem className="w-full max-sm:w-full max-sm:text-start">
                  <FormLabel className="text-primary/60">
                    {input.text}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={input.type}
                      value={String(field.value)} // Asegura que el valor es un string
                      className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <DialogFooter>
            <Button
              loadingIcon={<AiOutlineLoading className="animate-spin" />}
              disabled={isLoading}
              loading={isLoading}
              type="submit"
              variant={'default'}
            >
              {id ? ' Update Coupon ' : 'Create Coupon'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  )
}

export default Create
