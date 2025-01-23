# React-store

This is a React-based e-commerce application that mimics an online shopping experience. The app uses the Fake API from Platzi for product and category data and features essential e-commerce functionalities, including mock user authentication, product listing, filtering, cart management, and a mock checkout process.

## Features

### Core Features

- **Product Listing**: Dynamically fetches and displays products from the API.
- **Product Details**: Shows detailed information about a selected product.
- **Cart Management**: Allows users to add and remove items from the cart and clear the cart.
- **Category Filtering**: Enables users to filter products by category.
- **Mock Checkout**: Simulates a checkout process.
- **User Authentication**: Implements login and signup functionality with localStorage for persistence.

### Additional Features

- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Enhanced User Experience**: Dialogs and messages for better user interaction.
- **State Management**: Custom hooks and context for state sharing across components.

## Tech Stack

- **Frontend**: React, SCSS, Material-UI (for dialogs and buttons).
- **Backend**: Fake API from Platzi.
- **State Management**: Context API and custom hooks.
- **Routing**: React Router.

## File Structure

- **`src/components`**: Contains reusable components like `ProductCard`, `ShopLogo`, and `SecondaryButton`.
- **`src/context`**: Implements `AppContext` for state sharing.
- **`src/hooks`**: Includes custom hooks like `useGetProducts` and `useInitialState`.
- **`src/pages`**: Contains main pages like `Login`, `ProductList`, and `SignUp`.
- **`src/styles`**: SCSS files for styling.

## Setup Instructions

1. **Clone the Repository**

```bash
https://github.com/Snach13/React-store.git
```

2. **Navigate to the Project Directory**

```bash
cd React-store
```

3. **Install Dependencies**

```bash
npm install
```

4. **Start the Development Server**

```bash
npm run dev
```

5. **Build for Production**

```bash
npm run build
```

## API Integration

The application fetches data from the Platzi Fake API:

- **Products Endpoint**: `https://api.escuelajs.co/api/v1/products`
- **Categories Endpoint**: `https://api.escuelajs.co/api/v1/categories`

## Deployment

The app has been deployed on AWS. You can access the live version [here](https://main.d32t2pgch7pg4f.amplifyapp.com/).

## Code Quality Highlights

- **Custom Hooks**: Encapsulated logic for data fetching and state management.
- **Context API**: Used for managing global state, reducing prop drilling.
- **Reusable Components**: Modular design with components like `ProductCard` and `SecondaryButton`.
- **SCSS Modules**: Organized and reusable styles.
- **Responsive Design**: Optimized for multiple devices.

## Known Issues

- Placeholder functionality for the checkout process.
- Basic validation for forms.

## Future Improvements

- Add visually appealing designs with animations.
- Implement authentication and authorization using providers like Firebase or OAuth.
- Integrate a database for storing user and order information.
- Add payment gateway integration.
- Implement user reviews for products.
- Improve search and sorting functionalities.
- Optimize API calls with caching.
- Search functionality for quick product discovery.
- Product sorting for better user experience.
- Custom animations and UI enhancements.

## Author

Nachiket Gomkale

---

Feel free to reach out for questions or feedback at [[nachiketgomkale15@gmail.com](mailto:nachiketgomkale15@gmail.com)].
