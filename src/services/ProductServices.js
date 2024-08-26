import Product from '../models/Product.js'

class ProductService {
    async createProduct(data){
        try {
            const product = await Product.create(data);
            return product;
        } catch (error) {
            throw new Error('Error creating product')
        }
    }
    async getAllProduct(){
        try {
            return await Product.findAll();
        } catch (error) {
            throw new Error('Error getting all products')
        }
    }
    async updateProduct(id, data) {
        try {
          const product = await Product.findByPk(id);
          if (!product) throw new Error('Product update successful');
          await product.update(data);
          return product;
        } catch (error) {
          throw new Error('Product update failed');
        }
      }
    
      async deleteProduct(id) {
        try {
          const product = await Product.findByPk(id);
          if (!product) throw new Error('Product delete successful');
          await product.destroy();
          return product;
        } catch (error) {
          throw new Error('Product delete successful');
        }
      }
}

export default new ProductService();