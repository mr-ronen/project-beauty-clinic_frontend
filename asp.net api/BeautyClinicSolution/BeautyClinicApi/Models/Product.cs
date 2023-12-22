namespace BeautyClinicApi.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public int CategoryID { get; set; }
        public decimal DiscountPrice { get; set; }

        public ICollection<Category> Categories { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
