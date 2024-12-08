import ButtonAddOriginUI, {
  ButtonRemoveOriginUI,
} from '@/components/ui/button-origin-ui'
import { FormDescription } from '@/components/ui/form'
import UploadFile from '@/components/upload/upload'
import { motion } from 'framer-motion'
import { Divider } from 'primereact/divider'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { initialValues } from './initialValues'
interface ProductVariantsProps {
  productIndex: number
}
const ProductsVariants = ({ productIndex }: ProductVariantsProps) => {
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
            <Divider />
            <h4 className="text-2xl  text-primary/80 font-medium">
              <FormDescription />
              Variant {variantIndex + 1}
            </h4>
            <Divider />
            <UploadFile
              onUpload={(file) => handleImageUpload(file, variantIndex)}
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
