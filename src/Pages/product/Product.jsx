import React   from 'react'
import { Link , useParams } from "react-router-dom";
import { productDatas } from "../../datas";
import { products } from '../../datas';
import Chart from '../../Components/chart/Chart';
import PublishIcon from '@mui/icons-material/Publish';
import './Product.css'

export default function Product() {
    let params = useParams()
    let mainProductData = products.find(product => product.id ==  params.ProductID )

  return (
    <div className='product'>

        <div className="productTitleContainer">
            <h2 className='productTitle'>محصولات</h2>

            <Link to='/newProduct'>
            <button className='productBtn'>ایجاد کردن</button>
            </Link>

        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart title='فروش ماهانه' data={productDatas} dataKey='Sale' />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={`/${mainProductData.img}`} alt="laptop" className='productInfoImg' />
                    <span className='productName'> {mainProductData.title} </span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">شماره محصول :</div>
                        <div className="productInfoValue">{mainProductData.id}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">محصول :</div>
                        <div className="productInfoValue">{mainProductData.title}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">موجودی :</div>
                        <div className="productInfoValue">{mainProductData.count}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey"> قیمت :</div>
                        <div className="productInfoValue">{mainProductData.price}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">رضایت مشتری : </div>
                        <div className="productInfoValue">5.0</div>
                    </div>
                </div>
            </div>

        </div>

        <div className="productBottom">
            <form className='productForm'>
                <div className="productFormLeft">
                    <label>
                        نام محصول
                    </label>
                    <input type="text" placeholder={mainProductData.title}/>

                    <label>موجودی</label>
                    <select className='inStock'>
                        <option value="Yes">موجود</option>
                        <option value="No">نا موجود</option>
                    </select>

                    <label>رضایت</label>
                    <select className='inStock'>
                        <option value="Yes">بالا</option>
                        <option value="No">پایین</option>
                    </select>
                </div>

                <div className="productFormRight">
                    <div className="productUploader">
                        <img src={`/${mainProductData.img}`} alt="product" className='productUploaderImg' />
                        <label>
                            <PublishIcon />
                        </label>
                        <input type="file" className='productUploaderBtn' />
                    </div>
                        <button className='productUploaderEdit'>ذخیره</button>
                </div>
            </form>
        </div>
    </div>
  )
}
