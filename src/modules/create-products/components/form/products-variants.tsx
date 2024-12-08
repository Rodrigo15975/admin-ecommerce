'use client'
import ButtonAddOriginUI, {
  ButtonRemoveOriginUI,
} from '@/components/ui/button-origin-ui'
import { FormDescription, FormField } from '@/components/ui/form'
import UploadFile from '@/components/upload/upload'
import { motion } from 'framer-motion'
import {
  ColorPicker,
  ColorPickerHSBType,
  ColorPickerRGBType,
} from 'primereact/colorpicker'
import { Divider } from 'primereact/divider'
import { Nullable } from 'primereact/ts-helpers'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useResetStore } from '../../store/clearUpload'
import { initialValues } from './initialValues'
import { useEffect, useRef } from 'react'
interface ProductVariantsProps {
  productIndex: number
}
const ProductsVariants = ({ productIndex }: ProductVariantsProps) => {
  const resetCount = useResetStore((state) => state.resetCount)
  const changeColorRef = useRef<null | ColorPicker>(null)
  const { control, setValue } = useFormContext<typeof initialValues>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `products.${productIndex}.productVariant`,
  })
  const disabledButtonRemoved = fields.length === 1

  const appendVariant = () => append({ color: '', image: null })
  const removeVariant = (index: number) => remove(index)

  const handleImageUpload = (image: File | null, variantIndex: number) =>
    setValue(
      `products.${productIndex}.productVariant.${variantIndex}.image`,
      image
    )

  const handleColorChange = (
    value: Nullable<string | ColorPickerRGBType | ColorPickerHSBType>,
    variantIndex: number
  ) =>
    setValue(
      `products.${productIndex}.productVariant.${variantIndex}.color`,
      String(value)
    )

  useEffect(() => {
    // Limpia el color de todas las variantes cuando `resetCount` cambie
    fields.forEach((_, index) => {
      setValue(`products.${productIndex}.productVariant.${index}.color`, '')
    })
  }, [resetCount, fields, setValue, productIndex])

  return (
    <article className="xl:pr-16">
      <>
        {fields.map((_, variantIndex) => (
          <motion.div
            key={`${variantIndex}-variant`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="">
              <Divider />
              <FormDescription />
              <h4 className="text-2xl underline underline-offset-4  text-primary/80 font-medium">
                Variant {variantIndex + 1}
              </h4>
              <Divider />
              <div className="flex gap-2  items-center justify-end">
                <p className="text-primary/80 font-medium">Choose color </p>
                <FormField
                  key={`${variantIndex}`}
                  control={control}
                  name={`products.${productIndex}.productVariant.${variantIndex}.color`}
                  render={({ field }) => (
                    <ColorPicker
                      key={fields[variantIndex]?.color} // Forzar re-renderizado al cambiar el color
                      ref={changeColorRef}
                      value={field.value}
                      className="ring-1 p-1 rounded ring-primary/30"
                      onChange={({ value }) =>
                        handleColorChange(value, variantIndex)
                      }
                    />
                  )}
                />
              </div>
            </div>
            <Divider />
            <FormField
              control={control}
              name={`products.${productIndex}.productVariant.${variantIndex}.image`}
              render={({ fieldState }) => (
                <UploadFile
                  error={fieldState.error?.message}
                  onUpload={(file) => handleImageUpload(file, variantIndex)}
                />
              )}
            />

            <Divider />
            <ButtonRemoveOriginUI
              type="button"
              title="Remove"
              className={`bg-rose-500 w-[140px] ${
                disabledButtonRemoved && '!bg-primary/10'
              }`}
              disabled={disabledButtonRemoved}
              onClick={() => removeVariant(variantIndex)}
            />
          </motion.div>
        ))}
      </>
      <Divider />
      <ButtonAddOriginUI
        title="Add variant"
        className=" font-medium bg-green-400 text-white font-poppins w-[140px]"
        type="button"
        onClick={appendVariant}
      />
    </article>
  )
}

export default ProductsVariants
