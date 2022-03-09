import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../App'
import './styles.css'

const SubCategoryDelete = () => {

  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    getSubCategories()
  }, [])

  const getSubCategories = () => {
    axios.get(`${SERVER_URL}/subcategories`)
      .then(res => setSubCategories(res.data))
      .catch(err => console.error(err))
  }
  const findProducts = async (subcategoryID) => {
    const products = (await axios.get(`${SERVER_URL}/products?subcategory=${subcategoryID}`)).data
    return products
  }

  const removeProduct = async (productID) => {
    const remove = await (await axios.delete(`${SERVER_URL}/products/${productID}`)).data
    console.log(remove)
    return remove
  }

  const removeSubCat = async (subcategoryID) => {
    const remove = await (await axios.delete(`${SERVER_URL}/subcategory/${subcategoryID}`)).data
    console.log(remove)
    return remove
  }

  const remove = async (subcategoryID) => {
    const products = await findProducts(subcategoryID)
    await products.forEach(product => {
      removeProduct(product._id)
    });
    await removeSubCat(subcategoryID)
  }


  const Item = ({ _id, name }) => {
    const [isDeleted, setIsDeleted] = useState(false)
    return (
      <div className='container'>
        <div className='name'>{name}</div>
        <div className='delete' onClick={async () => {
          await remove(_id)
          setIsDeleted(true)
        }}>Delete</div>
        <div className='status' style={{ backgroundColor: isDeleted ? 'green' : 'red' }}></div>
      </div>
    )
  }

  return (
    <div>
      <div className='heading'>
        SubCategory
      </div>
      <div>{subCategories.map(subCat => <Item key={subCat._id} _id={subCat._id} name={subCat.Sub_Category_name} />)}
      </div>
    </div>
  )
}

export default SubCategoryDelete