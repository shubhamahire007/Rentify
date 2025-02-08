const sampleListings = [
  {
    title: "Cozy Room in Pune",
    description:
      "A comfortable room with all essential amenities. Ideal for students and working professionals.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Pune",
    propertyType: "Room",
    country: "India",
  },
  {
    title: "Fully Furnished Flat in Mumbai",
    description:
      "Modern 2BHK flat with stunning city views. Suitable for families or shared living.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 20000,
    location: "Mumbai",
    propertyType: "Flat",
    country: "India",
  },
  {
    title: "Affordable PG in Nashik",
    description:
      "Clean and budget-friendly PG accommodation. Perfect for students and single professionals.",

    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 5000,
    location: "Nashik",
    propertyType: "PG",
    country: "India",
  },
  {
    title: "Luxury Villa in Alibaug",
    description:
      "A spacious villa with a private pool and garden. Ideal for family vacations or group stays.",

    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 25000,
    location: "Alibaug",
    propertyType: "Villa",
    country: "India",
  },
  {
    title: "Shared PG in Lonavala",
    description:
      "Comfortable shared accommodation with all facilities. Perfect for weekend stays or work retreats.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 4000,
    location: "Lonavala",
    propertyType: "PG",
    country: "India",
  },

  {
    title: "Modern Room in Kolhapur",
    description:
      "Well-furnished single room in a prime location. Ideal for working professionals.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 3500,
    location: "Kolhapur",
    propertyType: "Room",
    country: "India",
  },
  {
    title: "Studio Apartment in Mahabaleshwar",
    description:
      "Compact and stylish studio apartment for a serene getaway in the hills.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 6000,
    location: "Mahabaleshwar",
    propertyType: "Flat",
    country: "India",
  },
  {
    title: "Premium Villa in Pune",
    description:
      "Elegant villa with a lush garden and modern interiors. Perfect for family stays or private events.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 20000,
    location: "Pune",
    propertyType: "Villa",
    country: "India",
  },
  {
    title: "Economical PG in Nagpur",
    description:
      "Affordable PG accommodation in a well-connected area. Ideal for students and professionals.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1684175656154-ac52b3cc2c60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 4500,
    location: "Nagpur",
    propertyType: "PG",
    country: "India",
  },
  {
    title: "Luxury 3BHK Flat in Thane",
    description:
      "Spacious 3BHK flat with premium furnishings and amenities. Perfect for families.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 30000,
    location: "Thane",
    propertyType: "Flat",
    country: "India",
  },
  {
    title: "Studio Flat in Aurangabad",
    description:
      "Modern studio flat in a prime location, perfect for singles or couples.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 7500,
    location: "Aurangabad",
    propertyType: "Flat",
    country: "India",
  },
  {
    title: "Private Room in Shirdi",
    description:
      "A peaceful private room near the temple, ideal for pilgrims and tourists.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2000,
    location: "Shirdi",
    propertyType: "Room",
    country: "India",
  },
  {
    title: "Heritage Villa in Ratnagiri",
    description:
      "A spacious heritage villa with sea views and vintage charm. Ideal for family vacations.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 15000,
    location: "Ratnagiri",
    propertyType: "Villa",
    country: "India",
  },
  {
    title: "Serviced Apartment in Nagpur",
    description:
      "A fully furnished apartment with hotel-like services. Ideal for corporate stays.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 12000,
    location: "Nagpur",
    propertyType: "Flat",
    country: "India",
  },
  {
    title: "Shared Room in Navi Mumbai",
    description:
      "Affordable shared room with access to all modern amenities. Perfect for students.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
    },
    price: 3000,
    location: "Navi Mumbai",
    propertyType: "Room",
    country: "India",
  },
  {
    title: "Modern Room in Solapur",
    description:
      "A newly renovated room in the city center. Ideal for short-term stays.",
    image: {
      filenam: "listingImage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Solapur",
    propertyType: "Room",
    country: "India",
  },
  {
    title: "Beachside Villa in Sindhudurg",
    description:
      "Luxurious villa with stunning beach views and modern interiors. Perfect for relaxation.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 22000,
    location: "Sindhudurg",
    propertyType: "Villa",
    country: "India",
  },
  {
    title: "Premium 2BHK Flat in Sangli",
    description:
      "A modern 2BHK flat with all essential amenities in a peaceful neighborhood.",
    image: {
      filenam: "listingImage",
      url: "https://plus.unsplash.com/premium_photo-1684175656154-ac52b3cc2c60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 15000,
    location: "Sangli",
    propertyType: "Flat",
    country: "India",
  },
];

module.exports = { data: sampleListings };
