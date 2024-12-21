import Table from '@/components/Table/Table'
import { CiViewList } from 'react-icons/ci'
import ColumnsCouponPanel from './panel-coupon-columns'
const PanelCouponTable = () => {
  // const { data, isLoading } = useGetAllCoupons()
  const { columns } = ColumnsCouponPanel()
  return (
    <>
      <Table
        columnsConfig={columns}
        data={[]}
        className="font-poppins w-full "
        headerClassName="bg-primary !text-slate-50 font-normal"
        loading={false}
        row={20}
        header={
          <h1 className="font-light ring-1 ring-primary/15 flex items-center gap-2 bg-white p-4 rounded text-primary/80">
            List of categories <CiViewList />
          </h1>
        }
        globalFilter=""
      />
    </>
  )
}

export default PanelCouponTable
