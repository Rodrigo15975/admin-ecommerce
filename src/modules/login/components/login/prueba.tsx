import { useMethods } from '@/adapters/methods'
import React, { useState } from 'react'

type ProductVariant = {
  color: string
  image: File | null
}

type Product = {
  productVariant: ProductVariant[]
  price: number
  size: string[]
  gender: string
  brand: string
  description: string
  quantity: number
  is_new: boolean
  product: string
  category: string
  discount: number
}

const ProductForm = () => {
  const [productos, setProductos] = useState<Product[]>([
    {
      productVariant: [{ color: 'Red', image: null }],
      price: 10,
      size: ['S', 'M', 'L'],
      gender: 'M',
      brand: 'Adidas',
      product: 'T-Shirt',
      description: 'Comfortable sportswear',
      quantity: 10,
      is_new: true,
      category: 'Apparel',
      discount: 20,
    },
  ])

  // Agregar un nuevo producto
  const addProduct = () => {
    setProductos([
      ...productos,
      {
        productVariant: [{ color: 'Red', image: null }],
        price: 10,
        size: ['S', 'M', 'L'],
        gender: 'M',
        brand: 'Adidas',
        product: 'T-Shirt',
        description: 'Comfortable sportswear',
        quantity: 10,
        is_new: true,
        category: 'Apparel',
        discount: 20,
      },
    ])
  }

  // Agregar una nueva variante al producto
  const addVariant = (productIndex: number) => {
    const updatedProductos = [...productos]
    updatedProductos[productIndex].productVariant.push({
      color: '',
      image: null,
    })
    setProductos(updatedProductos)
  }

  // Manejar cambios en la categoría
  const handleCategoryChange = (index: number, value: string) => {
    const updatedProductos = [...productos]
    updatedProductos[index].category = value
    setProductos(updatedProductos)
  }

  // Manejar cambios en la variante del producto
  const handleColorChange = (
    productIndex: number,
    variantIndex: number,
    value: string
  ) => {
    const updatedProductos = [...productos]
    updatedProductos[productIndex].productVariant[variantIndex].color = value
    setProductos(updatedProductos)
  }

  // Manejar cambios en la imagen
  const handleImageChange = (
    productIndex: number,
    variantIndex: number,
    file: File | null
  ) => {
    const updatedProductos = [...productos]
    updatedProductos[productIndex].productVariant[variantIndex].image = file
    setProductos(updatedProductos)
  }

  // Enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    // Construir el FormData con la estructura adecuada
    productos.forEach((producto, productIndex) => {
      formData.append(`products[${productIndex}][product]`, producto.product)
      formData.append(`products[${productIndex}][category]`, producto.category)
      formData.append(
        `products[${productIndex}][price]`,
        producto.price.toString()
      )
      formData.append(
        `products[${productIndex}][size]`,
        JSON.stringify(producto.size)
      )
      formData.append(`products[${productIndex}][gender]`, producto.gender)
      formData.append(`products[${productIndex}][brand]`, producto.brand)
      formData.append(
        `products[${productIndex}][description]`,
        producto.description
      )
      formData.append(
        `products[${productIndex}][quantity]`,
        producto.quantity.toString()
      )
      formData.append(
        `products[${productIndex}][is_new]`,
        producto.is_new.toString()
      )
      formData.append(`products[${productIndex}][category]`, producto.category)
      formData.append(
        `products[${productIndex}][discount]`,
        producto.discount.toString()
      )

      // Procesar variantes
      producto.productVariant.forEach((variant, variantIndex) => {
        formData.append(
          `products[${productIndex}][productVariant][${variantIndex}][color]`,
          variant.color
        )
        if (variant.image) {
          formData.append(
            `products[${productIndex}][productVariant][${variantIndex}][image]`,
            variant.image
          )
        }
      })
    })
    console.log({ productos })

    try {
      const res = await useMethods.POST(
        'http://localhost:4000/products',
        formData
      )
      console.log(res)
    } catch (error) {
      console.error('Error al crear el producto:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {productos.map((producto, productIndex) => (
        <div key={productIndex} className="mb-8 border p-4">
          <h3>Producto {productIndex + 1}</h3>
          <label className="block mb-2">
            Nombre del Producto:
            <input
              type="text"
              value={producto.product}
              className="border p-2 rounded w-full"
              onChange={(e) => {
                const updatedProductos = [...productos]
                updatedProductos[productIndex].product = e.target.value
                setProductos(updatedProductos)
              }}
            />
          </label>

          <label className="block mb-2">
            Category:
            <input
              type="text"
              value={producto.category}
              className="border p-2 rounded w-full"
              onChange={(e) =>
                handleCategoryChange(productIndex, e.target.value)
              }
            />
          </label>

          <label className="block mb-2">
            Precio:
            <input
              type="number"
              value={producto.price}
              className="border p-2 rounded w-full"
              onChange={(e) => {
                const updatedProductos = [...productos]
                updatedProductos[productIndex].price = parseFloat(
                  e.target.value
                )
                setProductos(updatedProductos)
              }}
            />
          </label>

          <label className="block mb-2">
            Descripción:
            <textarea
              value={producto.description}
              className="border p-2 rounded w-full"
              onChange={(e) => {
                const updatedProductos = [...productos]
                updatedProductos[productIndex].description = e.target.value
                setProductos(updatedProductos)
              }}
            />
          </label>

          <div className="mb-4">
            {producto.productVariant.map((variant, variantIndex) => (
              <div key={variantIndex} className="border p-4 mb-4">
                <h4>Variante {variantIndex + 1}</h4>
                <label className="block mb-2">
                  Color:
                  <input
                    type="text"
                    value={variant.color}
                    className="border p-2 rounded w-full"
                    onChange={(e) =>
                      handleColorChange(
                        productIndex,
                        variantIndex,
                        e.target.value
                      )
                    }
                  />
                </label>
                <label className="block mb-2">
                  Imagen:
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    className="border p-2 rounded w-full"
                    onChange={(e) =>
                      handleImageChange(
                        productIndex,
                        variantIndex,
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addVariant(productIndex)}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Agregar Variante
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addProduct}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Agregar Producto
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Enviar
      </button>
    </form>
  )
}

export default ProductForm
