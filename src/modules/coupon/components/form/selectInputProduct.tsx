import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
type Props = {
  control: Control<CreateCoupon, any>
}
const SelectInputProduct = ({ control }: Props) => {
  return (
    <>
      <FormField
        control={control}
        name={"productId"}
        render={({ field }) => (
          <FormItem className="w-full max-sm:w-full max-sm:text-start">
            <FormLabel className="text-primary/60">{"Product"}</FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled
                value={String(field.value)}
                className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default SelectInputProduct
