# Pantry Tracker

A pantry management application built with Next.js, React, Firebase, and deployed on Vercel. This application allows users to track their pantry items, manage their quantities, and ensure that food is not wasted by keeping track of expiration dates.

## Features

- Add, delete, and update pantry items
- Search and filter functionality to easily find items
- User-friendly interface with Material UI
- Firebase Firestore for data storage
- Responsive design for both desktop and mobile devices

## Technologies Used

- **Frontend**: Next.js, React, Material UI
- **Backend**: Firebase Firestore
- **Deployment**: Vercel
- **APIs**: OpenAI API (for future enhancements)

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnoushahWasif/Pantry-Tracker.git
   cd pantry-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project in the Firebase console.
   - Enable Firestore database.
   - Add your Firebase configuration in `firebase.js`.

4. **Run the application locally**:
   ```bash
   npm run dev
   ```
   Open your browser and go to `http://localhost:3000`.

## Firestore Structure

The Firestore collection is structured as follows:

- **Collection**: `pantryItems`
  - **Documents**: Each document represents an item with the following fields:
    - `name`: (string) The name of the item (e.g., "Tomato Sauce")
    - `category`: (string) The category of the item (e.g., "Canned Goods")
    - `expirationDate`: (string) The expiration date of the item (e.g., "2024-12-31")
    - `quantity`: (number) The quantity of the item (e.g., 4)
    - `unit`: (string) The unit of measurement (e.g., "cans")

## Deployment

To deploy the application on Vercel:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Connect your GitHub repository to Vercel.
4. Deploy your application.

## Bonus Features (Future Enhancements)

- Image uploading for pantry items using Firebase Storage.
- Image classification using GPT Vision API.
- Recipe suggestion feature based on pantry contents using OpenAI API.

## Access it online
- Use this link to access my app https://pantry-tracker-3sg4.vercel.app/
