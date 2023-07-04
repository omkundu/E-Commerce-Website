import Navbar from '../features/Navbar/Navbar'
import AdminProductList from '../features/admin/components/AdminProductList.js'

function AdminProductDetailPage() {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </div>
  )
}

export default AdminProductDetailPage
