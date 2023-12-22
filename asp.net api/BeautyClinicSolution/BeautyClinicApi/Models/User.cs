namespace BeautyClinicApi.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Role { get; set; }
        public byte[] ProfilePhoto { get; set; }

        public ICollection<Order> Orders { get; set; }
        public ICollection<Appointment> Appointments { get; set; }
    }
}
