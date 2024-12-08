import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import UploadFile from '@/components/upload/upload'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from 'primereact/button'

import {
  Control,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'

const initialValues = {
  products: [
    {
      product: '',
      productVariant: [
        {
          color: '',
          img: null,
        },
      ],
      price: 0,
      size: [''],
      gender: '',
      brand: '',
      description: '',
      quantity: 0,
      is_new: true,
      category: '',
      discount: 0,
      productInventory: {
        minStock: 0,
        stock: true,
      },
    },
  ],
}
const items = [
  { id: 'recents', label: 'XS' },
  { id: 'home', label: 'S' },
  { id: 'applications', label: 'M' },
  { id: 'desktop', label: 'L' },
  { id: 'downloads', label: 'XL' },
] as const

interface ProductVariantsProps {
  control: Control<typeof initialValues>
  productIndex: number
}

const ProductVariants = ({ control, productIndex }: ProductVariantsProps) => {
  const { setValue } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: `products.${productIndex}.productVariant`,
    control,
  })
  const selectFile = (e: File[], variantIndex: number) => {
    const file = e[0] // Asume que seleccionas un archivo

    if (file) {
      setValue(
        `products.${productIndex}.productVariant.${variantIndex}.img`,
        file
      )
    }
  }

  return (
    <>
      <div>
        <AnimatePresence>
          {fields.map((_, variantIndex) => (
            <motion.div
              key={variantIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border my-6 p-4"
            >
              <h4>Variant {variantIndex + 1}</h4>
              <label className="block my-4">
                Color:
                <Input
                  {...control.register(
                    `products.${productIndex}.productVariant.${variantIndex}.color`
                  )}
                  type="text"
                  className="border p-2 rounded w-full"
                />
              </label>
              <label className="block mb-2">
                Imagen:
                <UploadFile
                  onSelect={(e) => selectFile(e, variantIndex)}
                  name={`products.${productIndex}.productVariant.${variantIndex}.img`}
                />
              </label>
              <Button
                className="bg-red-500 text-white p-2 rounded"
                type="button"
                disabled={fields.length === 1}
                onClick={() => remove(variantIndex)}
                label="Remove Variant"
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <Button
          className="w-60 bg-stone-600/80 font-medium hover:bg-stone-900 text-white font-poppins ring-1 shadow ring-primary/10 p-2"
          type="button"
          onClick={() => append({ color: '', img: null })}
        >
          Add variant
        </Button>
      </div>
    </>
  )
}

const Prueba2 = () => {
  const form = useForm<typeof initialValues>({
    defaultValues: initialValues,
  })

  const {
    fields: productFields,
    append: appendProduct,
    remove: removeProduct,
  } = useFieldArray({
    name: 'products',
    control: form.control,
  })

  const onSubmit = (data: typeof initialValues) => {
    console.log(data.products)
  }

  return (
    <div className="min-h-screen p-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AnimatePresence>
            {productFields.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <h2>Product {index + 1}</h2>
                <Input
                  {...form.register(`products.${index}.product`)}
                  type="text"
                  placeholder="Product Name"
                />

                <ProductVariants control={form.control} productIndex={index} />
                <div className="flex gap-4">
                  {items.map((items, idx) => (
                    <div
                      key={idx}
                      className="space-x-3 flex border items-center"
                    >
                      <div className="flex-[0_1_3rem]">
                        <Label htmlFor="">{items.label}</Label>
                      </div>
                      <Checkbox
                        className="border-blue-200 hover:border-blue-400 my-2 w-6 h-6 checked:!bg-blue-500"
                        onCheckedChange={(checked) => {
                          console.log(checked)
                        }}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  disabled={productFields.length === 1}
                  onClick={() => removeProduct(index)}
                  label="Remove Product"
                  className={cn(
                    'bg-red-300 font-poppins p-2 w-28 rounded-md shadow'
                  )}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          <Button
            onClick={() =>
              appendProduct({
                product: '',
                productVariant: [{ color: '', img: null }],
                price: 0,
                size: [''],
                gender: '',
                brand: '',
                description: '',
                quantity: 0,
                is_new: true,
                category: '',
                discount: 0,
                productInventory: { minStock: 0, stock: true },
              })
            }
            type="button"
            label="Add Product"
            className={cn(
              'bg-blue-300 font-poppins p-2 w-28 rounded-md shadow'
            )}
          />
          <Button
            label="Submit"
            type="submit"
            severity="success"
            className={cn(
              'bg-green-300 font-poppins p-2 w-28 rounded-md shadow'
            )}
          />
        </form>
      </Form>
    </div>
  )
}

export default Prueba2
