import axios from 'axios';
const PRODUCT_API_BASE_URL="http://localhost:8080/api/Product";

class ProductServiceController{

          getAllProduct(){
                    return axios.get(PRODUCT_API_BASE_URL);
          }

          createProductService(ProductService){
                   return axios.post (PRODUCT_API_BASE_URL,ProductService)
          }
          getProductServiceId(productServiceId){
return axios.get(PRODUCT_API_BASE_URL+'/'+ productServiceId)
          }

          updateProductService(productServiceId,productservice){
return axios.put(PRODUCT_API_BASE_URL+'/'+ productServiceId,productservice);
          }

          deleteProductService(productServiceId){
return axios.delete(PRODUCT_API_BASE_URL +'/'+ productServiceId);
          }
          
}
export default new ProductServiceController()