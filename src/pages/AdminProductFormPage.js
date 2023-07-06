import Navbar from '../features/Navbar/Navbar'
import ProductForm from '../features/admin/Product'
import AdminProductList from '../features/admin/components/AdminProductList.js'

function AdminProductFormPage() {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </div>
  )
}

export default AdminProductFormPage
