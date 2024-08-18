# V Jyothi - Handloom Saree eCommerce Website

**Project Name**: V Jyothi  
**Website Link**: [www.vjyothi.com](http://www.vjyothi.com)

## Overview

V Jyothi is an online eCommerce platform designed for a renowned handloom saree shop, "V Jyothi." The shop specializes in handcrafted sarees, woven by skilled weavers. This website was developed to expand their business reach and provide customers with an easy and convenient way to purchase their unique sarees online.

![image](https://github.com/user-attachments/assets/14c8d102-5e27-4841-945e-5b5f7c381076)


## Features

- **Product Listings**: Display a wide range of handloom sarees with detailed descriptions, images, and pricing.
- **Real-Time Inventory Management**: Utilizes Firebase for real-time updates on stock availability.
- **Secure Payments**: Integrated Razorpay for secure online payments.
- **User Authentication**: Firebase Authentication for user login and registration.
- **Responsive Design**: Fully responsive, providing an optimal viewing experience across various devices.
- **CI/CD Pipeline**: Implemented using GitHub Actions for streamlined deployments.
- **Hosting and Storage**: Firebase is used for hosting, deploying, and storing both real-time and normal data.

## Technologies Used

- **Frontend**: ReactJS + Vite, Tailwind CSS
- **Backend & Hosting**: Firebase
- **Continuous Integration/Continuous Deployment (CI/CD)**: GitHub Actions
- **Payment Gateway**: Razorpay


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vjyothi.git
   cd vjyothi
2. Install the dependencies:
   ```
   npm install
3. Create a .env file and add your Firebase and Razorpay configuration keys.
4. Start the development server:
   ```
   npm run dev
5. Open your browser and go to http://localhost:5173 or http://localhost:3000 to view the website locally.

## Deployment
The website is hosted using Firebase Hosting. Follow these steps to deploy:

Install Firebase CLI if not already installed:
```
npm install -g firebase-tools
```
Login to Firebase:
```
firebase login
```
Initialize Firebase in your project:
```
firebase init
```
Deploy the website:
```
npm run build
firebase deploy
```

## Contribution
**Contributions are welcome! Please fork the repository and create a pull request with your changes.**


