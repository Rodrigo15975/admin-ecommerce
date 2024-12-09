'use client'
import { InputField } from '@/components/common/inputField/InputField'
import { Button } from '@/components/ui/button'
import ButtonAddOriginUI, {
  ButtonRemoveOriginUI,
} from '@/components/ui/button-origin-ui'
import { Form, FormField } from '@/components/ui/form'
import InputNumberUI from '@/components/ui/inputNumber'
import { Label } from '@/components/ui/label'
import { AnimatePresence, motion } from 'framer-motion'
import { ListTodoIcon } from 'lucide-react'
import { Divider } from 'primereact/divider'
import { InputTextarea } from 'primereact/inputtextarea'
import { useFieldArray, useForm } from 'react-hook-form'
import { IoCreateOutline } from 'react-icons/io5'
import { useResetStore } from '../../store/clearUpload'
import FormCheckInput from './form-check-input'
import FormSelectInputCategorie from './form-select-input-categorie'
import FormSelectInputGender from './form-select-input-gender'
import { productAnimation } from '../../animation/initialAnimation'
import { initialValues } from './initialValues'
import { inputProductInventory, productFields } from './input'
import ProductsVariants from './products-variants'
import { zodResolver } from '@hookform/resolvers/zod'
import initialValuesSchema from './schema/schema'
import axios from 'axios'
import { useMethods } from '@/adapters/methods'
import convertToFormData from '../../utils/convertedFormData'

const Create = () => {
  const formProducts = useForm<InitialValuesProduct>({
    defaultValues: initialValues,
    resolver: zodResolver(initialValuesSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control: formProducts.control,
    name: 'products',
  })

  const incrementReset = useResetStore((state) => state.incrementReset)

  const appendProduct = () => append(initialValues.products)
  const removeProduct = (index: number) => remove(index)

  const onSubmit = async (data: InitialValuesProduct) => {
    const dataForm = convertToFormData(data)
    console.log(dataForm)

    // const formData = new FormData()
    // formData.append('products', JSON.stringify(data.products))
    const response = await useMethods.POST('/products', dataForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log({ data: response })

    // formProducts.reset()
    // formProducts.setValue('products', initialValues.products)
    // formProducts.clearErrors() // Esto limpia los errores
    // incrementReset()
  }

  return (
    <article className="md:px-8 md:py-8 xl:flex-col xl:flex">
      <Form {...formProducts}>
        <form
          onSubmit={formProducts.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <section className="flex md:gap-8  max-xl:flex-col-reverse">
            <div className="flex-auto ring-1 max-md:space-y-4 max-md:ring-0 max-md:shadow-none ring-primary/10 bg-white rounded md:px-16 md:py-8 shadow-md">
              <AnimatePresence>
                {fields.map((_, productIndex) => (
                  <motion.div
                    variants={productAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={productIndex}
                  >
                    <h4 className="mb-10 max-md:my-10 flex gap-2 items-center pb-2 border-b text-3xl text-primary/90 font-medium">
                      Create Product {productIndex + 1} <ListTodoIcon />
                    </h4>
                    <div className="grid xl:grid-cols-3 xl:gap-6 xl:row-span-2 grid-cols-1 gap-6 ">
                      {productFields.products
                        .slice(0, 1)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <FormSelectInputCategorie
                                field={field}
                                label={inputFieldProduct.label}
                              />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(1, 2)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <InputField
                                label={inputFieldProduct.label}
                                field={field}
                              />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(2, 3)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <InputNumberUI
                                value={Number(field.value)}
                                min={1}
                                title={inputFieldProduct.label}
                                onValueChange={(e) => field.onChange(e.value)}
                              />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(3, 4)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <InputNumberUI
                                inputId="currency-us"
                                mode="currency"
                                currency="USD"
                                locale="en-US"
                                value={Number(field.value)}
                                title={inputFieldProduct.label}
                                onValueChange={(e) => field.onChange(e.value)}
                              />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(4, 5)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <FormSelectInputGender field={field} />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(5, 6)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <InputField
                                label={inputFieldProduct.label}
                                field={field}
                              />
                            )}
                          />
                        ))}
                      {productFields.products
                        .slice(6, 7)
                        .map((inputFieldProduct, inputIndex) => (
                          <FormField
                            key={`${inputFieldProduct.name}-${inputIndex}`}
                            control={formProducts.control}
                            name={`products.${productIndex}.${inputFieldProduct.name}`}
                            render={({ field }) => (
                              <InputNumberUI
                                value={Number(field.value)}
                                title={inputFieldProduct.label}
                                onValueChange={(e) => field.onChange(e.value)}
                                max={100}
                                min={0}
                                prefix="%"
                              />
                            )}
                          />
                        ))}
                      {inputProductInventory.slice(0, 1).map((input, index) => (
                        <FormField
                          key={`inventory-${index}`}
                          control={formProducts.control}
                          name={`products.${productIndex}.productInventory.minStock`}
                          render={({ field }) => (
                            <InputNumberUI
                              value={Number(field.value)}
                              title={`${input.label}`}
                              min={1}
                              onValueChange={(e) => field.onChange(e.value)}
                            />
                          )}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-3 mt-10 grid-rows-3 gap-2">
                      <FormCheckInput productIndex={productIndex} />
                    </div>
                    <ProductsVariants productIndex={productIndex} />
                    <Divider />
                    {productFields.products
                      .slice(7, 8)
                      .map((inputFieldProduct, inputIndex) => (
                        <FormField
                          key={`${inputFieldProduct.name}-${inputIndex}`}
                          control={formProducts.control}
                          name={`products.${productIndex}.${inputFieldProduct.name}`}
                          render={({ field }) => (
                            <div className="space-y-3">
                              <Label className="text-xl">
                                {inputFieldProduct.label}
                              </Label>
                              <InputTextarea
                                placeholder="Description of product"
                                title={inputFieldProduct.label}
                                className="ring-1 ring-primary/10 min-h-[150px] focus:ring-primary/50 shadow w-full p-3 font-medium"
                                value={String(field.value)}
                                onChange={(e) => field.onChange(e.target.value)}
                              />
                            </div>
                          )}
                        />
                      ))}

                    <Divider />
                    <div className="flex justify-end">
                      <ButtonRemoveOriginUI
                        title="Remove"
                        className="my-8"
                        disabled={
                          formProducts.getValues().products.length === 1
                        }
                        onClick={() => removeProduct(productIndex)}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex-[0_1_20rem] max-xl:flex-1 ">
              <div className="flex sticky space-x-4 top-4 w-full ">
                <Button
                  type="submit"
                  className="gap-1 rounded shadow-md w-full bg-blue-300"
                >
                  <IoCreateOutline />
                  Create
                </Button>
                <ButtonAddOriginUI
                  className="w-full rounded shadow-md "
                  type="button"
                  title="Add new"
                  onClick={appendProduct}
                />
              </div>
            </div>
          </section>
        </form>
      </Form>
    </article>
  )
}

export default Create
