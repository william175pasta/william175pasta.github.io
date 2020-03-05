import React from "react";

import HomePage from "./homePage.js";
import PlacesPage from "./placesPage.js";
import GalleryPage from "./GalleryPage.js";
import ContactPage from "./ContactPage.js";
import Footer from "./footerPage.js";

export default function App() {
    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
            <HomePage />
            <PlacesPage />
            <GalleryPage />
            <ContactPage />
            <Footer />
        </div>
    );
}
