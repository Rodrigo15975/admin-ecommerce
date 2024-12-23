import {
  convertedDayRest,
  convertedYearMonthDay,
} from '@/utils/formatDateIso8601'
import { Badge, Button } from '@nextui-org/react'
import { ColumnProps } from 'primereact/column'
import { Tag } from 'primereact/tag'
import { useDeleteCoupon } from '../../services/mutation'
import ButtonDelete from '@/components/ui/button-delete'
import { storeEditcoupon } from '../../store'
import { Button as ButtonPrime } from 'primereact/button'
import { Edit2 } from 'lucide-react'
import { storeOpenDialogForm } from '@/utils/storeOpenDialogForm'

const ColumnsCouponPanel = () => {
  const { mutate: deleteCoupon, isPending: isPendingCoupon } = useDeleteCoupon()
  const { setId } = storeEditcoupon()
  const { setIsOpenDialogForm } = storeOpenDialogForm()
  const dateExpiration = (data: FindAllCoupons) => {
    const dayRest = convertedDayRest(data.espiryDate)
    const isExpired = dayRest === 'Expired' && 'bg-yellow-300'
    return (
      <>
        <Badge color="secondary" className="flex items-center">
          <div>{dayRest}</div>
          <div
            className={`${isExpired} text-xs flex items-center mx-2 ring-1 ring-primary px-2 rounded-full`}
          >
            {convertedYearMonthDay(data.espiryDate)}
          </div>
        </Badge>
      </>
    )
  }

  const buttonActions = (data: FindAllCoupons) => {
    const openFormEdit = () => {
      setId(data.id)
      setIsOpenDialogForm()
    }

    return (
      <>
        <ButtonDelete
          onClick={deleteCoupon}
          id={data.id}
          isPending={isPendingCoupon}
        />
        <ButtonPrime
          tooltip="Edit"
          disabled={isPendingCoupon}
          tooltipOptions={{
            position: 'top',
          }}
          onClick={openFormEdit}
          className="rounded-full ml-2 font-poppins p-2 border shadow"
        >
          <Edit2 className="text-green-400" />
        </ButtonPrime>
      </>
    )
  }

  const columns: ColumnProps[] = [
    {
      field: 'products.product',
      header: 'Product',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          <div>
            {data.products ? (
              <span className="font-bold">{data.products.product}</span>
            ) : (
              'There is no product'
            )}
          </div>
        </>
      ),
    },

    {
      field: 'code',
      header: 'Code',
      sortable: true,
    },

    {
      field: 'discount',
      header: 'Discount',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          <div>%{`${data.discount}.00`}</div>
        </>
      ),
    },

    {
      field: 'espiryDate',
      header: 'Date initial',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <Badge color="secondary">
          <span>{convertedYearMonthDay(data.createdAt ?? '')}</span>
        </Badge>
      ),
    },
    {
      header: 'Date to expire',
      sortable: true,
      body: (data: FindAllCoupons) => dateExpiration(data),
    },

    {
      field: 'isGlobal',
      header: 'Coupon Global',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          {data.isGlobal ? (
            <Button variant="flat" color="success">
              Yes
            </Button>
          ) : (
            <Button variant="flat" color="danger">
              No
            </Button>
          )}
        </>
      ),
    },

    {
      field: 'isNew',
      header: 'Coupon New',
      sortable: true,
      body: (data: FindAllCoupons) => (
        <>
          {data.isNew ? (
            <Tag severity="success" security="shadow" value="Yes"></Tag>
          ) : (
            <Tag severity="danger" security="shadow" value="Expired"></Tag>
          )}
        </>
      ),
    },

    {
      header: 'Actions',
      body: (data: FindAllCoupons) => buttonActions(data),
    },
  ]
  return {
    columns,
  }
}

export default ColumnsCouponPanel
